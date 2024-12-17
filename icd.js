// ==UserScript==
// @name         Increase Color Difference for Color-Difference-Game
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  增大 #box 元素内相近颜色的色差
// @author       weilycoder
// @match        http://360.colour8.com/play202/color.html
// @grant        none
// ==/UserScript==


(function () {
  let timeoutId = null;

  function enhanceColorDifferenceForBox(boxElement) {
    const walker = document.createTreeWalker(boxElement);
    let child;
    let black = null;
    while (child = walker.nextNode()) {
      if (black === null) {
        black = child.style.backgroundColor;
      }
      if (black === child.style.backgroundColor) {
        child.style.backgroundColor = "rgb(0, 0, 0)";
      } else {
        child.style.backgroundColor = "rgb(255, 255, 255)";
      }
    }
  }

  function run(event) {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    timeoutId = setTimeout(() => {
      const boxElement = document.getElementById('box');
      if (boxElement) {
        enhanceColorDifferenceForBox(boxElement);
      }
      timeoutId = null;
    }, 100);
  }

  document.body.onmousedown = run;
})();