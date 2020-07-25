const popup = document.querySelector(".popup");
const cardImage = document.querySelector(".card-image");
const gallary = document.querySelector(".image-grid");
const image = gallary.querySelectorAll(".gallary-image");

image.forEach((element) => {
  element.addEventListener("click", function () {
    newSource = element.getAttribute("src");
    cardImage.src = newSource;
    popup.classList.add("fade-in");
    setTimeout(() => popup.classList.remove("fade-in"), 500);
    popup.style.visibility = "visible";
  });
});

document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc";
  } else {
    isEscape = evt.keyCode === 27;
  }
  if (isEscape) {
    popup.style.visibility = "hidden";
  }
};
