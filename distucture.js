const man = { name: "Foisal", age: 17, clg: "RPI", dep: "CST" };

const { name, age } = man;
console.log(name);
// OBJECT er key e veriable nam hisebe declear korchi



// advanced
function doubleThem(a, b) {
  return [a * 2, b * 2];
}
const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);
