// ==UserScript==
// @name         FreeEditing
// @namespace    http://tampermonkey.net/
// @version      2024-05-12
// @description  尝试称霸世界！我是说，这个脚本可以让你编辑网页内容
// @author       weilycoder
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  function checkIfCtrlPressed(event) {
    if (event.ctrlKey == 1) {
      if (document.body.contentEditable !== 'true') {
        document.body.contentEditable = 'true';
        alert("已解锁限制");
      } else {
        document.body.contentEditable = 'inherit';
        alert("已打开限制");
      }
    }
  }
  document.body.onmousedown = checkIfCtrlPressed;
})();