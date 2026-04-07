// Common functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
  
  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // WhatsApp button functionality
  const whatsappButtons = document.querySelectorAll('.btn-wa, .fab');
  whatsappButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      if (this.classList.contains('fab')) {
        e.preventDefault();
      }
      // Check if CONFIG is available, otherwise use default
      const phoneNumber = (typeof CONFIG !== 'undefined') ? CONFIG.whatsapp.phoneNumber : '919876543210';
      const message = (typeof CONFIG !== 'undefined') ? encodeURIComponent(CONFIG.whatsapp.message) : encodeURIComponent('Hi! I\'m interested in your travel services.');
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    });
  });

  // Call button functionality
  const callButtons = document.querySelectorAll('.btn-ghost');
  callButtons.forEach(btn => {
    if (btn.textContent.includes('Call') || btn.textContent.includes('WhatsApp')) {
      btn.addEventListener('click', function() {
        if (this.textContent.includes('Call')) {
          const phoneNumber = (typeof CONFIG !== 'undefined') ? CONFIG.businessPhone.replace(/\s/g, '') : 'tel:+919876543210';
          window.location.href = phoneNumber.startsWith('tel:') ? phoneNumber : 'tel:' + phoneNumber;
        } else if (this.textContent.includes('WhatsApp')) {
          const phoneNumber = (typeof CONFIG !== 'undefined') ? CONFIG.whatsapp.phoneNumber : '919876543210';
          const message = (typeof CONFIG !== 'undefined') ? encodeURIComponent(CONFIG.whatsapp.message) : encodeURIComponent('Hi! I\'m interested in your travel services.');
          window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        }
      });
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Form submission handler
  const forms = document.querySelectorAll('form, .form-card, .form-side');
  if (forms.length > 0) {
    forms.forEach(form => {
      const submitBtn = form.querySelector('button[type="submit"], .btn-send, .btn-confirm');
      if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
          const inputs = form.querySelectorAll('input[required], textarea[required]');
          let isValid = true;
          
          inputs.forEach(input => {
            if (!input.value.trim()) {
              isValid = false;
              input.style.borderColor = '#e74c3c';
              input.style.boxShadow = '0 0 0 2px rgba(231, 76, 60, 0.2)';
            } else {
              input.style.borderColor = '';
              input.style.boxShadow = '';
            }
          });

          if (isValid) {
            e.preventDefault();
            alert('Form submitted successfully!');
            // You can add actual form submission logic here
          }
        });
      }
    });
  }

  // Vehicle selection handler for trip-builder
  const vehicleCards = document.querySelectorAll('.v-card.selected');
  vehicleCards.forEach(card => {
    const selectBtn = card.querySelector('.btn-select');
    if (selectBtn && selectBtn.classList.contains('btn-selected')) {
      // Pre-select the card
      updatePricing();
    }
  });

  // Tab switching functionality
  const tripTabs = document.querySelectorAll('.trip-tab');
  tripTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tripTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Add-on toggle functionality
  const addonItems = document.querySelectorAll('.addon-item');
  addonItems.forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('included');
    });
  });

  // Price range slider
  const rangeInput = document.querySelector('.range-input');
  if (rangeInput) {
    rangeInput.addEventListener('input', function() {
      const maxPrice = 50 + (this.value / 100) * 450;
      const rangeVals = document.querySelector('.range-vals');
      if (rangeVals) {
        rangeVals.querySelector('span:last-child').textContent = '₹' + Math.round(maxPrice) + '/km';
      }
    });
  }
});

// Utility function to update pricing
function updatePricing() {
  const pricingPanel = document.querySelector('.pricing-panel');
  if (pricingPanel) {
    // This would typically calculate based on selected vehicle and add-ons
    console.log('Pricing updated');
  }
}

// Scroll to top on page load
window.addEventListener('load', function() {
  window.scrollTo(0, 0);
});
