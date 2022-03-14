for (i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("");
console.log("");

let r = "";
let j = 0;
do {
  j = j + 1;
  r = r + j;
  console.log(r);
} while (j <= 10);

console.log("");
console.log("");

for (p = 5; p <= 30; p += 5) {
  console.log(p + " " + ((p * 1.609344) | 0));
}
