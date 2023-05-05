const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("active");
  navList.classList.toggle("open");
});