console.clear();

let operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  const addition = operand1 + operand2;
  console.log(addition);
});

subtractButton.addEventListener("click", () => {
  const subtraction = operand1 - operand2;
  console.log(subtraction);
});

multiplyButton.addEventListener("click", () => {
  const multiplication = operand1 * operand2;
  console.log(multiplication);
});

divideButton.addEventListener("click", () => {
  const division = operand1 / operand2;
  console.log(division);
});

exponentButton.addEventListener("click", () => {
  const exponent = operand1 ** operand2;
  console.log(exponent);
});

moduloButton.addEventListener("click", () => {
  const remainder = operand1 % operand2;
  console.log(remainder);
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  operand1++;
  const increaseByOne = operand1;
  console.log(increaseByOne);
});

increaseByFiveButton.addEventListener("click", () => {
  operand1 += 5;
  const increaseByFive = operand1;
  console.log(increaseByFive);
});

decreaseByOneButton.addEventListener("click", () => {
  operand1--;
  const decreaseByOne = operand1;
  console.log(decreaseByOne);
});

decreaseByFiveButton.addEventListener("click", () => {
  operand1 -= 5;
  const decreaseByFive = operand1;
  console.log(decreaseByFive);
});

multiplyByTwoButton.addEventListener("click", () => {
  operand1 *= 2;
  const multiplyByTwo = operand1;
  console.log(multiplyByTwo);
});

divideByTwoButton.addEventListener("click", () => {
  operand1 /= 2;
  const divideByTwo = operand1;
  console.log(divideByTwo);
});
