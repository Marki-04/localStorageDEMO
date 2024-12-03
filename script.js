const maVariable = "Alex est alex que si alex est alex"
const autreVariable = "Autre variable pour la memoire courte"

document.querySelector(".afficher-ma-variable").textContent = maVariable;

localStorage.setItem("maMemoireLongue", maVariable); // Permanent, entre les onglets et les sessions.

sessionStorage.setItem("maMemoireCourte", autreVariable); // Juste pour la session (Après le fermement du navigateur, elle se vide si on ne le remplit pas)

// Aller chercher une variable du localStorage
const variableImportee = localStorage.getItem("maMemoireLongue");

// Aller chercher la variable du session storage
const variableCourteImportee = sessionStorage.getItem("maMemoireCourte");

// Stocker en objet
localStorage.setItem("Objet", JSON.stringify({"prenom": "Marki", "nom": "Hnativ"}));

// Récupérer un objet du LocalStorage
const monObjet =JSON.parse(localStorage.getItem("Objet"))
// Json.parse afin de pouvoir utiliser les clés de l'objet ex. objet.nom
document.querySelector(".afficher-ma-variable").textContent = monObjet.nom;


