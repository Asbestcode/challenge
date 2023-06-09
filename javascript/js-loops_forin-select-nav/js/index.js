console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

for (let key in languages) {
  const option = document.createElement("option");
  option.setAttribute("value", languages[key]);
  option.textContent = languages[key];
  select.append(option);
}

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

for (key in nav) {
  const listItem = document.createElement("li");
  const anchorTag = document.createElement("a");
  anchorTag.setAttribute("href", nav[key].href);
  anchorTag.textContent = nav[key].text;
  ul.append(listItem);
  listItem.append(anchorTag);
}
