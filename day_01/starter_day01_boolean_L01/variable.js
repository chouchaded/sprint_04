firstName= [];
lastName= [];
country = []
city = [];
age = [];
isMarried = [];
year = [];

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(1 === 1);
console.log(1 == "1");
console.log(5 < 6);

let NoParam = new Boolean();
let Zero = new Boolean(0);
let Null = new Boolean(null);
let EmptyString = new Boolean("");
let Bfalse = new Boolean(false);

console.log(NoParam);
console.log(Zero);
console.log(Null);
console.log(EmptyString);
console.log(Bfalse);




//T 4 > 3
//T 4 >= 3
//F 4 < 3
//F 4 <= 3
//T 4 == 4
//T 4 === 4
//F 4 != 4
//F 4 !== 4
//F 4 != '4'
//T 4 == '4'
//F 4 === '4'

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

let strpy = "python".length;
let strjar = "jargon".length;
let a = new Boolean(strjar);
let b = new Boolean(strpy);
console.log(a = b);

//T 4 > 3 && 10 < 12
//T 4 > 3 && 10 > 12
//T 4 > 3 || 10 < 12
//T 4 > 3 || 10 > 12
//F !(4 > 3)
//T !(4 < 3)
//T !(false)
//F !(4 > 3 && 10 < 12)
//T !(4 > 3 && 10 > 12)
//T !(4 === '4')

// There is no 'on' in both dragon and python

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

let annee = new Date();
console.log(annee.getFullYear());

let mois = new Date();
console.log(mois.getMonth()+1);

let date = new Date();
console.log(date.getDate());

let jour = new Date();
console.log(jour.getDay());

let heure = new Date();
console.log(heure.getHours());

let minutes = new Date();
console.log(minutes.getMinutes());


// Utiliser des objets Date
let debut = new Date('1970-01-01');

// Ici, l'évènement dont on veut mesurer la durée :
let fin = new Date();
let duree = fin - debut; // La durée écoulée, en millisecondes
console.log(duree/1000);