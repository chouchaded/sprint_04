// <<<<----1--->>>
const characters ='abcdefghijklmnopqrstuvwxyz0123456789';
let result1 = '';
const nbrCaract = 12;
    const charactersLength = characters.length;
    for ( let i = 0; i < nbrCaract; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
console.log(result1)
    
// <<<<----2--->>>
const characters1 ='abcdefghijklmnopqrstuvwxyz0123456789';
let result2 = '';
const nbrCaract1 = 24;
    const charactersLength1 = characters1.length;
    for ( let j = 0; j < nbrCaract1; j++ ) {
        result2 += characters1.charAt(Math.floor(Math.random() * charactersLength1));
    }
console.log(result2)
    
// <<<<----3--->>>
let az = Math.floor(Math.random() * (255 - 0) + 0);
let er =Math.floor(Math.random() * (255 - 0) + 0);
let ty =Math.floor(Math.random() * (255 - 0) + 0);
console.log("rgb"+"("+az+","+er+","+ty+")"); 