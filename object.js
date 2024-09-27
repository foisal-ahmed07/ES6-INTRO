const products = [
  { id: 1, model: "Lenovo", price: 75000 },
  { id: 2, model: "hp", price: 70000 },
  { id: 3, model: "dell", price: 50000 },
  { id: 4, model: "lenovo", price: 109000 },
  { id: 5, model: "apple", price: 175000 },
];
//map
console.log(products.map((products) => products.model));

// foreach
products.forEach((p) => console.log(p.id));

// filter
const expensive = products.filter((p) => p.price > 60000);
console.log(expensive);

// find
const find = products.find((p) => p.price < 80000);
console.log(find);

// reduce
const total = products.reduce((p, c) => p + c.price, 0);
console.log(total);
