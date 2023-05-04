console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";
  for (i=1; i<=5; i++) {
    let index = i;
    const star = document.createElement("img");
    if (i <= filledStars) {
      star.setAttribute("src", "assets/star-filled.svg");
      star.addEventListener('click', () => {
        renderStars(index);
      });
      starContainer.append(star);
    } else {
      star.setAttribute("src", "assets/star-empty.svg");
      star.addEventListener('click', () => {
        renderStars(index);
      });
      starContainer.append(star);
    } 
  }
}

renderStars(0);

