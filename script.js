function navSlide() {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".navlist");

  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
}
navSlide();

var button = document.getElementById("navBtn");
var bigWrapper = document.querySelector(".info-big-wrapper");
var leftWrapper = document.querySelector(".info-left-wrapper");
button.addEventListener("click", () => {
  bigWrapper.style.display = "block";
  bigWrapper.style.opacity = 1;
  leftWrapper.style.transform = "translateX(0)";
});

var forCross = document.querySelector(".for-cross");
forCross.addEventListener("click", () => {
  bigWrapper.style.display = "none";
  bigWrapper.style.opacity = 0;
  leftWrapper.style.transform = "translate(100%)";
});

var menuBtn = document.getElementById("menuBtn");
var navItem = document.querySelector(".nav");
var crossBtn = document.querySelector(".cross-btn");
menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";
  crossBtn.style.display = "block";
  crossBtn.style.transition = "ease-in 0.9s";
  navItem.style.transform = "translateX(0)";
  navItem.style.transition = "ease-in 0.5s";
});

crossBtn.addEventListener("click", () => {
  crossBtn.style.display = "none";
  menuBtn.style.display = "flex";

  navItem.style.transform = "translate(100%)";
});
