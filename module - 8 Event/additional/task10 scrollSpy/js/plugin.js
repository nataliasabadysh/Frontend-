'use strict'
/*
  Ознакомьтесь с HTML и CSS.

  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс menu-link-active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.

  Пункотв меню может быть произвольное количество, используйте
  прием "Делегирование событий". Учтите клик по самому ul, его
  необходимо игнорировать.

  При клике по ссылкам не должна перезагружаться страница!
*/

// нам нужно подсветить ту кнопку в которое кликнули

// // Используем делегирование
// const nav = document.querySelector(".js-menu");
//
// // Нужна колекция ссылок , что бы отслеживать события в ней
// const links = nav.querySelectorAll('.menu-link');// <li class="menu-item"> <a  class="menu-link">career</a></li>
//
//
// // Обработчик клика
// nav.addEventListener("click", handleNavClick);
//
// // Фун-я обработчик
// function handleNavClick({ target }) {            //  деструктуризировали  ({ target })
// //    target -
//
//     event.preventDefault();                     //   При клике по ссылкам не должна перезагружаться страница!
//     const nodeName = target.nodeName;                // при клике на ссылке произойдет переход
//
//    // console.log("event target: ", target);  // посмотрите что тут
//
//     // Проверяем тип узла, если не ссылка выходим из функции
//     if (nodeName !== "A") return;      // если кликну то было не в сыллку
//     //nodeName.classList.add('menu-link-active');   // ДОбавим класс. если кликнули в ссылку то значим мы изменим на активную
//
// // Для каждого ЛИ
//     setActiveLink(links, target);
// }
// function setActiveLink(links, target) { // Получим все links el- и текуший эл
//
//     links.forEach(link => { // если этот -ЛИ не совпадает с ТАРГТОМ , link - сылка
//         if(link !== target){
//             link.classList.remove('menu-link-active');   // Добавим класс
// //-- теперь нужно снять со всех остальных
// // --  Тоесть убрать класс АКТИВ со всех осталных
//         }else {
//             link.classList.add('menu-link-active');   // или уберем класс
//         }
//     })
//
// }



const nav = document.querySelector(".js-menu");
const links = nav.querySelectorAll('.menu-link');
nav.addEventListener("click", handleNavClick);


function handleNavClick({ target }) {
    event.preventDefault();
    const nodeName = target.nodeName;
    if (nodeName !== "A") return;
    setActiveLink(links, target);
}

function setActiveLink(links, target) {

    links.forEach(link => {
        if(link !== target){
            link.classList.remove('menu-link-active');
        }else {
            link.classList.add('menu-link-active');   // или уберем класс
        }
    });
    event.preventDefault(); // без перезагрузки страници
}

// let menu = document.querySelector('.menu');
// menu.addEventListener('click', handlerActiveLink);
//
// function handlerActiveLink(ev){
//     let event = ev.target;

//     if(event.nodeName !== 'A')return;
//     let link = menu.querySelectorAll('.menu-link');

//     for(let active of link){

//         if(active !== event){
//             active.classList.remove('menu-link-active')
//         }event.classList.add('menu-link-active')
//     }
//     event.preventDefault()
// }