console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const article = document.createElement("article");
const articleParagraph = document.createElement("p");
const articleFooter = document.createElement("footer");
const footerSpan = document.createElement("span");
const footerButton = document.createElement("button");
document.body.append(article);
article.classList.add("post");
article.append(articleParagraph, articleFooter);
articleParagraph.classList.add("post__content");
articleParagraph.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
articleFooter.classList.add("post__footer");
articleFooter.append(footerSpan, footerButton);
footerSpan.classList.add("post__username");
footerSpan.textContent = "@username";
footerButton.classList.add("post__button");
footerButton.setAttribute("type", "button");
footerButton.setAttribute("data-js", "like-button");
footerButton.textContent = "♥ Like";
footerButton.addEventListener("click", handleLikeButtonClick);

console.log(article);

// Exercise:
// Use document.createElement() and append another social media post to the body.

/* <article class="post">
      <p class="post__content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <footer class="post__footer">
        <span class="post__username">@username</span>
        <button type="button" class="post__button" data-js="like-button">
          ♥ Like
        </button>
      </footer>
    </article> */
