//<<<---1---->>>>
let str = "";
for (let i = 0; i < 11; i++) {
    str = str + "-" + i ;
}
console.log(str);
//avec do while
let result = "";
let i = 0;
do {
      result = result + "-" + i;
    i = i + 1;
} while (i < 11);
console.log(result);

//<<<---2---->>>>
let str1 = "";
for (let j = 10; j >= 0; j--) {
    str1 = str1 + ", " + j ;
}
console.log(str1);
// avec do while
let result1 = "";
let j = 11;
do { j = j - 1;
    result1 = result1 + j + ", ";
    } while (j >= 1);
console.log(result1);

//<<<---3--->>>>
// const aNumber = Number(window.prompt("Veuillez saisir un nombre :"));

// let strN = "";
// for (let k = 0; k <= aNumber; k++) {
//     strN= strN  + k + ", " ;
// }
// console.log(strN);
// //////
// let result5 = "";
// let h = 0;
// do {
//     h = h + 1;
//     result5 = result5 + h + ", ";
// }
// while (h < aNumber);
// console.log(result5);

//<<<---4--->>>>
let affich = "";
let m = 0;
do {
    m = m + 1;
    affich = affich + "#";
    console.log("#");
}
while (m < 6);
console.log(affich);

let affich1 = "";
for (let i = 0; i <= 6; i++) {
    affich1 = affich1 + "#";
    console.log(affich1);
}

//<<<---5--->>>>
for (let w = 0; w <= 10; w++)
{ console.log(w+" x "+w+" = ",w*w);  }

//<<<---6--->>>>
let pair = "";
for (let z = 0; z <= 100; z +=2)
{    pair = pair + z+", ";
}
 console.log(pair);

 //<<<---7--->>>>
let impair = "";
for (let u = 0; u <= 100; u ++)
{
   if (u % 2 == 0) {
   }
else {
      impair = impair + u + ", ";
}     
}
 console.log(impair);

  //<<<---9--->>>>
let som = "";
for (let p = 0; p <= 100; p ++)
{
      som =p+ p;
     
}
 
console.log(som);