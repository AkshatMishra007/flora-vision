const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileClose = document.getElementById("mobile-close");
const mobileNav = document.getElementById("mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-link");

function openMenu() {
  mobileNav.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileNav.classList.remove("open");
  document.body.style.overflow = "";
}

mobileMenuBtn.addEventListener("click", openMenu);
mobileClose.addEventListener("click", closeMenu);
mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));
