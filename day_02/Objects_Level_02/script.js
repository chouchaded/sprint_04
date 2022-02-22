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

// console.log(users);
// console.log(Object.getOwnPropertyNames(users));
let currentMax = -1;
let userMax = null;
for (let key in users) {
    console.log("key",key);
   let plusSkills = users[key].skills.length;
    console.log("plusSkills", plusSkills);
    console.log("currentMax",currentMax);
    if (plusSkills > currentMax) {
            
        currentMax = plusSkills;
       console.log("curentMAx", currentMax);
        userMax = key;
        console.log("userMax", userMax);
    }
console.log("");
}
console.log(currentMax);
console.log(userMax);
    
console.log("");
console.log("");

let tabTrueLog = [];
for (let key1 in users) {
    console.log(users[key1].isLoggedIn);
    let trueLog = users[key1].isLoggedIn;
    
    tabTrueLog.push(trueLog);

    console.log(tabTrueLog);
    let z = Array.tabTrueLog.filter(true);
    console.log("Nbr de Connecte", z);
    
}
