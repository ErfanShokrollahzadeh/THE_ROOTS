require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// Environment variables required
// EMAIL_HOST, EMAIL_PORT(optional), EMAIL_USER, EMAIL_PASS
// OWNER_EMAIL (destination email)

let mailTransporter = null;
async function buildTransport() {
  if (
    process.env.EMAIL_HOST &&
    process.env.EMAIL_USER &&
    process.env.EMAIL_PASS
  ) {
    const secure = process.env.EMAIL_SECURE === "false" ? false : true;
    mailTransporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT
        ? Number(process.env.EMAIL_PORT)
        : secure
        ? 465
        : 587,
      secure,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });
    try {
      await mailTransporter.verify();
      console.log("SMTP: verification success");
    } catch (e) {
      console.error("SMTP verify failed:", e.message);
    }
  } else {
    // Provide developer fallback using Ethereal (test inbox) if no creds
    const testAcct = await nodemailer.createTestAccount();
    mailTransporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: { user: testAcct.user, pass: testAcct.pass },
    });
    console.log(
      "Using Ethereal test SMTP. Login URL:",
      "https://ethereal.email/login"
    );
    console.log("Ethereal user:", testAcct.user);
    console.log("Ethereal pass:", testAcct.pass);
  }
}
buildTransport();

app.get("/health", async (_req, res) => {
  const status = { ok: true, email: !!mailTransporter };
  if (mailTransporter) {
    try {
      await mailTransporter.verify();
      status.smtpVerified = true;
    } catch (e) {
      status.smtpVerified = false;
      status.smtpError = e.message;
    }
  }
  res.json(status);
});

// Simple test email endpoint (POST { email })
app.post("/api/test-email", async (req, res) => {
  const { email } = req.body || {};
  if (!email) return res.status(400).json({ error: "email required" });
  if (!mailTransporter)
    return res.status(503).json({ error: "mail transporter not ready" });
  try {
    const info = await mailTransporter.sendMail({
      from: `The Roots Cafe <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Test Email - The Roots Cafe",
      text: "This is a test email from The Roots reservation system.",
      html: "<strong>This is a test email</strong> from The Roots reservation system.",
    });
    const result = { ok: true, messageId: info.messageId };
    if (nodemailer.getTestMessageUrl && nodemailer.getTestMessageUrl(info)) {
      result.preview = nodemailer.getTestMessageUrl(info);
    }
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// In-memory reservation store (restart clears). For production: database.
const RES_DURATION_MS = 60 * 60 * 1000; // 1 hour expiry
let reservations = []; // {id,name,email,date,time,guests,tableNumber,notes,createdAt}

function purgeExpired() {
  const now = Date.now();
  const before = reservations.length;
  reservations = reservations.filter(
    (r) =>
      new Date(r.date + "T" + r.time + ":00").getTime() + RES_DURATION_MS > now
  );
  return before - reservations.length;
}
setInterval(purgeExpired, 5 * 60 * 1000); // periodic cleanup

function getBookedTables(date, time) {
  purgeExpired();
  return reservations
    .filter((r) => r.date === date && r.time === time)
    .map((r) => r.tableNumber);
}

async function sendNotifications(resv) {
  const { name, email, date, time, guests, tableNumber, notes } = resv;
  const ownerText = `Table ${tableNumber} reserved ${date} ${time} for ${guests} guest(s). Name: ${name}${
    email ? " | " + email : ""
  }${notes ? "\nNotes: " + notes : ""}`;
  // Build friendly date parts for user email
  const dt = new Date(`${date}T${time}:00`);
  const wk = dt.toLocaleDateString("en-US", { weekday: "long" });
  const mon = dt.toLocaleDateString("en-US", { month: "long" });
  const d = dt.getDate();
  const t12 = dt.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const userText = `Your reservation has been taken on ${wk} ${mon} ${d} at ${t12}.`;
  const results = { ownerEmail: null, userEmail: null };
  try {
    const fromAddress = process.env.EMAIL_USER || "no-reply@theroots.example";
    if (mailTransporter && process.env.OWNER_EMAIL) {
      const info = await mailTransporter.sendMail({
        from: `The Roots Cafe <${fromAddress}>`,
        to: process.env.OWNER_EMAIL,
        subject: `Reservation Table ${tableNumber} ${date} ${time}`,
        text: ownerText,
        html: ownerText.replace(/\n/g, "<br/>"),
      });
      results.ownerEmail = info.messageId;
      if (nodemailer.getTestMessageUrl && nodemailer.getTestMessageUrl(info)) {
        results.ownerPreview = nodemailer.getTestMessageUrl(info);
      }
    }
    if (mailTransporter && email) {
      const userInfo = await mailTransporter.sendMail({
        from: `The Roots Cafe <${fromAddress}>`,
        to: email,
        subject: `Reservation Confirmation`,
        text: `${userText}`,
        html: `${userText}`,
      });
      results.userEmail = userInfo.messageId;
      if (
        nodemailer.getTestMessageUrl &&
        nodemailer.getTestMessageUrl(userInfo)
      ) {
        results.userPreview = nodemailer.getTestMessageUrl(userInfo);
      }
    }
  } catch (e) {
    if (!results.ownerEmail) results.ownerEmail = { error: e.message };
  }
  return results;
}

// Create reservation (assign table if needed)
app.post("/api/reservations", async (req, res) => {
  try {
    const { name, email, date, time, guests, tableNumber, notes } =
      req.body || {};
    if (!name || !date || !time || !guests) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    let tbl = Number(tableNumber) || null;
    const booked = new Set(getBookedTables(date, time));
    if (tbl) {
      if (booked.has(tbl))
        return res.status(409).json({ error: "Table already booked" });
    } else {
      for (let i = 1; i <= 50; i++) {
        if (!booked.has(i)) {
          tbl = i;
          break;
        }
      }
      if (!tbl)
        return res.status(409).json({ error: "No tables free for this slot" });
    }
    const crypto = require("crypto"); // Import crypto for randomUUID compatibility

    const resv = {
      id:
        global.crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : require("crypto").randomUUID(),
      name,
      email: email || "",
      date,
      time,
      guests: Number(guests),
      tableNumber: tbl,
      notes: notes || "",
      createdAt: Date.now(),
    };
    reservations.push(resv);
    const notify = await sendNotifications(resv);
    res.json({ ok: true, reservation: resv, notify });
  } catch (err) {
    res.status(500).json({ error: "Server error", detail: err.message });
  }
});

// Availability for a specific slot
app.get("/api/availability", (req, res) => {
  const { date, time } = req.query;
  if (!date || !time)
    return res.status(400).json({ error: "date & time required" });
  const booked = getBookedTables(date, time);
  res.json({ ok: true, booked });
});

// List active reservations (optionally filtered by date)
app.get("/api/reservations", (req, res) => {
  purgeExpired();
  const { date } = req.query;
  let list = reservations;
  if (date) list = list.filter((r) => r.date === date);
  res.json({ ok: true, reservations: list });
});

// Backward compatible notify endpoint - delegates if table already assigned
app.post("/api/notify-reservation", async (req, res) => {
  const { name, email, date, time, guests, tableNumber, notes } =
    req.body || {};
  if (!name || !email || !date || !time || !guests || !tableNumber) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const temp = { name, email, date, time, guests, tableNumber, notes };
  const notify = await sendNotifications(temp);
  res.json({ ok: true, notify });
});

// Serve static after API so routes work (static 404 otherwise)
app.use(express.static(__dirname));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Reservation notification server running on :${PORT}`)
);
