let myAge = 250;
let yourAge = 25;
console.log("j'ai ", myAge - yourAge, "ans de plus que toi.");

const anneeNais = Number(window.prompt("Veuillez saisir votre année de naissance.", ""));
let annee = new Date();
let okPermis = annee.getFullYear() - anneeNais;
let autoPermis = 18 - okPermis;
if (okPermis >= 18) {
console.log("Vous avez",okPermis,"ans, vous pouvez conduire.")
} else {
    console.log("Vous avez", okPermis, "ans, vous ne pouvez pas conduire. Vous pourrez conduire dans", autoPermis, "ans.");
}


