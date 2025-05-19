// Dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('darkModeSwitch');
    if (toggle) {
      toggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
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
        const email = form.elements['email'].value.trim();
        const message = form.elements['message'].value.trim();
        if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
          alert('Compila tutti i campi e inserisci un’email valida!');
          return;
        }
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
  
