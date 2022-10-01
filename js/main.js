const btn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

btn.addEventListener("click", navToggle);

// Toggle the class 'open'.
// Add or remove the class 'open' to the menu-btn after every click
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
}
