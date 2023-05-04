console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

function addTask(data) {
    const newItem = document.createElement("li");
    const newItemHeadline = document.createElement("h1");
    const newItemText = document.createElement("p");
    newItemText.style.padding = "5px";
    todoList.append(newItem);
    newItem.append(newItemHeadline);
    newItem.append(newItemText);
    newItemHeadline.textContent = data.headline;
    newItemText.textContent = data.task;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    addTask(data);
    event.target.reset();
    event.target.elements.headline.focus();
})
