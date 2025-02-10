// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Contact form submission handler
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.');
});
