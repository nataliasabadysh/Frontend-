'use strict';

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа,
  после чего нажимает кнопку "Send" и происходит отправка формы.

  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в абзац с классом .result
*/

let root = document.querySelector('.question-form');
let result = document.querySelector('.result');
let past ='';

root.addEventListener('input', handlerCheck);
root.addEventListener('submit', handlerSubmit);

function handlerCheck(ev){
    past = ev.target.value
}
function handlerSubmit(ev){
    ev.preventDefault();
    result.textContent = `Result: ${past}`;
}