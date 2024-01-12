document.addEventListener('DOMContentLoaded', function() {
    const submenuToggle = document.querySelector('.submenu-toggle');
    const submenu = document.querySelector('.submenu');
  
    submenuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      submenu.classList.toggle('show');
    });
  });
  