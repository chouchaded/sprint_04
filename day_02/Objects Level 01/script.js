let chien = new Object ();
console.log(chien, typeof (chien));

chien.nom = "Jhon";
chien.age = 12;
chien.pattes = true;
chien.bark = function () {
    return "woof woof";
}
chien.race = undefined;
chien.getDogInfo = function () {
    
}

console.log(chien);
console.log(chien.bark());
console.log(chien.nom);
console.log(chien.age);
console.log(chien.pattes);

