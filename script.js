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

const phrases = ["Machine Learning", "Python", "Django", "AI Enthusiast"];
let i = 0;
setInterval(() => {
  document.getElementById("dynamicText").textContent = phrases[i];
  i = (i + 1) % phrases.length;
}, 2000);
