console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const numberA = Number(data.numberA);
  const numberB = Number(data.numberB);
  const operator = data.operator;
  switch(operator) {
    case "addition":
      result = numberA + numberB;
      break;
    case "subtraction":
      result = numberA - numberB;
      break;
    case "multiplication":
      result = numberA * numberB;
      break;
    case "division":
      result = numberA / numberB;
      break;
  };
  resultOutput.textContent = result;
});
