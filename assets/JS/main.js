"use strict";

const menuBtn = document.querySelector(".header__navbar--menu");
const sidebar = document.querySelector(".sidebar");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });
}
