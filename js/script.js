"use strict";

const shareBtn = document.querySelector(".icon-share");
const shareBtnMobile = document.querySelector(".icon-share-mobile");
const bubble = document.querySelector(".bubble");
const color = document.querySelector(".icon-img");
const shareFooter = document.querySelector(".share-footer");

shareBtn.addEventListener("click", () => {
  // WEEEEEEEEEEE
  if (window.matchMedia("(max-width: 726px)").matches) {
    shareFooter.classList.toggle("hidden");
  } else {
    shareBtn.classList.toggle("changeBg");
    color.classList.toggle("changeColor");
    bubble.classList.toggle("fade");
  }
});

shareBtnMobile.addEventListener("click", () => {
  shareFooter.classList.toggle("hidden");
});
