'use strict'

const wrp = document.querySelector(".wrp");
const buttons = document.querySelectorAll("button");
const panel = document.querySelector(".panel");
const salePanel = document.querySelector(".sale-panel");

wrp.addEventListener("click", showGoods);

// == выводит на экран нажаттые товары
function showGoods(evt) {
    if (evt.target.tagName.toLowerCase() !== "button") { // клик на кнопку и НЕ на Кнопку
        return null;
    }
    panel.innerHTML = evt.target.dataset.goods; // выводиться название товара
}

// == Promise
// Уневерсальная фун-я

Promise.all(
//Promise.all - статический метод требуем наличия массива

    Array.from(buttons).map(el => {

//  map - создаем массив, берем набор кнопок , получаем псевдо-массив
//  Array.from - делаем массив

        return new Promise( function (resolve, reject){
// Возвращаем массив промисов

            el.addEventListener("click", function (evt){
                if(evt.target.dataset.goods){
// записывает название товара и передает как результат этого- promisa
                    return resolve(evt.target.dataset.goods)
                }
                return reject(new Error('Товар отсутствует '));
                });
            });
        })
    )
    .then(data => {
        salePanel.innerHTML = `<p> Вы получите скидку за покупку ${buttons.length}-x товаров :${data}</p>`
    });






// // 1 callback

// /* Объект для обмена данными асинхронными функциями */
//
// const culcClicks = {
//     one: 0,
//     two: 0,
//     three: 0
// }
//
// const button1 = document.getElementById("id1");
// const button2 = document.getElementById("id2");
// const button3 = document.getElementById("id3");
//
// button1.addEventListener("click", checkClick1)
// button2.addEventListener("click", checkClick2)
// button3.addEventListener("click", checkClick3)
//
// /* Использование цепочки вызовов 0 */
// function checkClick1() {
//     /* обработка события */
//     culcClicks.one += 1;
//     /* работа с объектом */
//     showActionSucces ()
// }
// function checkClick2() {
//     culcClicks.two += 1;
//     showActionSucces ()
// }
// function checkClick3() {
//     culcClicks.three += 1;
//     showActionSucces ()
// }
//
// /* Использование цепочки вызовов 1 */
// function showActionSucces (){
//     /*  работа с объектом */
//     // условие
//     if (isAllButtonsPressed(culcClicks)) {
//         // присвоение данных
//         salePanel.innerHTML =  `<p>Вы получаете скидку за покупку трех товаров </p>`
//     }
// }
//
// /* Использование цепочки вызовов 2 */
// function isAllButtonsPressed (obj) {
//     /*  работа с объектом */
//     // условие
//     return (Object.values(obj)
//         .filter(el => el > 0)   // Создает массив из значения обьекта values , если эти значения больше 0
//         .length === 3 )         // Проверяем на количесво нажатых кнопок
// }
//
