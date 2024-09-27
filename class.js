const products = [
  { id: 1, model: "Lenovo", price: 75000 },
  { id: 2, model: "hp", price: 70000 },
  { id: 3, model: "dell", price: 50000 },
  { id: 4, model: "lenovo", price: 109000 },
  { id: 5, model: "apple", price: 175000 },
];

//  class has property and method
class product {
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}

const talks = new product("le le Pocal par");
console.log(talks);
talks.speak("Programming");



//
class Teacher {
  constructor(name, sub) {
    this.name = name;
    this.sub = sub;
  }
  lecture() {
    console.log("sir is teaching math");
  }
}

const sir = new Teacher("Abdul sir", "math");

console.log(sir);
