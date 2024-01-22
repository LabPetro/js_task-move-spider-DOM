/* eslint-disable max-len */
'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const x = e.clientX - spider.clientWidth / 2 - wall.getBoundingClientRect().left;
  const y = e.clientY - spider.clientHeight / 2 - wall.getBoundingClientRect().top;

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  spider.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
  spider.style.top = Math.max(0, Math.min(y, maxY)) + 'px';
});
