"use strict";
// BTNS
const shareBtn = document.querySelector(".icon-share");
const shareBtnMobile = document.querySelector(".icon-share-mobile");
// POPUPS
const bubble = document.querySelector(".bubble");
const shareFooter = document.querySelector(".share-footer");
// BG ICON COLOR
const color = document.querySelector(".icon-img");

shareBtn.addEventListener("click", () => {
  // When user clicks the share button two things can happen; if browser width <= 726px, unhide footer share.
  if (window.matchMedia("(max-width: 726px)").matches) {
    shareFooter.classList.toggle("hidden");
    // If > 726px, unhide bubble popup and change icon bg color and icon fill.
  } else {
    shareBtn.classList.toggle("changeBg");
    color.classList.toggle("changeColor");
    bubble.classList.toggle("fade");
  }
});

// This separate btn only appears when sharefooter is toggle on
// When user clicks, exits footer share
shareBtnMobile.addEventListener("click", () => {
  shareFooter.classList.toggle("hidden");
});
