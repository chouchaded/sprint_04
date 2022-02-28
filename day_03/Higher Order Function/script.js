const countries = ['Finland', 'Sweden', 'Denmark', 'norway', 'Iceland']
const names = ['Max', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]



//<<<<-----1---------->>>>>>
//La méthode forEach() permet d'exécuter une fonction donnée sur chaque
// élément du tableau.

//La méthode map() crée un nouveau tableau avec les résultats de l'appel
// d'une fonction fournie sur chaque élément du tableau appelant.

//La méthode filter() crée et retourne un nouveau tableau contenant tous les 
//éléments du tableau d'origine qui remplissent une condition déterminée
// par la fonction callback.

//La méthode reduce() applique une fonction qui est un « accumulateur » et qui 
//traite chaque valeur d'une liste (de la gauche vers la droite) afin de
// la réduire à une seule valeur.

countries.forEach(element => console.log(element));
console.log("");
names.map(element => console.log(element));
console.log("");
numbers.filter(element => console.log(element));
console.log("");

countries.map(element => console.log(element.toUpperCase()));
console.log("");
countries.map(element => console.log(element.length));
console.log("");
numbers.map(element => console.log(Math.sqrt(element)));
console.log("");
names.map(element => console.log(element.toUpperCase()));
console.log("");
countries.filter(element => {
  if (element.includes("land")) {
    console.log(element)
  }
});


console.log("");


countries.filter(element => {
  if (element.length == 6) {
    console.log(element)
  }
});
  
console.log("");

countries.filter(element => {
  if (element.length >= 6) {
    console.log(element);
  }
}
 );

console.log("");
//<<<<--------13---------->>>>>>
names.filter(element => {
  if (element.includes("E")) {
    console.log(element);
  }
});
console.log("");
//<<<<--------14---------->>>>>>
products.filter(element => console.log(element.price));

console.log("");

//<<<<--------15---------->>>>>>
const initialValue = 0;
const sumWithInitial = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);

console.log("");

//<<<<--------16---------->>>>>>
const valeurInit = "";
const sommeValeur = countries.reduce(
  (previousValue, currentValue) => previousValue + currentValue+", ",
  valeurInit
);

console.log(sommeValeur, "are north European countries.");

console.log("");
//<<<<--------17---------->>>>>>
// La méthode some() teste si au moins un élément du tableau passe le test implémenté par la fonction fournie.Elle renvoie un booléen indiquant le résultat du test.
// La méthode every() permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument. Cette méthode renvoie un booléen pour le résultat du test.
console.log("");

//<<<<--------18---------->>>>>>
console.log(names);

let someResult= names.some(checkAdult);
function checkAdult(age) {
    return age.length > 10;
}
console.log(someResult);
//-----------------------------------
const sup7 = (element) => element.length >= 7;
 console.log(names.some(sup7));

console.log("");
//<<<<--------19---------->>>>>>
let ltreland= countries.every(checkLand);
function checkLand(lLand) {
  console.log(lLand);
    return lLand.includes("n");
}
console.log(ltreland);



console.log(countries);
let lettreLand = (element) => element.includes("n");

console.log(countries.every(lettreLand));


function disemvowel(str) {
  console.log(str.replace("e"));
  return str;
}


