const contact = document.getElementById('contact');
const subMenu = document.getElementById('sub-menu');

// Cacher le sous-menu initialement
subMenu.style.display = 'none';

// Ajout d'un écouteur d'événement pour gérer le clic sur l'élément de contact
contact.addEventListener('click', function(e) {
    e.preventDefault(); // Empêcher le comportement par défaut du lien

    // Vérifier si le sous-menu est actuellement affiché ou caché
    if (subMenu.style.display === 'none') {
        subMenu.style.display = 'block'; // Afficher le sous-menu
    } else {
        subMenu.style.display = 'none'; // Cacher le sous-menu
    }
});
const essayer = document.getElementById('essayer');
const subMenu1 = document.getElementById('submenu');

// Cacher le sous-menu initialement
subMenu1.style.display = 'none';

// Ajout d'un écouteur d'événement pour gérer le clic sur l'élément de contact
essayer.addEventListener('click', function(e) {
    e.preventDefault(); // Empêcher le comportement par défaut du lien

    // Vérifier si le sous-menu est actuellement affiché ou caché
    if (subMenu1.style.display === 'none') {
        subMenu1.style.display = 'block'; // Afficher le sous-menu
    } else {
        subMenu1.style.display = 'none'; // Cacher le sous-menu
    }
});
