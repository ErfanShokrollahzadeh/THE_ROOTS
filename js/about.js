// About Page Interactive Features
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        entry.target.classList.add("animate");

        // Add staggered animation for grid items
        if (
          entry.target.classList.contains("values-grid") ||
          entry.target.classList.contains("team-grid")
        ) {
          const items = entry.target.children;
          Array.from(items).forEach((item, index) => {
            item.style.animationDelay = `${index * 0.2}s`;
          });
        }
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll(
    ".story-section, .values-grid, .team-grid, .location-section, .cta-section"
  );
  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  // Team member image parallax effect
  const teamImages = document.querySelectorAll(".member-image");

  teamImages.forEach((image) => {
    image.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      const img = this.querySelector("img");
      img.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    image.addEventListener("mouseleave", function () {
      const img = this.querySelector("img");
      img.style.transform = "perspective(500px) rotateX(0) rotateY(0) scale(1)";
    });
  });

  // Logo rotation on scroll
  const logo = document.querySelector(".logo-circle");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;
    const scrollDiff = currentScrollY - lastScrollY;

    if (logo) {
      const currentRotation =
        parseInt(logo.style.transform.replace(/[^\d-]/g, "")) || 0;
      logo.style.transform = `rotate(${currentRotation + scrollDiff * 0.5}deg)`;
    }

    lastScrollY = currentScrollY;
  });

  // Contact item hover effects
  const contactItems = document.querySelectorAll(".contact-item");

  contactItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(15px) scale(1.02)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0) scale(1)";
    });
  });

  // Value cards interactive hover
  const valueCards = document.querySelectorAll(".value-card");

  valueCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      // Add pulse effect to icon
      const icon = this.querySelector(".value-icon");
      icon.style.animation = "pulse 0.6s ease-in-out";

      // Add subtle glow effect
      this.style.boxShadow =
        "0 25px 50px rgba(139, 115, 85, 0.2), 0 0 30px rgba(139, 115, 85, 0.1)";
    });

    card.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".value-icon");
      icon.style.animation = "";
      this.style.boxShadow = "";
    });
  });

  // Add loading animation for images
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1";
      this.style.transform = "scale(1)";
    });

    // Set initial state
    img.style.opacity = "0";
    img.style.transform = "scale(0.8)";
    img.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  // CTA buttons enhanced interaction
  const ctaButtons = document.querySelectorAll(".cta-btn");

  ctaButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) scale(1.05)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });

    button.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Add CSS for ripple animation
  const style = document.createElement("style");
  style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        .cta-btn {
            position: relative;
            overflow: hidden;
        }
    `;
  document.head.appendChild(style);

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  let scrollTimeout;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)";
      navbar.style.backdropFilter = "blur(25px)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.backdropFilter = "blur(20px)";
    }

    // Add scroll indicator
    clearTimeout(scrollTimeout);
    navbar.style.borderBottom = "2px solid rgba(139, 115, 85, 0.3)";

    scrollTimeout = setTimeout(() => {
      navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.3)";
    }, 150);
  });
});
