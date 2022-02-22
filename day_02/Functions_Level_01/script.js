//<<<----1------>>>>
function fullName() {
console.log("Subirats");
}
fullName();

//<<<----2------>>>>
function newFullName(firstName,lastName) {
        console.log(firstName + " " +lastName );
} 
newFullName("Yannick", "Subirats");

//<<<----3------>>>>
function addNumber(a, b ) {
   console.log(a + b);
 }
addNumber(2, 6);

//<<<----4------>>>>
// const longueur = Number(window.prompt("Veuillez saisir une longueur (cm):"));
// const largeur = Number(window.prompt("Veuillez saisir une largeur (cm):"));
// function areaOfRectangle(longueur, largeur) {
//     console.log("Aire d'un rectangle:", longueur * largeur+"cm2");
// }
// areaOfRectangle(longueur, largeur);

//<<<----5------>>>>
// const longueur1 = Number(window.prompt("Veuillez saisir une longueur (cm):"));
// const largeur1 = Number(window.prompt("Veuillez saisir une largeur (cm):"));
// function perimetreOfRectangle(longueur1, largeur1) {
//     console.log("Perimetre d'un rectangle:", 2*(longueur1 + largeur1)+"cm");
// }
// perimetreOfRectangle(longueur1, largeur1);

//<<<----6------>>>>
// const rayon = Number(window.prompt("Veuillez saisir un rayon (cm):"));
// function aireOfCirle(rayon) {
//     console.log("Aire d'un cercle:", Math.PI*rayon*rayon+"cm2");
// }
// aireOfCirle(rayon);

//<<<----7------>>>>
const degreCel = Number(window.prompt("Veuillez saisir une temperature C°:"));
function convertCelsFah(degreCel) {
    console.log("Celsuis converti en Fahrenheit", (degreCel* (9/5)) + 32+" F°");
}
convertCelsFah(degreCel);




