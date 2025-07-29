// Initialize particles.js background animation
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#64ffda"  // your green accent color
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.3,
      "random": false
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#64ffda",
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"  // particles connect with mouse on hover
      },
      "onclick": {
        "enable": true,
        "mode": "push"  // adds particles on click
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});


// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollBar = document.getElementById("scrollBar");
  const winScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  scrollBar.style.width = scrolled + "%";
});

// Animate sections on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// Theme Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
});

// Particle.js config
particlesJS.load('particles-js', 'particles.json');

window.addEventListener("scroll", () => {
  document.querySelectorAll('.parallax').forEach((el) => {
    const speed = 0.4;
    const yOffset = window.scrollY * speed;
    el.style.backgroundPosition = `center ${yOffset}px`;
  });
});

// const phrases = ["Machine Learning", "Python", "Django", "AI Enthusiast"];
// let i = 0;
// setInterval(() => {
//   document.getElementById("dynamicText").textContent = phrases[i];
//   i = (i + 1) % phrases.length;
// }, 2000);


// const phrases = ["Machine Learning", "Python", "Django", "AI Enthusiast"];
// let charIndex = 0;
// let phraseIndex = 0;
// let deleting = false;
// const dynamicText = document.getElementById("dynamicText");

// function typeEffect() {
//   const currentPhrase = phrases[phraseIndex];
//   if (!deleting) {
//     dynamicText.textContent = currentPhrase.substring(0, charIndex++);
//     if (charIndex > currentPhrase.length) {
//       deleting = true;
//       setTimeout(typeEffect, 1000); // wait before deleting
//       return;
//     }
//   } else {
//     dynamicText.textContent = currentPhrase.substring(0, charIndex--);
//     if (charIndex === 0) {
//       deleting = false;
//       phraseIndex = (phraseIndex + 1) % phrases.length;
//     }
//   }
//   setTimeout(typeEffect, deleting ? 50 : 100);
// }
// typeEffect();



window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// GSAP Scroll Animations (Super smooth & pro-looking)
gsap.utils.toArray('.section').forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
  });
});

// 3D Hover Tilt Effect on Cards
document.querySelectorAll('.project, .blog-post').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    card.style.transform = `rotateX(${(y - 0.5) * 10}deg) rotateY(${(x - 0.5) * -10}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});

// Loading Animation Before Page Shows
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 500);
});


// Dynamic Text Typing Effect
gsap.from(".about-glass", {
  scrollTrigger: {
    trigger: ".about-glass",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power2.out"
});
