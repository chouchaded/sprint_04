const anneeNais = Number(window.prompt("Veuillez saisir votre année de naissance.", ""));
let date = new Date();
let annee = date.getFullYear();
// let dateAnnee = new Date(anneeNais);
let duree = ((((annee - anneeNais)*365)*24)*3600);

console.log(anneeNais,annee,duree)


