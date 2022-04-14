const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

// listener for hamburger menu to show on screen
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

// listener to remove hamburger menu
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  })
);
