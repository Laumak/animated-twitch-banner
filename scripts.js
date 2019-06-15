const initializeView = () => {
  window.originIntervalActive = true;
  window.isOriginLogoCurrentlyVisible = false;
  window.originInterval = setInterval(toggleOriginLogoVisibility, 1000);
};

const toggleOriginLogoVisibility = () => {
  const originElement = document.querySelector(".origin");
  const isCurrentlyVisible = originElement.classList.contains("visible");
  const intervalDisplayElement = document.querySelector(".interval-display");

  if (!isCurrentlyVisible) {
    originElement.classList.add("visible");
    intervalDisplayElement.textContent = "Visible";
  } else {
    originElement.classList.remove("visible");
    originElement.classList.add("out");
    intervalDisplayElement.textContent = "Invisible";

    setTimeout(() => {
      originElement.classList.remove("out");
    }, 500);
  }

  window.isOriginLogoCurrentlyVisible = isCurrentlyVisible;
};

/* eslint-disable no-unused-vars */
const toggleOriginRotation = () => {
  /* eslint-enable no-unused-vars */
  if (window.originIntervalActive) {
    clearInterval(window.originInterval);
  } else {
    window.originInterval = setInterval(toggleOriginLogoVisibility, 1000);
  }

  window.originIntervalActive = !window.originIntervalActive;
};

initializeView();
