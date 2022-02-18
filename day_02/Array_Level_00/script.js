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
    console.log("afficher un element du tableau :",itCompanies[i]);  
}

