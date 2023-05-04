console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

for(index of programmingLanguages) {
  const listItem = document.createElement("li");
  listItem.textContent = index;
  ol.append(listItem);
}
