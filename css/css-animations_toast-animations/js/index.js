console.clear();

const startButton = document.querySelector('[data-js="start-button"]');
const toast = document.querySelector('[data-js="toast"]');
const countdown = document.querySelector('[data-js="countdown"]');

startButton.addEventListener("click", () => {
  startButton.disabled = true;
  toast.classList.add("toast--move");
  setTimeout(() => {
    toast.classList.remove("toast--move");
    startButton.disabled = false;
  }, 3000);
});
