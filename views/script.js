document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById('theme-toggle');

  themeToggle.addEventListener('click', function() {
    if (document.body.classList.contains('light')) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      // Swap icons: hide sun, show moon
      themeToggle.querySelector('.bi-sun-fill').classList.add('d-none');
      themeToggle.querySelector('.bi-moon-fill').classList.remove('d-none');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      // Swap icons: hide moon, show sun
      themeToggle.querySelector('.bi-moon-fill').classList.add('d-none');
      themeToggle.querySelector('.bi-sun-fill').classList.remove('d-none');
    }
  });

  // Initialize AOS for scroll animations
  AOS.init({
    duration: 1200,
    once: true
  });

  // Initialize particles.js for an interactive background
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#ffffff" },
      "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
      "opacity": { "value": 0.5, "random": false },
      "size": { "value": 3, "random": true },
      "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
      "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": {
        "grab": { "distance": 200, "line_linked": { "opacity": 1 } },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
  });

  // Initialize Typed.js for dynamic header text
  const typed = new Typed('.typed-text', {
    strings: ["Innovative.", "Creative.", "Passionate.", "Meticulous."],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
});
