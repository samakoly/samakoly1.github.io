function handleSubmit(event) {
    event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
    
    // Récupérer les valeurs saisies par l'utilisateur
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;

    // Enregistrer les données dans localStorage pour les afficher sur une autre page
    localStorage.setItem("nom", nom);
    localStorage.setItem("prenom", prenom);

    // Redirection vers welcom.html après 2 secondes
    setTimeout(function() {
        window.location.href = "welcom.html";
    }, 2000);
}
