console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');
const buttonContainer = document.querySelector(".buttons")

const firstToast = document.createElement("li");
firstToast.classList.add("toast-container__message");
toastContainer.append(firstToast);
firstToast.textContent = "I'm a toast message.";

addButton.addEventListener("click", () => {
  const newToast = document.createElement("li");
  newToast.classList.add("toast-container__message");
  toastContainer.append(newToast);
  newToast.textContent = "I'm a new toast!";
  let selectButton = document.getElementById("select-button");
  if (selectButton == null) {
    const newButton = document.createElement("button");
    newButton.setAttribute("id", "select-button");
    newButton.setAttribute("type", "button");
    newButton.textContent = "Remove last toast";
    document.querySelector(".buttons").append(newButton);
    newButton.addEventListener("click", () => {
      if (toastContainer.children.length == 1) {
        toastContainer.lastChild.classList.add("out");
        setTimeout(function(){
          toastContainer.removeChild(toastContainer.lastChild);
          newButton.remove();
        }, 500);      
      } else {
        toastContainer.lastChild.classList.add("out");
        setTimeout(function(){
          toastContainer.removeChild(toastContainer.lastChild);
        }, 500); 
      }
    });}
});

clearButton.addEventListener("click", () => {
  toastContainer.querySelectorAll(".toast-container__message").forEach(el=>el.classList.add("out"));
  setTimeout(function(){
    toastContainer.innerHTML = "";
    buttonContainer.removeChild(buttonContainer.lastChild);
  }, 500);
});