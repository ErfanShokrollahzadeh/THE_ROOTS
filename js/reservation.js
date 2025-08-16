// Server-backed reservation system
const TOTAL_TABLES = 50;
const API_BASE =
  window.RESERVATION_API_BASE ||
  (location.port === "4000" ? "" : "http://localhost:4000");
let currentBooked = new Set(); // booked tables for currently selected slot
let lastDate = null;
let lastTime = null;
async function fetchAvailability(date, time) {
  if (!date || !time) return;
  lastDate = date;
  lastTime = time;
  try {
    const url = `${API_BASE}/api/availability?date=${encodeURIComponent(
      date
    )}&time=${encodeURIComponent(time)}`;
    const r = await fetch(url, { cache: "no-store" });
    if (!r.ok) throw new Error("status " + r.status);
    const text = await r.text();
    if (!text || text.trim().startsWith("<")) throw new Error("invalid json");
    const js = JSON.parse(text);
    currentBooked =
      js.ok && Array.isArray(js.booked) ? new Set(js.booked) : new Set();
  } catch (e) {
    console.warn("Failed to load availability", e.message || e);
    currentBooked = new Set();
  }
}

function initReservationPage() {
  injectToastStyles();
  const dateInput = document.getElementById("date");
  // Set min date = today
  const today = new Date();
  dateInput.min = today.toISOString().split("T")[0];
  dateInput.value = dateInput.min;

  buildTables();
  populateTableSelect();
  refreshAvailability();

  document
    .getElementById("reservationForm")
    .addEventListener("submit", handleReservationSubmit);
  dateInput.addEventListener("change", refreshAvailability);
  document
    .getElementById("time")
    .addEventListener("change", refreshAvailability);

  // Periodic refresh every 60s while viewing
  setInterval(() => {
    if (lastDate && lastTime) refreshAvailability();
  }, 60000);
}

function buildTables() {
  const visual = document.getElementById("tablesVisual");
  visual.innerHTML = "";
  for (let i = 1; i <= TOTAL_TABLES; i++) {
    const div = document.createElement("button");
    div.type = "button";
    div.className = "table-slot";
    div.textContent = i;
    div.dataset.table = i;
    div.setAttribute("aria-label", `Table ${i} (Available)`);
    div.addEventListener("click", () => selectTable(i));
    visual.appendChild(div);
  }
}

function populateTableSelect() {
  const select = document.getElementById("tableNumber");
  for (let i = 1; i <= TOTAL_TABLES; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `Table ${i}`;
    select.appendChild(opt);
  }
  select.addEventListener("change", () =>
    markSelected(select.value ? Number(select.value) : null)
  );
}

function refreshAvailability() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const visual = document.getElementById("tablesVisual");
  const tableSelect = document.getElementById("tableNumber");
  // Fetch availability then update UI
  fetchAvailability(date, time).then(() => {
    const bookedSet = currentBooked;

    // Update visual grid
    visual.querySelectorAll(".table-slot").forEach((btn) => {
      const num = Number(btn.dataset.table);
      btn.classList.toggle("booked", bookedSet.has(num));
      btn.disabled = bookedSet.has(num);
      if (bookedSet.has(num)) {
        btn.setAttribute("aria-label", `Table ${num} (Booked)`);
        btn.title = "Taken";
      } else {
        btn.setAttribute("aria-label", `Table ${num} (Available)`);
        btn.removeAttribute("title");
      }
    });

    // Update select disabled options
    Array.from(tableSelect.options).forEach((opt) => {
      if (!opt.value) return; // skip auto
      const num = Number(opt.value);
      opt.disabled = bookedSet.has(num);
    });

    const bookedCount = bookedSet.size;
    document.getElementById("booked-count").textContent = bookedCount;
    document.getElementById("available-count").textContent =
      TOTAL_TABLES - bookedCount;

    // Clear selected table if now booked
    const current = tableSelect.value;
    if (current && bookedSet.has(Number(current))) {
      tableSelect.value = "";
    }
    markSelected(tableSelect.value ? Number(tableSelect.value) : null);
  });
}

function selectTable(num) {
  const tableSelect = document.getElementById("tableNumber");
  const option = Array.from(tableSelect.options).find(
    (o) => Number(o.value) === num
  );
  if (option && !option.disabled) {
    tableSelect.value = String(num);
    markSelected(num);
  }
}

function markSelected(num) {
  document.querySelectorAll(".table-slot").forEach((btn) => {
    btn.classList.toggle("selected", num === Number(btn.dataset.table));
  });
}

function handleReservationSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const statusEl = document.getElementById("statusMessage");
  statusEl.textContent = "";
  statusEl.className = "status-message";

  if (!form.checkValidity()) {
    statusEl.textContent = "Please fill required fields correctly.";
    statusEl.classList.add("error");
    return;
  }

  const data = {
    id: crypto.randomUUID(),
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    date: form.date.value,
    time: form.time.value,
    guests: Number(form.guests.value),
    tableNumber: form.tableNumber.value ? Number(form.tableNumber.value) : null,
    notes: form.notes.value.trim(),
  };

  // Auto assign table if not chosen
  if (!data.tableNumber) {
    // Use fetched availability set
    const bookedSet = currentBooked;
    let assigned = null;
    for (let i = 1; i <= TOTAL_TABLES; i++) {
      if (!bookedSet.has(i)) {
        assigned = i;
        break;
      }
    }
    if (!assigned) {
      statusEl.textContent = "No tables available for that slot.";
      statusEl.classList.add("error");
      return;
    }
    data.tableNumber = assigned;
  }

  // Submit to server
  const postUrl = `${API_BASE}/api/reservations`;
  fetch(postUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(async (r) => {
      // First attempt
      if (r.status === 405 && !API_BASE.includes("localhost:4000")) {
        // Retry to backend on port 4000
        const rr = await fetch("http://localhost:4000/api/reservations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        return { retryResponse: rr };
      }
      return { original: r };
    })
    .then(async (ctx) => {
      let r = ctx.retryResponse || ctx.original;
      let payload = null;
      try {
        payload = await r.json();
      } catch (_) {}
      if (!r.ok || !payload || payload.ok === false) {
        const msg =
          (payload && (payload.error || payload.detail)) || "Failed to reserve";
        throw new Error(msg);
      }
      const tbl =
        (payload.reservation && payload.reservation.tableNumber) ||
        data.tableNumber;
      const confirmation = `Your table has been reserved. Table ${tbl} for ${data.guests} guest(s) at ${data.time}.`;
      statusEl.textContent = confirmation;
      statusEl.classList.add("success");
      showToast(confirmation, "success");
      refreshAvailability();
    })
    .catch((err) => {
      statusEl.textContent = err.message;
      statusEl.classList.add("error");
      showToast(err.message, "error");
      refreshAvailability();
    });
  form.reset();
  // Keep date/time
  form.date.value = data.date;
  form.time.value = data.time;
  // Availability refresh happens after server response
}

// Toast utilities
function injectToastStyles() {
  if (document.getElementById("toast-styles")) return;
  const style = document.createElement("style");
  style.id = "toast-styles";
  style.textContent = `
    .toast-container { position: fixed; top: 20px; right: 20px; z-index: 9999; display: flex; flex-direction: column; gap: 12px; }
    .toast { min-width: 260px; max-width: 340px; background: #fff; border-radius: 14px; padding: 14px 18px 14px 52px; box-shadow: 0 8px 24px rgba(0,0,0,.18); font: 600 0.9rem/1.3 'Lato',sans-serif; color:#5d4e37; position: relative; overflow:hidden; opacity:0; transform: translateY(-10px); animation: toastIn .45s cubic-bezier(.4,0,.2,1) forwards; }
    .toast.success { border-left: 6px solid #22a06b; }
    .toast.error { border-left: 6px solid #c0392b; }
    .toast::before { content: ""; position:absolute; left:0; top:0; height:100%; width:0; background:linear-gradient(135deg,#d4af37,#f4d03f); opacity:.15; }
    .toast.success::after, .toast.error::after { content: ""; position:absolute; left:0; bottom:0; height:3px; background:linear-gradient(90deg,#d4af37,#f4d03f,#d4af37); animation: toastBar 6s linear forwards; }
    .toast.success::after { width:100%; }
    @keyframes toastIn { to { opacity:1; transform:translateY(0); } }
    @keyframes toastOut { to { opacity:0; transform:translateY(-8px); } }
    @keyframes toastBar { from { width:100%; } to { width:0; } }
    .toast-close { position:absolute; top:6px; right:8px; background:none; border:none; font-size:1rem; cursor:pointer; color:#866c48; }
    .toast-icon { position:absolute; left:14px; top:50%; transform:translateY(-50%); font-size:1.1rem; }
  `;
  document.head.appendChild(style);
  const container = document.createElement("div");
  container.className = "toast-container";
  container.setAttribute("role", "alert");
  container.setAttribute("aria-live", "polite");
  document.body.appendChild(container);
}

function showToast(message, type = "success") {
  const container = document.querySelector(".toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  const icon =
    type === "success"
      ? '<i class="fas fa-check-circle"></i>'
      : '<i class="fas fa-exclamation-triangle"></i>';
  toast.innerHTML = `<span class="toast-icon">${icon}</span>${message}<button class="toast-close" aria-label="Close">×</button>`;
  container.appendChild(toast);
  const remove = () => {
    toast.style.animation = "toastOut .35s ease forwards";
    setTimeout(() => toast.remove(), 350);
  };
  toast.querySelector(".toast-close").addEventListener("click", remove);
  setTimeout(remove, 6000);
}

// Initialize after DOM loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initReservationPage);
} else {
  initReservationPage();
}
