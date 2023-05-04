console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
  success.setAttribute("hidden", "");
};

function showTosError() {
  tosError.removeAttribute("hidden");
};

hideTosError();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  hideTosError();
  const formElements = event.target.elements;
  if (!formElements.tos.checked) {
    showTosError();
    return;
  };
  // eslint-disable-next-line no-alert
  alert("Form submitted");
  success.removeAttribute("hidden");
});
