document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

  // Contact form validation
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Clear previous errors
      const errorEls = contactForm.querySelectorAll('.form-error');
      errorEls.forEach(el => el.remove());
      let valid = true;
      // Validate fields
      const name = contactForm.querySelector('#name');
      const email = contactForm.querySelector('#email');
      const service = contactForm.querySelector('#service');
      const message = contactForm.querySelector('#message');
      if (!name.value.trim()) {
        showError(name, 'Name is required');
        valid = false;
      }
      if (!email.value.trim()) {
        showError(email, 'Email is required');
        valid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
        showError(email, 'Enter a valid email');
        valid = false;
      }
      if (!service.value.trim()) {
        showError(service, 'Please select a service');
        valid = false;
      }
      if (!message.value.trim()) {
        showError(message, 'Message is required');
        valid = false;
      }
      if (valid) {
        alert('Thank you for contacting us!');
        contactForm.reset();
      }
    });
  }
  function showError(input, msg) {
    const error = document.createElement('div');
    error.className = 'form-error';
    error.style.color = 'red';
    error.style.fontSize = '0.95rem';
    error.style.marginTop = '0.25rem';
    error.textContent = msg;
    input.parentNode.insertBefore(error, input.nextSibling);
  }
}); 