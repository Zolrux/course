"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");

  // touchstart
  // touchmove
  // touchend
  // touchenter
  // touchleave
  // touchcancel

  box.addEventListener("touchmove", (e) => {
    e.preventDefault();

    //  console.log(e.targetTouches[0].pageX);
  });
});

// touches
// targetTouches
// changedTouches
