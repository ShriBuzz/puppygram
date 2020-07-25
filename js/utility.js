const fadeIn = (element) => {
  element.classList.add("fade-in");
  element.classList.remove("fade-out");
  element.style.visibility = "hidden";
};

const fadeOut = (element) => {
  element.classList.add("fade-out");
  element.classList.remove("fade-in");
  element.style.visibility = "hidden";
};

// Add new image in gallary
const addImage = (uploadSrc) => {
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");
  let gallaryImage = document.createElement("img");
  gallaryImage.classList.add("gallary-image");
  gallaryImage.setAttribute("src", uploadSrc);
  imageContainer.appendChild(gallaryImage);
  gallary.appendChild(imageContainer);
  gallaryImage.addEventListener("click", function () {
    newSource = gallaryImage.getAttribute("src");
    cardImage.src = newSource;
    fadeIn(detailView);
    detailView.style.visibility = "visible";
  });
};
