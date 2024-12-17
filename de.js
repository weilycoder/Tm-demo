// ==UserScript==
// @name         洛谷题目难度修改器
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  让您做的每一道洛谷题目都是黑题
// @author       weilycoder
// @match        *://www.luogu.com.cn/problem/*
// @grant        none
// ==/UserScript==

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window._feInjection.currentData.problem.difficulty = getRandom(0, 7);