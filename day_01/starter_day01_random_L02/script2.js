let annee = new Date();
let mois = new Date();
let date = new Date();
let jour = new Date();
let heure = new Date();
let minutes = new Date();

console.log(annee);


console.log(annee.getFullYear()+"-"+(mois.getMonth()+1)+"-"+date.getDate()+" "+heure.getHours()+":"+minutes.getMinutes());
console.log(date.getDate()+"-"+(mois.getMonth()+1)+"-"+annee.getFullYear()+" "+heure.getHours()+":"+minutes.getMinutes());
console.log(date.getDate()+"/"+(mois.getMonth()+1)+"/"+annee.getFullYear()+" "+heure.getHours()+":"+minutes.getMinutes());

