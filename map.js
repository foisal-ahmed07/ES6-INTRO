const number = [4, 8, 5, 6, 9];

const doubled = [];
for (num of number) {
  const double = num * 2;
  doubled.push(double);
}
console.log(doubled);

//  map property
function doubleIt(num) {
  return num * 2;
}
console.log(number.map(doubleIt));

// arrow function

const doubleIts = (num) => num * 2;
console.log(number.map(doubleIts));

console.log(number.map((num) => num * 5));
