'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const BORDER = 10;
const SPIDER_SIZE = 50;

spider.style.position = 'absolute';
spider.style.transition = 'top 0.3s ease, left 0.3s ease';

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const clickX = e.clientX - wallRect.left - BORDER;
  const clickY = e.clientY - wallRect.top - BORDER;

  const maxLeft = wall.offsetWidth - BORDER * 2 - SPIDER_SIZE;

  const maxTop = wall.offsetHeight - BORDER * 2 - SPIDER_SIZE;

  let newLeft = clickX - SPIDER_SIZE / 2;
  let newTop = clickY - SPIDER_SIZE / 2;

  newLeft = Math.max(0, Math.min(newLeft, maxLeft));
  newTop = Math.max(0, Math.min(newTop, maxTop));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
