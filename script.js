// ÉTAPE 1 : On sélectionne le bouton "Mode Sombre" par son ID
const boutonTheme = document.querySelector('#mode-sombre');

// ÉTAPE 2 : On sélectionne tout le corps de la page (body)
const corpsPage = document.querySelector('body');

// ÉTAPE 3 : On crée l'événement. Quand on CLIQUE sur le bouton...
boutonTheme.addEventListener('click', () => {
    
    // On ajoute ou on enlève la classe "dark-mode" au body
    corpsPage.classList.toggle('dark-mode');
    
    // On change le texte du bouton selon l'état
    if (corpsPage.classList.contains('dark-mode')) {
        boutonTheme.textContent = "Passer au Mode Clair";
    } else {
        boutonTheme.textContent = "Passer au Mode Sombre";
    }
});

// EXEMPLE POUR UNE CARTE (L'IA par exemple)
const carteIA = document.querySelector('#ia');

carteIA.addEventListener('click', () => {
    // On change la couleur de fond juste pour cette carte au clic
    carteIA.style.backgroundColor = "#d4edda"; 
    alert("Vous avez cliqué sur la veille IA !");
});