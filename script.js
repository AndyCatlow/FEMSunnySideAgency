const hamburgerBtn = document.querySelector("#hamburger");
const primaryNavList = document.querySelector("#primary-nav-link-list");

function showNav() {
  primaryNavList.classList.toggle("show");
  hamburgerBtn.classList.toggle("rotate");
}

hamburgerBtn.addEventListener("click", showNav);
