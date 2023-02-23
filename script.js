const menuOpen = document.getElementById("nav-toggle-open");
const menuClose = document.getElementById("nav-toggle-close");
const body = document.querySelector('body')

const nav = document.querySelector(".nav-links");

menuClose.style.display = "none";
menuClose.style.cursor = "pointer";
menuOpen.style.cursor = "pointer";

menuOpen.addEventListener('click', showNav);
menuClose.addEventListener('click', hideNav);

function showNav() {
  menuOpen.style.display = "none";
  menuClose.style.display = "block";
  nav.classList.add("show");
  body.style.overflowY = 'hidden';
}

function hideNav() {
  menuOpen.style.display = "block";
  menuClose.style.display = "none";
  nav.classList.remove("show");
  body.style.overflowY = 'scroll';
}
