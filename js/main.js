const detailView = document.querySelector("#detail-view");
const uploadView = document.querySelector("#upload-view");
const cardImage = document.querySelector(".card-image");
const gallary = document.querySelector(".image-grid");
const image = gallary.querySelectorAll(".gallary-image");
const detailCloseBtn = document.querySelector("#detail-close");
const uploadCloseBtn = document.querySelector("#upload-close");
const uploadBtn = document.querySelector(".upload-btn");

detailCloseBtn.addEventListener("click", function () {
  fadeOut(detailView);
  detailView.style.visibility = "hidden";
});

uploadCloseBtn.addEventListener("click", function () {
  fadeOut(uploadView);
  uploadView.style.visibility = "hidden";
});

image.forEach((element) => {
  element.addEventListener("click", function () {
    newSource = element.getAttribute("src");
    cardImage.src = newSource;
    fadeIn(detailView);
    detailView.style.visibility = "visible";
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
    fadeOut(detailView);
    fadeOut(uploadView);
    detailView.style.visibility = "hidden";
    uploadView.style.visibility = "hidden";
  }
};

uploadBtn.addEventListener("click", function () {
  fadeIn(uploadView);
  uploadView.style.visibility = "visible";
});
