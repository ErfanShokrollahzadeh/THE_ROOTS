// Smooth scroll animation for menu items
document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = "smooth";

  // Immediate render: remove delayed intersection animations to improve scroll performance
  document.querySelectorAll(".menu-section").forEach((sec) => {
    sec.style.opacity = "1";
    sec.style.transform = "none";
  });

  // Add click effects to menu items
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Add ripple effect
      const ripple = document.createElement("div");
      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.background = "rgba(212, 175, 55, 0.3)";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "ripple 0.6s linear";
      ripple.style.left = "50%";
      ripple.style.top = "50%";
      ripple.style.width = "20px";
      ripple.style.height = "20px";
      ripple.style.marginLeft = "-10px";
      ripple.style.marginTop = "-10px";

      this.style.position = "relative";
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Category filtering functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  const menuSectionsForFilter = document.querySelectorAll(".menu-section");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class and aria-pressed from all buttons
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });

      // Add active class and aria-pressed to clicked button
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");

      const category = button.dataset.category;

      // Add loading state
      button.style.pointerEvents = "none";

      menuSectionsForFilter.forEach((section, index) => {
        if (category === "all" || section.dataset.category === category) {
          section.style.display = "block";
          section.style.opacity = "0";
          section.style.transform = "translateY(30px)";

          setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
          }, 100 + index * 50); // Staggered animation
        } else {
          section.style.opacity = "0";
          section.style.transform = "translateY(-20px)";

          setTimeout(() => {
            section.style.display = "none";
          }, 300);
        }
      });

      // Remove loading state
      setTimeout(() => {
        button.style.pointerEvents = "auto";
      }, 500);
    });

    // Add keyboard support
    button.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        button.click();
      }
    });
  });

  // Parallax effect for background
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    document.body.style.backgroundPosition = `center ${rate}px`;
  });

  // Logo rotation effect
  const logo = document.querySelector(".logo-circle");
  if (logo) {
    logo.addEventListener("mouseenter", () => {
      logo.style.transform = "scale(1.05) rotateY(10deg)";
    });

    logo.addEventListener("mouseleave", () => {
      logo.style.transform = "scale(1) rotateY(0deg)";
    });
  }

  // QR code hover animation
  const qrCode = document.querySelector(".qr-placeholder");
  if (qrCode) {
    qrCode.addEventListener("mouseenter", () => {
      qrCode.style.transform = "translateY(-5px) rotateZ(2deg)";
    });

    qrCode.addEventListener("mouseleave", () => {
      qrCode.style.transform = "translateY(0) rotateZ(0deg)";
    });
  }

  // Smooth price highlight animation
  const prices = document.querySelectorAll(".price");
  prices.forEach((price) => {
    price.addEventListener("mouseenter", () => {
      price.style.transform = "scale(1.1)";
      price.style.textShadow = "0 2px 8px rgba(212, 175, 55, 0.4)";
    });

    price.addEventListener("mouseleave", () => {
      price.style.transform = "scale(1)";
      price.style.textShadow = "0 1px 2px rgba(0, 0, 0, 0.1)";
    });
  });

  // Social media links animation
  const socialLinks = document.querySelectorAll(".social-link");
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-5px) scale(1.15) rotateZ(10deg)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "translateY(0) scale(1) rotateZ(0deg)";
    });
  });

  // Add loading animation
  const body = document.body;
  body.style.opacity = "0";
  body.style.transition = "opacity 0.5s ease";

  window.addEventListener("load", () => {
    body.style.opacity = "1";
  });

  // Removed scroll animation handler for performance.
});

// Add ripple animation keyframes dynamically
const style = document.createElement("style");
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
    
    @keyframes shimmer {
        0% {
            background-position: -200% 0;
        }
        100% {
            background-position: 200% 0;
        }
    }
`;
document.head.appendChild(style);

// Add seasonal effects (optional)
function addSeasonalEffects() {
  const currentMonth = new Date().getMonth();

  // Add subtle seasonal colors
  if (currentMonth >= 11 || currentMonth <= 1) {
    // Winter
    document.documentElement.style.setProperty("--seasonal-accent", "#e8f4fd");
  } else if (currentMonth >= 2 && currentMonth <= 4) {
    // Spring
    document.documentElement.style.setProperty("--seasonal-accent", "#f0fdf0");
  } else if (currentMonth >= 5 && currentMonth <= 7) {
    // Summer
    document.documentElement.style.setProperty("--seasonal-accent", "#fffbeb");
  } else {
    // Autumn
    document.documentElement.style.setProperty("--seasonal-accent", "#fef3e2");
  }
}

addSeasonalEffects();
