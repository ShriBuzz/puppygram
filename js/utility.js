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
  // main container div
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");

  // overlay
  let imageOverlay = document.createElement("div");
  imageOverlay.classList.add("gallary-overlay");

  // cross button
  let spanContainer = document.createElement("span");
  spanContainer.classList.add("flaticon-close", "delete-btn");

  // img element
  let gallaryImage = document.createElement("img");
  gallaryImage.classList.add("gallary-image");
  gallaryImage.setAttribute("src", uploadSrc);

  imageOverlay.appendChild(spanContainer);

  // add overlay and img inside container
  imageContainer.appendChild(imageOverlay);
  imageContainer.appendChild(gallaryImage);

  gallary.appendChild(imageContainer);

  imageOverlay.addEventListener("click", function () {
    newSource = imageOverlay.nextElementSibling.getAttribute("src");
    cardImage.src = newSource;
    fadeIn(detailView);
    detailView.style.visibility = "visible";
  });

  spanContainer.addEventListener("click", function (e) {
    e.stopPropagation();
    toDeleteNode = imageOverlay.parentElement;
    fadeIn(deleteView);
    deleteView.style.visibility = "visible";
  });
};
