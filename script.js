var toggle_btn;
var big_wrapper;
var hamburger_menu;

function changeBackgroundImage() {
  const newImageSrc = 'img/IMG_1997_01 (2) (1).jpg'; // Replace with your new image source
  backgroundImage.src = newImageSrc;

  // Initially set the opacity to 0 to create a fade-in effect
  backgroundImage.style.opacity = '0';

  // Add the fade-in class to start the fade-in effect
  setTimeout(() => {
    backgroundImage.style.transition = 'opacity 1s ease-in-out';
    backgroundImage.style.opacity = '1';
  }, 0);

  backgroundImage.onload = () => {
    // Remove the fade-in class after a delay (adjust the duration as needed)
    setTimeout(() => {
      backgroundImage.style.transition = 'none'; // Remove transition after the fade-in effect
    }, 1000); // Remove the transition after 1 second
    backgroundImage.classList.remove('fade-out');
  };
}

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");
const backgroundImage = document.querySelector('.background-image');

declare();

let dark = false;

function toggleAnimation() {
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

// Initially fade in the background image when the page loads
changeBackgroundImage();

setTimeout(() => {
  // Change background image and add fade-in class
  changeBackgroundImage();
}, 5000); // Change the background image after 5 seconds
