let tablo = [];
console.log("tablo vide", tablo);

let tablo1 = ["a","b", "c", "d", "e"];
console.log("tablo avec 5 elements:", tablo1);
console.log("longueur tablo1:", tablo1.length);
console.log("premier element:", tablo1[0]);
console.log("element du milieu:", tablo1[2]);
console.log("dernier element:", tablo1[tablo1.length - 1]);

let mixedDataTypes = ["z", 4, false, null, undefined, true,58.2555];
console.log("tablo mixte", mixedDataTypes);
console.log("tablo mixte", typeof (mixedDataTypes));

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log("Tableau Entreprise", itCompanies);
console.log("premier element:", itCompanies[0]);
let itCompaniesMiddle = Math.round((itCompanies.length-1) / 2);
console.log("element du milieu:", itCompanies[itCompaniesMiddle]);
console.log("dernier element:", itCompanies[itCompanies.length - 1]);

let nombreEl = itCompanies.length;
for (let i = 0; i < nombreEl; i++) {
    console.log("afficher un element du tableau :", itCompanies[i]);
}
let nombreEl1 = itCompanies.length;
for (let i = 0; i < nombreEl1; i++) {
    console.log("afficher un element du tableau :", itCompanies[i].toUpperCase());
}

// console.log(itCompanies.join(", "), "sont de grandes entreprises d'IT");

// let nomIT = window.prompt("Verfication nom de l'entreprise:");
// if (itCompanies.indexOf(nomIT) === -1)
//  {
//     console.log("une société introuvable")
// } else {
//     console.log("Societe existante :",nomIT)
// }

console.log("triage alphabetique", itCompanies.sort());

console.log("triage alphabetique inverse", itCompanies.reverse());

console.log("triage moins les 3 premiers Element:", itCompanies.sort().slice(0,-4));

console.log("triage moins les 3 derniers Element:", itCompanies.sort().slice(itCompanies.length - 3));

console.log("Recupere Google:", itCompanies.sort().slice(itCompanies.length / 2, -itCompanies.length / 2));
console.log(itCompanies);

let copyitCompanies = itCompanies.slice();
console.log("Effacer Apple:", itCompanies.splice(1));
console.log(itCompanies);
console.log(copyitCompanies);
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
console.log("Effacer Apple:", itCompanies.splice(itCompanies.length / 2,1));
console.log(itCompanies);
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log("Effacer dernier:", itCompanies.splice(itCompanies.length-1,1));
console.log(itCompanies);
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log("Effacer tout:", itCompanies.splice(itCompanies.length));
console.log(itCompanies);



// itCompanies.splice(itCompanies.length/2, 1)
// console.log(itCompanies);





