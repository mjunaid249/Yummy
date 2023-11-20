const header = document.querySelector(".header");

const menu_btn = document.querySelector(".mobile-navbar-btn");

function toggleNavbar() {
  header.classList.toggle("active");
}

menu_btn.addEventListener("click", toggleNavbar);

const menu_links = document.querySelectorAll(".navbar-link");

Array.from(menu_links).forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("active");
  });
});
