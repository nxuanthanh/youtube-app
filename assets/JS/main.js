'use strict';

const menuBtn = document.querySelector('.header__navbar--menu');
const sidebar = document.querySelector('.sidebar');
const sidebarListSmall = document.querySelector('.sidebar__list-sm');
const sidebarList = document.querySelector('.sidebar__list');

function attachEventsSidebar() {
  if (!menuBtn || !sidebar) return;

  sidebarListSmall.style.display = 'none';

  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    const isShow = sidebar.classList.contains('show');

    if (isShow) {
      sidebarList.style.display = 'block';
      sidebarListSmall.style.display = 'none';
    } else {
      sidebarList.style.display = 'none';
      sidebarListSmall.style.display = 'block';
    }
  });
}

(() => {
  attachEventsSidebar();
})();
