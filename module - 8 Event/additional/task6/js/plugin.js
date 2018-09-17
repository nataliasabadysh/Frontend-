'use strict'
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой.
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Используйте делегирование.
*/
let list = document.querySelector('.list');

list.addEventListener('click', handlerDeletItems);

function handlerDeletItems(ev){

    if(ev.target.nodeName !== 'BUTTON')return;

    let parent = ev.target.parentNode;
    parent.remove();
}