const products = {
  count: 5000,
  data: [
    { id: 1, model: "Lenovo", price: 70000 },
    { id: 1, model: "MacBook", price: 170000 },
  ],
};

console.log(products.data[1].price);

// optional chain

const person = {
  name: "foisal",
  add: {
    jela: "pabna",
    upojela: "ishwardi",
    gram: "kodimpara",
  },
};

console.log(person.add.union?.jela); // (?) is called optional chain
