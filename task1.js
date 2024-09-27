// 1
const multply = (num1, num2, num3) => num1 * num2 * num3;
console.log(multply(5, 5, 5));

// 2
const dev = `I am a developer
i love to coding
i also love to eat briyani`;
console.log(dev);

// 3

function number(num1, num2 = 0) {
  const result = num1 + num2;
  console.log(result);
  return result;
}

const num = number(5, 5);

const numbers = (num1, num2, num3 = 10) => num1 + num2 + num3;
console.log(numbers(20, 10))
