// ======================
// Smooth scrolling
// ======================
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ======================
// Typing animation
// ======================
const roles = [
  "ICT Graduate",
  "Data Privacy Learner",
  "Graphic Designer",
  "Tech Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 2000);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeRole();
});

// ======================
// Contact Form Handling
// ======================
const form = document.querySelector("#contact-form");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  let data = new FormData(form);

  await fetch("https://formspree.io/f/xwpnwzyz", {
    method: "POST",
    body: data,
    headers: { "Accept": "application/json" }
  })
  .then(response => {
    if (response.ok) {
      alert("✅ Message sent successfully!");
      form.reset();
    } else {
      alert("❌ Oops! Something went wrong. Please try again.");
    }
  })
  .catch(() => {
    alert("⚠️ Network error. Please check your connection.");
  });
});

// ======================
// Navbar color animation
// ======================
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "#0d0d0d";
    header.style.transition = "background 0.5s";
  } else {
    header.style.background = "#1c1c1c";
  }
});

// ======================
// Fade-in sections
// ======================
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0px)";
      entry.target.style.transition = "all 1s ease";
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  observer.observe(section);
});

// ======================
// Glow effect on buttons
// ======================
document.querySelectorAll(".btn, form button").forEach(button => {
  button.addEventListener("click", () => {
    button.style.boxShadow = "0 0 20px #00bcd4";
    setTimeout(() => {
      button.style.boxShadow = "0 4px 12px rgba(0,0,0,0.6)";
    }, 500);
  });
});
const allSections = document.querySelectorAll("section");
const revealOptions = { threshold: 0.2 };

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-section");
      observer.unobserve(entry.target); // animate once
    }
  });
}, revealOptions);

allSections.forEach(section => {
  section.classList.add("hidden-section");
  sectionObserver.observe(section);
});

// ======================
// About Section Slideshow with Fade
// ======================
const aboutPic = document.getElementById("about-pic");

// List of images to rotate
const images = ["me1.png", "me2.png", "me3.png"]; // replace with your images
let currentIndex = 0;

setInterval(() => {
  // Fade out
  aboutPic.style.opacity = 0;

  setTimeout(() => {
    // Change image after fade out
    currentIndex = (currentIndex + 1) % images.length;
    aboutPic.src = images[currentIndex];

    // Fade in
    aboutPic.style.opacity = 1;
  }, 800); // matches CSS transition (0.8s)
}, 4000);
// Animate skills progress bars when section is visible
const skillBars = document.querySelectorAll('.progress-fill');

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      fill.style.width = fill.getAttribute('data-fill');
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress-bar");

  bars.forEach(bar => {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.innerText = `${bar.dataset.info} — ${bar.dataset.percent}`;
    bar.appendChild(tooltip);

    bar.addEventListener("mouseenter", () => {
      tooltip.style.opacity = "1";
    });

    bar.addEventListener("mouseleave", () => {
      tooltip.style.opacity = "0";
    });
  });
});
