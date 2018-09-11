'use strict'

// promise


const wrp = document.querySelector(".wrp");
const h3 = document.querySelector("h3");
const button = document.getElementById("id1");
const timer = document.querySelector(".timer");
const panel = document.querySelector(".panel");
const salePanel = document.querySelector(".sale-panel");

wrp.addEventListener("click", showGoods);

// Выведет название товала выбранного
function showGoods(evt) {
    if (evt.target.tagName.toLowerCase() !== "button") { // клик НЕ на кнопку
        return null;
    }
    panel.textContent = evt.target.dataset.goods;
}

Promise.race(
// Promise.rase - кто первый получит данные
    [
        new Promise(function (resolve, reject) {
            button.addEventListener('click', function (evt) {
                //Успех
                if(evt.target.dataset.goods){
                    return resolve(`<p> Вы устпешно купили ${evt.target.dataset.goods} Получите скидку !</p>`);
                }
                return reject(new Error('Товар отсутствует'));
            })
        }),

        new Promise(function (resolve, reject) {
            let action = "Акция закончилась";
            let delayAction = 5;
            let i = delayAction;
            const delay = setInterval( function () {
                i -= 1;
                timer.innerHTML = i;
                if(i < 0){
                    i = 0;
                    clearInterval(delay);
                    h3.textContent = action;
                    timer.style.display = 'none';

                    return resolve(`<p>Сожалеем, ${action}`)
                }
                if(i > delayAction || i < 0){
                    return reject('Ощибка диапазона времени акции ');
                }
            }, 1000)

        }),
    ]
)
    .then(data => salePanel.innerHTML = data,
    err => salePanel.innerHTML = err );

// promise - end



//
// const wrp = document.querySelector(".wrp");
// const h3 = document.querySelector("h3");
// const button = document.getElementById("id1");
// const timer = document.querySelector(".timer");
// const panel = document.querySelector(".panel");
// const salePanel = document.querySelector(".sale-panel");
//
// wrp.addEventListener("click", showGoods);
//
// /* Объект для обмена данными асинхронными функциями */
// const timerBuyBefore = {
//     delay: 5,
//     current: 0,
//     finAction: 'Акция закончилась',
//     inAction: 'Вы успели до окончания акции! Получите скидку',
//     setIntervalID: null
// };
//
//
// /* все callback внутри функции */
// function showGoods(evt) {
//     /*  = обработка события = */
//
//     if (evt.target.tagName.toLowerCase() !== "button") { // клик НЕ на кнопку
//         return null;
//     }
//
//     panel.textContent = evt.target.dataset.goods;  // Выводит название товара
//
//     /* = работа с объектом = */
//
// // Проверим если наше время попадает в диапазан
// // если нет
//
//     if(timerBuyBefore.current = 0 || timerBuyBefore.current < 0) {
//         return null;
//     }
// //// если ПОПАЛИ в диапазон времени то
//
//     clearInterval(timerBuyBefore.setIntervalID);
//     salePanel.innerHTML = `<p>Вы успели купить ${evt.target.dataset.goods} до окончания акции. Получите скидку!</p>`;
//     timerBuyBefore.inAction;
// }
//
// /* == все callback внутри функции ==  */
// // fun отсчитывает время
//
// function  watchBuyBefore (delay, i, text, id) {
//     i = delay;
//     id = setInterval( function() {
//
//         /* обработка события */
//         i -= 1; // каждую сек отнемает - 1
//         timer.innerHTML = i;
//
//         /* работа с объектом */
//         // условие
//         if(i < 0) {
//             // запись данных
//             i = 0;
//             clearInterval(id);
//             h3.textContent = text;
//             timer.style.display = "none";
//             // заморозка данных
//             Object.freeze(timerBuyBefore)
//         }
//     }, 1000)
// }
//
// watchBuyBefore(timerBuyBefore.delay,
//     timerBuyBefore.current,
//     timerBuyBefore.finAction, timerBuyBefore.setIntervalID);
