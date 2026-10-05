'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let left = e.offsetX - spiderWidth / 2;
  let topCoord = e.offsetY - spiderHeight / 2;

  const minLeft = 0;
  const maxLeft = wall.clientWidth - spiderWidth;

  const minTop = 0;
  const maxTop = wall.clientHeight - spiderHeight;

  left = Math.max(minLeft, Math.min(left, maxLeft));
  topCoord = Math.max(minTop, Math.min(topCoord, maxTop));

  spider.style.left = `${left}px`;
  spider.style.top = `${topCoord}px`;
});
