// Gallary
const cardImage = document.querySelector(".card-image");
const gallary = document.querySelector(".image-grid");
const image = gallary.querySelectorAll(".gallary-image");

// detail popup
const detailView = document.querySelector("#detail-view");
const detailCloseBtn = document.querySelector("#detail-close");

// upload
const uploadBtn = document.querySelector(".upload-btn");
const uploadView = document.querySelector("#upload-view");
const uploadCloseBtn = document.querySelector("#upload-close");

// delete
const deleteCloseBtn = document.querySelectorAll(".delete-btn");
const deleteView = document.querySelector("#delete-view");
const confirmBtn = document.querySelector("#confirm-delete");
const cancelBtn = document.querySelector("#cancel-delete");
let toDeleteNode;

// form
const selectBtn = document.querySelector(".choose-btn");
const inputImage = document.querySelector("#file");
const previewImage = document.querySelector("#preview-img");
const secretId = document.querySelector("#secretId");
const form = document.querySelector("#uploadForm");
let uploadSrc;

// Click events
detailCloseBtn.addEventListener("click", function () {
  fadeOut(detailView);
});

uploadCloseBtn.addEventListener("click", function () {
  fadeOut(uploadView);
});

selectBtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("file").click();
});

uploadBtn.addEventListener("click", function () {
  fadeIn(uploadView);
  uploadView.style.visibility = "visible";
});

confirmBtn.addEventListener("click", function () {
  toDeleteNode.remove();
  fadeOut(deleteView);
});

cancelBtn.addEventListener("click", function () {
  fadeOut(deleteView);
});

image.forEach((element) => {
  element.addEventListener("click", function () {
    newSource = element.getAttribute("src");
    cardImage.src = newSource;
    fadeIn(detailView);
    detailView.style.visibility = "visible";
  });
});

deleteCloseBtn.forEach((element) => {
  element.addEventListener("click", function (e) {
    toDeleteNode = element.parentElement;
    fadeIn(deleteView);
    deleteView.style.visibility = "visible";
  });
});

// Close popup with esc
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
    fadeOut(deleteView);
  }
};

// Upload preview
inputImage.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      previewImage.setAttribute("src", this.result);
      uploadSrc = this.result;
    });
    reader.readAsDataURL(file);
  }
});

// Secret id validation
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let number = secretId.value;
  let sum = 0;
  if (number.length == 0 || number.length > 6 || number.length < 4) {
    alert("Input of length 4-6 digits required.");
    secretId.focus();
  } else {
    while (true) {
      sum = 0;
      for (let i = 0; i < number.length; i++) {
        sum = sum + parseInt(number[i]);
      }
      if (sum.toString().length > 1) {
        number = sum.toString();
      } else {
        break;
      }
    }

    if (sum === 7) {
      addImage(uploadSrc);
      alert("Successfully submitted.");
      fadeOut(uploadView);
    } else {
      alert("Failed to submit.");
    }
  }
});
