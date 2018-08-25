'use strict'

/*
  Есть список категорий с классом categories (на вкладке HTML).

  Напишите код, который для каждого элемента li (первая вложенность)
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li

  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/


const items = document.querySelectorAll('.categories > li');

items.forEach(item => {
    console.log('Категория :', item.firstChild);
    console.log('Количество вложенных ли :', item.firstElementChild.children.length);
});