
'use strict'
// part 2  Sasha Tasks
// ===============Sasha============== получим уникальные числа
// те которые не повторяються

//const numbers = [1, 2, 3, 4, 6, 7, 8, 0, 9, 5, 6, 7,8 ,9, 2, 4,5 ];

// const getUnicValue = arr => {
//     return arr.reduce((acc ,val)=>{
//
//             if(!acc.includes(val)) {
//                 acc.push(val);
//             }
//         return acc;
//     }, []);
// };
//
// const uniqueValue = getUnicValue(numbers);  // Получаем масиив чисел
//
// console.log(uniqueValue); // (10) [1, 2, 3, 4, 6, 7, 8, 0, 9, 5]

// =============Sasha======= And making the same -  Тернарным оператором
// const numbers = [1, 2, 3, 4, 6, 7, 8, 0, 9, 5, 6, 7,8 ,9, 2, 4,5 ];
// const getUnicValue = arr => {
//     return arr.reduce((acc ,val)=>{
//
//         return !acc.includes(val) ?  acc.concat(val) : acc;  // NOT PUSH  concat !
//
//     }, []);
// };
//
// const uniqueValue = getUnicValue(numbers);  // Получаем масиив чисел
//
// console.log(uniqueValue); // (10) [1, 2, 3, 4, 6, 7, 8, 0, 9, 5]


// =============Sasha=======   do while

//
// do{
//     const input = prompt('Hi there');
//     if(input === null){ // cancel - break!
//         break;
//     }
// }while (true); // бесконечный до того как cancel - break!

//================Sasha=========  do while
// будет просить ввести число до тех пол пока не нажмут cancel


// const number = [];
// do{
//     const input = prompt('Введи число ');
//
//     const asNumber = Number(input);// приоброзовали к числу
//     const volidNumber = !Number.isNaN(asNumber);// проверим на null
//
//     if(input === null ){ //  если = null  то мы прырываем наше исполнение
//         break;     //   ---  Паттерн Guard Clause------- Проверяем сразу на Отрецание
//     }
//
//     if(input === ' ' ){ //  если = null  то мы прырываем наше исполнение
//         alert('Ты ввел не число !')
//     }
//
//     if(!volidNumber){ //  если =  Не  валидное число
//         alert('Ты ввел не число !')
//     }
//
//     if(volidNumber){ //  если = Нормальное валидное число
//         number.push(asNumber);
//     }
// }while (true); // бесконечный до того как cancel - break!
//
// console.log(number);
//=====================Sasha=========== forEach Паттерн Guard Clause  -   Проверяем сразу на Отрецание


// const printArray = arr => {
//     // Проверяем сразу на Отрецание
//     if(!Array.isArray((arr))) {
//         console.log('НЕ массив ');
//         return;
//     }
//     arr.forEach(el => console.log(el));
// };

    //===  нам не нужно проверять массив это или нет
    // if(Array.isArray(arr)) { // прверяем если это массив
    // } else console.log('Не массив  !') // если forEach передать число то это будет ошибка

// printArray( [1, 2, 3, 4, 5, 6, 7, 8] ); // 1 2 3 4 5 6 7 8
// printArray(23);   //Не массив  !

// ======================Sasha============= Destructuring


// нужно взять n-е количество полей

// const user = {
//     name: 'Mango',
//     age:2,
//     email: 'mango@gmail.com',
// };


// Если НЕ используем Destructuring

// const name = user.name;
// const email = user.email;
//
// console.log(`
//     Name: ${name}
//     Email: ${email}
// `);

// !!!!!! =======    Если  Uспользуем Destructuring

const { name, email  } = user ;
console.log(`
    Name: ${name}
    Email: ${email}
`);






//========================= Задача дз   ( map filter )
///**
// * Задача на подумать.
// *
// * Если массив оценок пользователей. Необходимо написать
// * код который:
//     *  - Выберет все оценки пользователя с указанным id.
// *  - Отсортирует их в возврастающем порядке.
// *  - Выберет первые N оценок и посчитает среднюю оценку
// */
// const scores = [
//   { id: 1, score: 5 },
//   { id: 2, score: 10 },
//   { id: 2, score: 15 },
//   { id: 1, score: 10 },
//   { id: 2, score: 20 },
//   { id: 2, score: 10 },
// ];
// })();


//======================= 5-1
/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/*
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
// const findGreaterThan = (num, arr) => {
//     const result = [];
//
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//         if (arr[i] > num) {
//             result.push(arr[i]);
//         }
//     }
//
//     return result;
// };
//
// console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
// console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
// console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]
//
// /*
//   Функция multiplyBy принимает два аргумента - число и массив.
//   Возвращает массив все значения которого умножены на число.
// */
// const multiplyBy = (num, arr) => {
//     let result = [];
//
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//         result.push(arr[i] * num);
//     }
//
//     return result;
// };
//
// console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
// console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
// console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
//
// /*
//   Функция summAllNumbers принимает любое число аргументов.
//   Возвращает число - сумму всех аргументов.
// */
// function summAllNumbers(...args) {
//     let accumulator = 0;
//
//     for (let i = 0, max = args.length; i < max; i += 1) {
//         accumulator += args[i];
//     }
//
//     return accumulator;
// }
//
// console.log( summAllNumbers(1, 2, 3) ); // 6
// console.log( summAllNumbers(1, 2, 3, 4) ); // 10
// console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15
//
// /*
//   Функция findEvery получает два аргумента - число и массив.
//   Возвращает true если все элементы массива больше или равны числу.
//   Иначе если есть хоть один элемент меньше числа, то возвращается false.
// */
// const findEvery = (num, arr) => {
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//         if (arr[i] < num) {
//             return false;
//         }
//     }
//
//     return true;
// };
//
// console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
// console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
// console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true



// ================ 5-2
/*
  Напишите функию getPropValues(arr, prop), принимающую
  параметры arr - массив, и prop - имя ключа в объекте.

  Функция должна возвращать массив всех значений этого ключа из arr.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
// ];
//
// // Вызовы функции для проверки
// console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
//
// console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
//
// console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]

// ================== 5-3

/*
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.

  Если значение поля inactiveDays болше чем period,
  поставить для isActive значение false.

  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
//
// const guests = [
//     { name: 'Mango', inactiveDays: 15, isActive: true },
//     { name: 'Poly', inactiveDays: 8, isActive: false },
//     { name: 'Ajax', inactiveDays: 32, isActive: false },
//     { name: 'Chelsey', inactiveDays: 85, isActive: true }
// ];
//
// // Вызовы функции для проверки
// console.log(
//     setGuestState(users, 10)
// ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
//
// console.log(
//     setGuestState(users, 20)
// ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
//
// console.log(
//     setGuestState(users, 50)
// ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true
//
//
//======================== 5-4
/*
  Напишите функию getActiveGuests(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
// ];
//
// // Вызовы функции для проверки
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax


//============ 5- 5

/*
  Напишите функцию getGuestsOlderThan(guests, age), где
  guests - массив объектов гостей, age - предел возраста
  для сортировки.

  Функция возвращает массив объектов значение свойства
  age которых больше чем параметр age.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
// ];
//
// // Вызовы функции для проверки
// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
//
// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
//
// console.log(getGuestsOlderThan(guests, 55)); // []


// ====================== 5-6

/*
  Напишите функию getGuestById(guests, id), принимающую
  guests - массив объектов гостей, id - идентификатор (число).

  Функция должна возвращать объект гостя с совпадающим id.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/
//
// const guests = [
//     { id: 1, name: 'Mango', age: 20 },
//     { id: 2, name: 'Poly', age: 18 },
//     { id: 3, name: 'Ajax', age: 30 },
//     { id: 4, name: 'Chelsey', age: 45 }
// ];
//
// // Вызовы функции для проверки
// console.log(
//     getGuestById(guests, 3)
// ); // {id: 3, name: 'Ajax', age: 30}
//
// console.log(
//     getGuestById(guests, 1)
// ); // {id: 1, name: 'Mango', age: 20}
//
// console.log(
//     getGuestById(guests, 5)
// ); // undefined


// ====================== 5-7

/*
  Используя метод reduce, посчитайте сумму
  всех значений свойств объекта order.
*/
// const order = {
//     bread: 10,
//     apples: 25,
//     chicken: 60,
//     milk: 15,
//     cheese: 40
// };
//
// console.log(...); // 150

// ============================5/8

/*
  Напишите функцию getTotalPrice(products, order), где
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".

  Функция возвращает общую сумму стоимости всех продуктов заказа.

  PS: используйте метод reduce
*/

// const products = { bread: 10, milk: 15, apples: 20, cheese: 30, chicken: 40 }; // key - name of product
// const orderA = { bread: 2, apples: 4, chicken: 1 };
// const orderB = { bread: 1, milk: 2, cheese: 3 };

// Вызовы функции для проверки


// function getTotalPrice(products, order){ // products-key  // order -key
// Object.keys(orderA) //(3) ["bread", "apples", "chicken"]

// .reduce((products, keys) => {
//     console.log(keys);
// }

// console.log(console.log);


// console.log( getTotalPrice(products, orderA) ); // 140
//
// console.log(getTotalPrice(products, orderB)); // 130


// ======================= 5 -9
/*
  Напишите функию allGuestsActive(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать true если значение поля isActive
  всех объектов true, в противном случае false.

  PS: используйте метод every или some, никаких for!
*/
//
// const guestsA = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: false },
//     { name: "Ajax", isActive: true }
// ];


