console.clear();

const bodyElement = document.querySelector('[data-js="body"]');


const darkButton = document.querySelector('[data-js="dark-mode-button"]');
const lightButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

darkButton.addEventListener("click", () => {
    bodyElement.classList.add("dark");
    console.log('dei mutter');
});

lightButton.addEventListener("click", () => {
    bodyElement.classList.remove("dark");
    console.log('sei gsicht');
});

toggleButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
    console.log('weisst');
});