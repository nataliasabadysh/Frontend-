'use strict'

/*
  Напишите скрипт для создания списка ul.

  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.

<ul class="list">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>React</li>
  <li>NodeJS</li>
</ul>
*/

do{
    let userInput = prompt('Давай');
    if(userInput === null){
        break;
    }
}while(true){
    const res = userInput.createElement('li');
    res.append('list');
}
console.log(res);