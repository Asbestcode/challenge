console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');
let number1 = 0;
let number2 = 0;

firstInput.addEventListener('input', () => {
    number1 = firstInput.value;
    sum = number1 * number2;
    result.textContent = sum;
})

secondInput.addEventListener('input', () => {
    number2 = secondInput.value;
    sum = number1 * number2;
    result.textContent = sum;
})