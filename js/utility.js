const fadeIn = (element) => {
  element.classList.add("fade-in");
  element.classList.remove("fade-out");
};

const fadeOut = (element) => {
  element.classList.add("fade-out");
  element.classList.remove("fade-in");
};
