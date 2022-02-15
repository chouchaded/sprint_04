let defi ="Pratiquer les algorithmes en JavaScript";
let DEFI= defi.toUpperCase();
let miniDEFI= DEFI.toLowerCase();

console.log("defi:",defi);
console.log("longueur defi:",defi.length);
console.log("defi en majuscule:",DEFI);
console.log("defi en minuscule:",miniDEFI);

let premierMot = defi.substring(0,9);
console.log("Premier mot de defi:",premierMot);

let dixJours = "10 jours en Javascript";
let Jours= dixJours.substring(3,22);
console.log("enlever 10:",Jours);

let motscript= dixJours.includes("Script");
console.log("le mot script:",motscript);

let a="String";
let decoupeStr= a.split("");
console.log("Decoupe string",decoupeStr);

let espace= dixJours.split(" ");
console.log("espace 10:",espace);

let logo="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let virgule= logo.split(",");
console.log("tableau logo",virgule);

console.log( dixJours,"echange en :",dixJours.replace('Javascript','PHP'));

let b=dixJours.charAt(12);
console.log("Lettre a la place 12 :", b);
console.log("code J :", dixJours.charCodeAt(b));

let search= 'a';
let c=dixJours.indexOf(search);
console.log("position du premier a :",c);
let d=dixJours.lastIndexOf(search);
console.log("position du dernier a:",d);

let parceQue="Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction.";
let search1="parceque";
let e=parceQue.indexOf(search1);
console.log("Phrase :",parceQue);
console.log("1er position de parceque:",e);

let f=parceQue.lastIndexOf(search1);
console.log("derniere position de parceque:",f);

let h= "parceque";
let i=parceQue.search(h);
console.log("position de parceque avec search:",i);

console.log("Phrase sans espace:",dixJours.trim());

console.log(dixJours.startsWith("10"));
console.log(dixJours.endsWith("pt"));

let k="a";
let j=dixJours.match(k);
console.log(j);

let str1="10 jours en";
let str2="JavaScript";
console.log(str1.concat(" ",str2));

console.log("10 jours 2 fois:",dixJours.repeat(2));



