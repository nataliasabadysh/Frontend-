'use strict'
const singleBtn = document.querySelector('#single');

// Для обработчика события можно (и желательно)
// использовать отдельную функцию, ссылку на которую
// передаем вторым аргументом в addEventListener
const handleClick = () => alert('CLICK!');

singleBtn.addEventListener('click', handleClick);


//========================================================
// Можно вешать более одного обработчика на элемент,
// даже на одно и тоже событие
const multiBtn = document.querySelector('#multiple');

const firstCallback = () => alert('First callback!');
const secondCallback = () => alert('Second callback!');
const thirdCallback = () => alert('Third callback!');

multiBtn.addEventListener('click', firstCallback);
multiBtn.addEventListener('click', secondCallback);
multiBtn.addEventListener('click', thirdCallback);
