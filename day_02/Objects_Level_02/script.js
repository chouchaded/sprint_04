const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

//<<<<<-----1------>>>>
let currentMax = -1;
let userMax = null;
for (let key in users) {
   let plusSkills = users[key].skills.length;
    if (plusSkills > currentMax) {
        currentMax = plusSkills;
        userMax = key;
    }
console.log("");
}
console.log(currentMax);
console.log(userMax);
    
console.log("");
console.log("");


//<<<<<-----2------>>>>
let nbr = 0;
for (var property in users) {
  let xtrue = users[property].isLoggedIn;
  // console.log(xtrue);
  if (xtrue === true) {
    nbr ++;
  }
}
console.log("nombre de connecter",nbr)

let nbr1 = 0;
for (var property1 in users) {
  let xPoints = users[property1].points;
  // console.log(xtrue);
  if (xPoints >= 50) {
    nbr1 ++;
  }
}
console.log("Nbre de personne à 50pts", nbr1);

console.log("");
 console.log("");

 //<<<<<-----3------>>>>
let nomDev = "";
let nbr2 = "";
for (var property1 in users) {
  let xMern = users[property1].skills;
   console.log(xMern);
  if (xMern.includes("MongoDB") == true && xMern.includes("Express")==true && xMern.includes("React")==true && xMern.includes("Node")==true) {
    
    nomDev += property1+" ";
    nbr2++;
    // console.log(property1);
  }

}
console.log(nomDev,nbr2)
//
console.log("");
 console.log("");

 //<<<<<-----4------>>>>
console.log(users);
users.Yannick = {};
console.log(users);
console.log("");
 //<<<<<-----5------>>>>
console.log(Object.keys(users));

console.log("");
 //<<<<<-----6------>>>>
console.log(Object.values(users));