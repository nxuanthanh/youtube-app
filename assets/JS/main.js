'use strict';

const menuBtn = document.querySelector('.header__navbar--menu');
const sidebar = document.querySelector('.sidebar');
const sidebarListSmall = document.querySelector('.sidebar__list-sm');
const sidebarList = document.querySelector('.sidebar__list');
const showmore = document.querySelector('.showmore');
const hideaway = document.querySelector('.hideaway');
const videoItem = document.querySelector('.video__item');
const moreBtn = document.querySelector('.video__button--more');
const moreList = document.querySelector('.video__more--list');

function attachEventsSidebar() {
  if (!menuBtn || !sidebar) return;

  sidebarListSmall.style.display = 'none';
  hideaway.style.display = 'none';

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

  showmore.addEventListener('click', () => {
    showmore.style.display = 'none';
    hideaway.style.display = 'block';
  });

  hideaway.addEventListener('click', () => {
    showmore.style.display = 'block';
    hideaway.style.display = 'none';
  });
}

function attachEventsVideosContainer() {
  moreBtn.addEventListener('click', () => {
    moreList.classList.toggle('show');
  });
}

(() => {
  attachEventsSidebar();

  attachEventsVideosContainer();
})();
