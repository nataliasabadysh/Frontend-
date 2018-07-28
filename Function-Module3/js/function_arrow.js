"use strict";

// ARROW FUNCTION

// В переменную присваиваем Функ- но сама Функ анонимна


// 1
// const a = function (a,b) {
//     return a + b;
// };
// //2
// const b = (a, b) => {
//     return a + b;
// };

// //3
// const c = (a,b) => a + b;
// const d = () => 'Its okay' ;   //Вареант Без аргументов , обязательно пустые скобки()   calls - FAT
//                                 // ЭТО function - без параметров
// const f = a => a + 2;          //Вареант С аргументов


// НЕТ   - arguments
// НЕ ИМЕЕТ СОБСТВЕННОГО THIS  / this по месту создания
// НЕ РАБОТАЕТ С new  super

// ОБЬЕКТЫ МОГУТ СОЗДАВАТЬ СОБСТВЕННЫЙ this
// В переменную присваиваем Функ- но сама Функ анонимна
// function - object
// function decloration - Доступна с любого места

// function diclaretion  IS HOSTING !  but functin Arrow NO

// console.log(greet());  // "Hello World"
// function greet() {
//     return "Hello World";
// };


// //1
// const greetUser = () => 'Hello My User';
// console.log(greetUser());               // Hello My User
//
// // //2
// const sum = (a, b)=> a ** b;            // ES7 возведение в степерь
// console.log(sum(5, 5));                 // 3125
// console.log(sum(2, 3));                 // 8
//
// // //3    Декларативный стиль
// const isEvenArrow = a => 2 % a === 0;
// console.log(isEvenArrow(22));           // false
//
// // // 4   Принемает массив
//
// const ar = [2, 3, 4, 5, 7];
// const toEven =  arr => arr.filter(elem => elem % 2 === 0);
// const toOdd =  arr => arr.filter(elem => elem % 2 !== 0);
//
// console.log(toEven( ar)); // 2 4             ОТФИЛТРОВАЛИ только четные значения
// console.log(toOdd( ar));  // 3, 5, 7
//
// // ARROW FUNCTION В переменную присваиваем Функ- НО сама Функция анонимна
//
//
// //====================  arrow function easycode
//
// const sum = (a, b) => {
//     return a + b;
// };
// console.log(sum(2,3));
//
// // sum = (a, b) => a + b; // 2 argument
//
// // sum = (a = 1, b = 1) => a + b; // 2 argument  + default
//
// // sum = x => x + 10; // 1 argument
//
// // sum = () => console.log('Some Tetx'); // NO argument
//
// //====================  arrow function easycode
// const objOne = (userName) => {
//     return {
//         name : userName
//     }
// };
// //====================  arrow function - есло фун-я возвращает  обьект
// let a = objOne();
// a = useName => ({name : 'Nat'});  // в консоле ввести a и мы получим наш name : 'Nat'


// ====================== sort
// Выведем по возрасту людей
// easycode les 5

let users = [
    { name: 'Nata',  age : 23,},
    { name: 'Pata', age : 22,}
];
users.sort((prew, next) => prew.age - next.age);
console.log(users[0]); //
console.log(users[0]); //{name: "Pata", age: 22}