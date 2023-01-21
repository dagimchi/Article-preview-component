"use strict";

const shareBtn = document.querySelector(".icon-share");
const bubble = document.querySelector(".bubble");
const color = document.querySelector(".icon-img");

shareBtn.addEventListener("click", () => {
  shareBtn.classList.toggle("changeBg");
  color.classList.toggle("changeColor");
  bubble.classList.toggle("fade");
});
