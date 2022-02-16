let phrase1="The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(phrase1);

let phrase2="\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
console.log(phrase2);

let num=10;
let dix="10";
let dix10=parseInt(dix,10);
console.log("num :",num,"String dix:", dix);
console.log("type de variable num et str:",typeof(num),typeof(dix),typeof(dix10));
console.log("test variable num et avant parseInt",num === dix);
console.log("test variable num et apres parseInt",num === dix10);


let numVirg = 9.8;
let numNotVirg=parseFloat("9.8");
console.log("numNotVirg", numNotVirg,"typeof",typeof(numNotVirg));
console.log("test chiffre virgule 10 = 9.8", num === numNotVirg);
let numArrondi= Math.round(numNotVirg);
console.log("test chiffre arrondi 10 =9.8",num === numArrondi);

let str1="python jargon";
let str2="on";
let match=str1.includes(str2);
// let match1=str2.match("on");
console.log("result de match", match );

let str3="I hope this course is not full of jargon";
let match2=str3.includes("jargon");
console.log("result match",match2);

let numbrAlea= Math.floor(Math.random()*(101-0)+0);
console.log("chiffre 0 - 100 : ",numbrAlea);

let numbrAlea1= Math.floor(Math.random()*(101-49)+49);
console.log("chiffre 50 - 100 : ",numbrAlea1);

let numbrAlea2=Math.floor(Math.random()*(256-0)+0);
console.log("chiffre 0 - 255 : ",numbrAlea2);

let strPhrase= " - You cannot end a sentence with because because because is a conjunction -";
let recupBec= strPhrase.indexOf("because");



let recupBecFin=strPhrase.lastIndexOf("because");

let recupbecause=strPhrase.match("because");
console.log(recupbecause, typeof(recupbecause));
let nbrlettrebec="because".length;


console.log(nbrlettrebec);

console.log(recupBec, recupBecFin+nbrlettrebec);  


// let because= strPhrase.substring(recupBec,recupBecFin+nbrlettrebec);
// let because= strPhrase.substring(recupBec, nbrlettrebec*2);
let because= strPhrase.substring(recupBec, recupBec + 3 * "because".length + 2);
s
// 57 = 34 + 7 * 3 + 2
// 57 = recupBec + 3 * "because".length + 2


let sansBecause1= strPhrase.substr(0,33);
let sansBecause2= strPhrase.substring(58,74);
console.log("-"+because+"-");
console.log(because[0]);
console.log(because[because.length-1]);


console.log("phrase sans because : ", sansBecause1, " ",sansBecause2);


