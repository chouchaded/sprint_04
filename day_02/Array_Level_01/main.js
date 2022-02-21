console.log(countries);
console.log(webTechs);


// <<<---2--->>
let text =
    "I love teaching and empowering people. I teach HTML, CSS, JS, VueJs, Laravel.";
console.log(text);
let words = text.split(" ");
console.log(words);
console.log(words.length);

// <<<---3---->>
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart);
let newshoppingCart = shoppingCart.unshift('Meat');
console.log(shoppingCart); 
let newshoppingCart1 = shoppingCart.push('Sugar');
console.log(shoppingCart); 
let posHoney = shoppingCart.indexOf('Honey');
let newshoppingCart2 = shoppingCart.splice(posHoney, 1);
console.log(shoppingCart); 
let posTea = shoppingCart.indexOf('Tea');
shoppingCart[posTea] = "Green Tea";
console.log(shoppingCart); 

// <<<---4---->>
console.log(countries);
let findMorocco = countries.indexOf("Morocco");
if (findMorocco == -1) {
    console.log("Pas bon");
}else { console.log("Yes trouvé ! Morocco") };

// <<<---5---->>
console.log(webTechs);
let findSass = webTechs.includes("Sass");
if (findSass == false) {
    let newTechs = webTechs.push("Sass");
    console.log(webTechs)
} else { console.log("Sass est un préprocesseur CSS", webTechs); }

// <<<---6---->>
const frontEnd = ['HTML', 'CSS', 'JS', 'VueJs', 'VueX'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
