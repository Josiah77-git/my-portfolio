// ======================
// Smooth scrolling
// ======================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
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
    setTimeout(typeRole, 100); // typing speed
  } else {
    setTimeout(eraseRole, 2000); // wait before erasing
  }
}

function eraseRole() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50); // erasing speed
  } else {
    roleIndex = (roleIndex + 1) % roles.length; // next role
    setTimeout(typeRole, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeRole();
});

// ======================
// Contact Form Handling
// ======================
const form = document.querySelector("form");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  let data = new FormData(form);

  await fetch("https://formspree.io/f/xwpnwzyz", {
    method: "POST",
    body: data,
    headers: {
      "Accept": "application/json"
    }
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
