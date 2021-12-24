const mobileBtn = document.getElementById("mobile-cta");
const mobileChange = document.getElementById("mobile-cta")
nav = document.querySelector("nav");


mobileBtn.addEventListener("click", () => {
  nav.classList.toggle("menu-btn");
})
