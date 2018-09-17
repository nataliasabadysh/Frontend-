'use strict'

// 1  - Всплытие событий

// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const innerChild = document.querySelector('#inner-child');

// const parentHandler = () => alert('PARENT click handler');
// const childHandler = () => alert('CHILD click handler');
// const innerChildHandler = () => alert('INNER CHILD click handler');

// parent.addEventListener('click', parentHandler);
// child.addEventListener('click', childHandler);
// innerChild.addEventListener('click', innerChildHandler);

// = 2  event.target - до которого дотонуло наше событие 

// const parent = document.querySelector("#parent");

// const handleClick = event => {
//   alert(`event.target: ${event.target.id}`);
//   console.log(`event.target: ${event.target}`);
// };

// // откройте консоль и покликайте, вы увидите что
// // event.target это всегда исходный (и самый глубокий) элемент
// // на котором был сделан клик
// parent.addEventListener("click", handleClick);

// = 3 - 

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const innerChild = document.querySelector("#inner-child");
//
// const parentHandler = () => {
//   alert(
//     "При клике в INNER-CHILD, этого alert не будет, до PARENT event не дойдет!"
//   );
// };
//
// const childHandler = () => {
//   alert(
//     "При клике в INNER-CHILD, этого alert не будет, до CHILD event не дойдет!"
//   );
// };
//
// const innerChildHandler = event => {
//   event.stopPropagation();
//   alert("INNER-CHILD click handler!");
// };
//
// parent.addEventListener("click", parentHandler);
// child.addEventListener("click", childHandler);
// innerChild.addEventListener("click", innerChildHandler);
//
