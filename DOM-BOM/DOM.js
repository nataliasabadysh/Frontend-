'use strict'

// =====================    text node, elem node

// =====================  Поиск DOM-узлов -  querySelector ---  Что бы выбрать какойто элемент

//  передаем валидный селектор любой сложности

elem.querySelector();
//- возвращает 1 элемент (ДОМ узел)  первого которого нашел или null  и прекращает работу

elem.querySelectorAll();

// переберает все Дом дерево, проходит по всему документу
// ищет теги которые соотвецтвуют этому селектору , возвращает массив
// выберает колекцию, если не найденно ничего возвращаеться пустой массив


// ===  1 .children - принемает только теги - вернет псевдо массив из всех элементов
// childNodes - берет текстовый узлы
// firstChild - выберет первый елемент включая Текстовый узел
// firstElementChild -только теги , без текстового узла


const list = document.querySelector('.categories');
console.log(list.children);

// ========= Преобразовать в масиив Arrow From

// document.querySelector('.categories') - вернется псевдо массив а  Array.from сделает масиив

const list = Array.from(document.querySelector('.categories'));
console.log(list.children);


// ===  2  вернет псевдо массив из всех элементов  + li

// querySelectorAll -  вернет колекцию
// первая вложенность  > li
const items = document.querySelectorAll('.categories > li');
console.log(items);

// ====  3 посчитаем сколько в  (li) них вложенных элементов

// значет переберем в цикле
// Это псевдо массив переберем forEach

// ====== Поиск DOM-узлов -  querySelector - Старые методы

// document.getElementById(id)  ==  querySelector
// elem.getElementsByTagName(tag)
// elem.getElementsByClassName(cls)


 // elem.parentNode	  - Выберет родителя elem
 // elem.childNodes	  - Псевдо-массив хранит все дочерние элементы, включая текстовые.
 // elem.children	  - Псевдо-массив хранит только дочерние узлы-элементы, то есть соответствующие тегам.
 // elem.firstChild   -	Выберет первый дочерний элемент внутри elem, включая текстовые узлы.
 // elem.firstElementChild	 - Выберет первый дочерний узел-элемент внутри elem.
 // elem.lastChild           - Выберет последний дочерний элемент внутри elem, включая текстовые узлы.
 // elem.lastElementChild	 - Выберет последний дочерний узел-элемент внутри elem.
 // elem.previousSibling	 - Выберет элемент "слева" от elem (его предыдущего соседа)
 // elem.previousElementSibling	 - Выберет узел-элемент "слева" от elem (его предыдущего соседа)
 // elem.nextSibling	     - Выберет элемент "справа" от elem (его следующего соседа)
 // elem.nextElementSibling  - Выберет узел-элемент "справа" от elem (его предыдущего соседа)

// ====== Свойства  -  hidden , value ,  href , alt
// Атребуты становяться доступны как свойствами на обьекте  // undefined

// ======  innerHTML
//  возвращает все внутринности (теги все что внутри) нашего эл. как строку

// ======  textContent  - если нам нужен только текст - РЕКОМНДОВАННО САШЕЙ
// (el.textContent = 'TExt new text') -- перезапишет на новый текст

// ======  innerText    - если нам нужен только текст - без переноса строки

// ======   Работа с классами classList - есть свои методы

//   elem.classList.contains( cls )   - возвращает true/false, в зависимости от того, есть ли у элемента класс cls
//   elem.classList.add( cls )        - добавляет класс cls в список классов элемента
//   elem.classList.remove( cls )     - удаляет класс cls из списка классов элемента
//   elem.classList.toggle( cls )     - переключает - если класса cls нет, добавляет его, если есть - удаляет.

// 1
if(list.classList.contains("active")){  // Проверили на класс active
    console.log('Yep!');                //  Если найдет класс то выполнит это выражение
}
// 2
const hasClass = list.classList.contains("active");
if(!hasClass){                       // Проверили на класс active
    list.classList.add("active");    //  Если НЕТ то ДОБАВИТЬ ТАКОЙ КЛАСС
}


// ======== Атрибуты - DOM-элементам соответствуют HTML-теги, у которых есть текстовые атрибуты.

//  elem.hasAttribute(name)	 - Проверяет наличие аттрибута, возвращает true/false
//  elem.getAttribute(name)	 - получает значение атрибута и возвращает его
//  elem.setAttribute(name, value)	 - устанавливает атрибут
//  elem.removeAttribute(name)	     - удаляет атрибут
//  elem.attributes	 - все артебуты  - свойство, возвращает коллекцию Псевдо-обьект всех атрибутов элемента

// =======  атрибут можно изменить  Например <img class = 'img '  src = "hhtp://wq"  alt = 'amazing img'>
const img = document.querySelector('.img');
img.src = 'new src ';  // <img class = 'img '  src = "new src"  alt = 'amazing img'>

//  = setAttribute
const img = document.querySelector('.img');
console.log(img.setAttribute ('alt', 'new value');//  new value ,   NOT -amazing img

// = getAttribute
const img = document.querySelector('.img');
console.log(img.getAttribute ('src');   // hhtp://wq



// ===============   Работа с DOM-узлами ======== //


// ================ createElement - Создание  DOM узел
//  Создание  DOM узел в памяти и возвращает на него ссылку

const element = document.createElement('li');   // TEG
element.textContent = 'GIT';                    // Добавили text во внутрь <li> GIT </li>
element.classList.add("list-item");             // Добавили class в li     <li class = 'list-item'> GIT </li>

// ===  parentElem - Добавление элемента

// Что бы довавить ДОМ  дерево необходим уже существующий узел который уже есть ( min  на body)

// - старый методы

 parentElem.appendChild(elem);  // - Принемает ссылку на обьект
// Добавляет elem в конец дочерних элементов parentElem
//!* - принемает только один аргумент, передаем только 1 аргумент НО в node.append(много)

 parentElem.insertBefore(elem, nextSibling); // - принемает два аргумента

// 1- Принемает ссылку на обьект.
// 2е принемает тот ел который вы хотели бы вставить
// Добавляет elem в коллекцию детей parentElem, перед элементом nextSibling.


// - Пример Добавим перед первым эл у списка

const list = document.querySelector('.list'); // .list div or ul in  index.html
const item = document.querySelector('li');  //  created + li

// Creat new li
item.textContent = 'GIT';  // text
item.classList.add("list-item"); // class

list.insertBefore(item, list.firstElementChild);  //this  ELEMENT added to new li before first li

// ЕСЛИ 2м аргументом null -  list.insertBefore(item, null); - всавим в конец списка

// - НОВЫЕ методы , синтексический сахор - они не всеми браузерами поддерживаються  ( IE-11 не поддерживает )

list.prepend(itemA);
list.append(itemB);

list.remove();                   // Удалится все эл. .Новая запись
list.parentNode.removeChild();   // Удалится все .  Старая запись

node.append(item1,item2,item4);   // - добавляет nodes в конец node  - можем передать произвольное количество аргументов
node.prepend(item1,item2,item4);	//  - добавляет nodes в начало node   == insertBefore
node.after(nodes);	// - добавляет nodes после узла node   - после себя
node.before(nodes);	// - добавляет nodes перед узлом node  - ставит перед самим собой
node.replaceWith(nodes);//- добавляет nodes вместо node

// ================ innerHTML - Создание  DOM узел  ( и так же через createElement)
// innerHTML - свойство, позволяет получить содержимое элемента в виде строки
// innerHTML мы можем добавить что-то внутрь элемента.


const list = document.querySelector('.list');   // .list ul (in  index.html)
console.log(list.innerHTML);                    // tegs + text

const item = '<li>GIT</li>';
list.innerHTML = item;                  // html парсит передавая строку - '<li>GIT</li>'
list.innerHTML += item;                 // если добавить - это перезапись

// ================= insertAdjacentHTML   !! ** ТАК делать САША

// НЕ перестраивает детев - контент , только добовляет
//  он умеет вставлять текст, добовляет  - insertAdjacentHTML (куда вставить. строка с ТЕГАМИ ) ~  appendChild

const item = '<li>GIT</li>';
list.insertAdjacentHTML('beforebegin', item); //перед собой

// element.insertAdjacentHTML(position, text);
// position - позиция относительно элемента и должна быть одной из следующих значений:

//  =   position- Значени Описание
// 'beforebegin' - перед собой - перед element
// 'afterbegin'  - после начала -	внутрь element, в самое начало контента
// 'beforeend'	 - перед концом - внутрь element, в самый конец контента
// 'afterend'	 - после себя  - после element

// * Использовать только тагда когда Реально в html есть уже в ДОМ дереве, иначе тогда appendChild...

// ==  insertAdjacentHTML «близнецы-братья» - insertAdjacentElement
// Парсить не будет , немного быстрее


elem.insertAdjacentElement(position, newElem); // - вставляет в произвольное место не HTML-строку, а элемент newElem.
elem.insertAdjacentText(position, text); //- создаёт текстовый узел из строки text и вставляет его в указанное место относительно elem.

// =======  Клонирование Узлов

const parent = document.querySelector('.parent');
const article = document.querySelector('.article');

// Создает точную Глубокую -> cloneNode(true)- копию всей статьи
// Поверхностная копия  - только ТЕГ - cloneNode();

const clone = article.cloneNode(true);
clone.classList.add('blue-text');
parent.appendChild(clone);

//= ========================  Оптимизация работы с DOM  ====//

// Если мы работаем с колекцией и мы в памяти хотим собрать весть набор
// и за ОДНО обращению к ДОМ дереву (существующиму узлу повесить )

// ПЛОХОЙ КОД
// Произойдет 100 итераций и выведет 100 li

const list = document.querySelector('.list');

for(let i = 0; i < 100; i += 1){
    const item = document.createElement('li');  //  выполнется 100 раз
    item.textContent = `item ${i}`;
    list.appendChild(item)      // выполнется 100 раз
}
// ХОРОШЫЙ КОД !     (список статьей)

const list = document.querySelector('.list');
const items = [];

for(let i = 0; i < 100; i += 1){
    const item = document.createElement('li');  // еще можно клонировать createElement - что бы не вызывать 100 раз
    item.textContent = `item ${i}`;
}
list.append(...items); // за ОДИН раз обратимся к ДОМ эл  и мы туда вешаем колекцию

// ...[1, 2, 3] // 1 2 3

//= ========================  Оптимизация работы с DOM
//  -- Кождый раз когда что то происходить с html css перерисовываеться весь или часть интерфейса   --//
// Restyle  - когда именяем стиль hover, shadow,  который не влияет на позиционирования
// Reflow   - когда именяем геометрия - удалили или добавили эл , +- ширена
// Repaint  - происходит - Restyle или -  Reflow


const items = document.querySelectorAll('.categories > li');  // первая вложенность li

items.forEach(item => { console.log(item.children); }); // первый тег

console.log(item.firstChild);  // первый текстовый документ


const items = document.querySelectorAll('.categories > li');  // первая вложенность li
items.forEach(item => {
    console.log('Категори :', item.children);
    console.log('Количество воженных ли :', item.firstElementChild.children.length);  // первая li + ul> li - все li -ки
    // псевдо массив- значит есть length

});







const dishes = [
    {
        name: 'Baked Yak & Mushrooms',
        image: 'http://lorempixel.com/640/480/food',
        descr:
            'Beatae sint quasi quo exercitationem vel ea distinctio. Quae eveniet porro aspernatur debitis eos accusamus est harum.',
        price: '61.00',
        available: true,
    },
    {
        name: 'Roasted Oysters',
        image: 'http://lorempixel.com/640/480/food',
        descr:
            'Consequatur maiores eos sunt ea commodi laboriosam. Esse est et quia voluptatem voluptatem quia deleniti et ut.',
        price: '32.00',
        available: false,
    },
    {
        name: 'Strawberry Pancakes',
        image: 'http://lorempixel.com/640/480/food',
        descr:
            'Aut tenetur ipsa. Ex voluptate qui aut porro numquam voluptas autem.',
        price: '21.00',
        available: true,
    },
    {
        name: 'Caramel Toffee',
        image: 'http://lorempixel.com/640/480/food',
        descr:
            'Eum fuga sequi earum voluptas voluptas necessitatibus ut. Labore animi sed maxime animi quia eum magnam et provident.',
        price: '33.00',
        available: false,
    },
    {
        name: 'Strawberry Pancakes',
        image: 'http://lorempixel.com/640/480/food',
        descr:
            'Dolores sed vero voluptatem voluptatem architecto officiis praesentium. Dolores quasi facere incidunt sint eos omnis delectus officia.',
        price: '14.00',
        available: false,
    },
    {
        name: 'Caramel Toffee',
        image: 'http://lorempixel.com/640/480/food',
        descr:
            'Ea eveniet vel omnis veniam et perspiciatis quod doloribus voluptas. Autem at est molestiae repellendus.',
        price: '84.00',
        available: true,
    },
    {
        name: 'Roasted Orange',
        image: 'http://lorempixel.com/640/480/food',
        descr:
            'Deserunt quas nostrum qui qui sunt qui dolores. Culpa facere et voluptatem nobis laudantium aperiam aliquid.',
        price: '63.00',
        available: true,
    },
    {
        name: 'Pistachio Elderberry Wafer',
        image: 'http://lorempixel.com/640/480/food',
        descr:
            'Optio ut eum necessitatibus dolores molestias. Tenetur libero harum nobis a est et voluptatem rerum officia.',
        price: '67.00',
        available: false,
    },
    {
        name: 'Chocolate Pie',
        image: 'http://lorempixel.com/640/480/food',
        descr:
            'Et cum et ut quis quas maiores consequatur. Iure qui unde sint consequatur qui iusto at sit.',
        price: '26.00',
        available: false,
    },
];

const createCardContent = (title, description) => {
    const content = document.createElement('div');
    content.classList.add('content');

    const name = document.createElement('h2');
    name.classList.add('name');
    name.textContent = title;

    const descr = document.createElement('p');
    descr.classList.add('descr');
    descr.textContent = description;

    content.append(name, descr);

    return content;
};

const createCardFooter = (price, available) => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const dishPrice = document.createElement('p');
    dishPrice.classList.add('price');
    dishPrice.textContent = `Price: ${price}$`;

    const btnAdd = document.createElement('button');
    btnAdd.classList.add('button');
    btnAdd.hidden = !available;
    btnAdd.textContent = 'Add to order';

    footer.append(dishPrice, btnAdd);

    return footer;
};

const createCardNofitication = available => {
    if (available) return null;

    const soldOutNotification = document.createElement('p');
    soldOutNotification.classList.add('sold-out');
    soldOutNotification.textContent = 'Sold Out!';

    return soldOutNotification;
};

const createDishCard = ({ name, image, descr, price, available }) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.classList.add('img');
    img.setAttribute('src', image);
    img.setAttribute('alt', '');
    img.setAttribute('width', 200);

    const content = createCardContent(name, descr);
    const footer = createCardFooter(price, available);
    const notification = createCardNofitication(available);

    content.appendChild(footer);

    card.append(img, content, notification);

    return card;
};

const createCards = dishes => {
    const elements = dishes.map(dish => createDishCard(dish));

    return elements;
};

const dishGrid = document.querySelector('.dish-grid');
const cards = createCards(dishes);

//console.log(cards);

dishGrid.append(...cards);

// // -----------------
//
// // class EventEmitter {
// //   constructor() {
// //     this.events = {};
// //   }
//
// //   on(type, listener) {
// //     this.events[type] = this.events[type] || [];
//
// //     this.events[type].push(listener);
// //   }
//
// //   emit(type, ...args) {
// //     if (this.events[type]) {
// //       this.events[type].forEach(listener => listener(...args));
// //     }
// //   }
// // }
//
// // const ee = new EventEmitter();
//
// // ee.on('HELLO COMRADE!!!!!', msg => {
// //   console.log(msg);
// // });
//
// // setTimeout(() => {
// //   ee.emit('HELLO COMRADE!!!!!', 666);
// // }, 2000);
//



// ===== hw === ===//
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

// const list = categories.firstElementChild;
//
// console.log(list);
