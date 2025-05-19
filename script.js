// Dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('darkModeSwitch');
    if (toggle) {
      toggle.addEventListener('click', function() {

        // qua ci va la logica per mettere la classe dark-mode o light-mode

        localStorage.setItem('darkmode', document.body.classList.contains('dark-mode'));
      });
      // Persistenza su reload
      if (localStorage.getItem('darkmode') === 'true') {
        document.body.classList.add('dark-mode');
      }
    }
  
    // Validazione form
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = form.elements['name'].value.trim();
     
        // altri campi del form per la validazione

        // Successo: mostra modal Bootstrap se c'è, altrimenti alert
        const modal = document.getElementById('successModal');
        if (modal) {
          const bsModal = new bootstrap.Modal(modal);
          bsModal.show();
        } else {
          alert('Messaggio inviato con successo!');
        }
        form.reset();
      });
    }
  });
  