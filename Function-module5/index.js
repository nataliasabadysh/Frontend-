'use strict'


// Module-5
// Alex

// Функциональное програмирование

//// ============ Императивный подход

// const double = arr => {
//     const results = [];
//
//     for (let i = 0; i < arr.length; i += 1){
//         results.push(arr[i] * 2);
//     }
//     return results;
// };

//// =============Декларативный подход

// const double = arr => arr.map(x => x * 2);


// //// ============  Иммутабельность - грязная функция
//
// const dirty= arr => {
//
//     for(let i = 0, max = arr.length; i < max; i += 1) {
//
//         arr[i] = arr[i] * 2;
//     }
// };
// const numbers  = [1, 2, 3, 4];
// dirty(numbers); // это передача по ссылке функция - dirty(ссылка на - numbers)
//
// //// Произошла мутация исходных данных
//
// //Мы мутировали данные. const numbers  = [2, 4, 6, 8];
// console.log(numbers);

//// ============  Чистая функция  функция

// const numbers  = [1, 2, 3, 4];
//
//
// const pure = arr => {
//     for(let i = 0, max = arr.length; i < max; i += 1) {
//
// // Не трогает исходный массив - arr , она использует их значение создает новый массив и запихывает в новый массив
//         newArr.push(arr[i] * 2);
//     }
// // Возвращает новый массив
//
//     return newArr;
// };
//
// const updateNumber = pure(numbers); // pure(numbers);
//
// console.log(numbers);   // оригенальный массив -не изменился -   [1, 2, 3, 4];
// console.log(updateNumber);  // Новый массив -   [2, 4, 6, 8];
//

