"use strict";

// ARROW FUNCTION

// В переменную присваиваем Функ- но сама Функ анонимна


// 1
// const a = function (a,b) {
//     return a + b;
// };
// //2
// const b = (a, b) => { return a + b; };
//
// //3
// const c = (a,b) => a + b;
//
//  const d = () => 'Its okay' ;   //Вареант Без аргументов , обязательно пустые скобки()   calls - FAT
// // ЭТО function - без параметров
//
//  const f = a => a + 2;          //Вареант С аргументов


// НЕТ   - arguments
// НЕ ИМЕЕТ СОБСТВЕННОГО THIS  / this по месту создания
// НЕ РАБОТАЕТ С new  super

// ОБЬЕКТЫ МОГУТ СОЗДАВАТЬ СОБСТВЕННЫЙ this
// В переменную присваиваем Функ- но сама Функ анонимна
// function - object
// function decloration - Доступна с любого места

// function diclaretion  IS HOSTING !  but functin Arrow NO

//console.log(greet());  // "Hello World"
// function greet() {
//     return "Hello World";
// };


//1
// const greetUser = () => 'Hello My User';
// console.log(greetUser());               // Hello My User
//
// //2
// const sum = (a, b)=> a ** b;            // ES7 возведение в степерь
// console.log(sum(5, 5));                 // 3125
// console.log(sum(2, 3));                 // 8
//
// //3    Декларативный стиль
// const isEvenArrow = a => 2 % a === 0;
// console.log(isEvenArrow(22));           // false
//
// // 4   Принемает массив
//
// const ar = [2, 3, 4, 5, 7];
// const toEven =  arr => arr.filter(elem => elem % 2 === 0);
// const toOdd =  arr => arr.filter(elem => elem % 2 !== 0);
//
// console.log(toEven( ar)); // 2 4             ОТФИЛТРОВАЛИ только четные значения
// console.log(toOdd( ar));  // 3, 5, 7

// ARROW FUNCTION В переменную присваиваем Функ- НО сама Функция анонимна

// Callback Функция обратного вызова


//const ar = [2, 3, 4, 5, 7];
// // func 1
// const toEven =  arr => arr.filter(elem => elem % 2 === 0);
//
// // func 2
// const log = str => console.log(str);
//
// // Обьявили func-1, и в ней Вызвали func 2
// log( toEven(ar) );    // 2 4              // Подставили вызов фун-и
//


// CALLBACK

// const add = param => param + param;         // function  add
// const mult = param => param * param;        // function  mult
// const multFoo = (num, foo) => num * foo(num);
//
// // Вызываем function  add или function  mult
// console.log(multFoo( 3, add ));    // 18
// console.log(multFoo( 3, mult ));   // 27


// Фун-я Как ЗНАЧЕНИЯ МАССИВА

const array = [
    a => a + a,     //3+3=   6
    a => a * a,     //3*3=   9
    a => a / a,     //3/3=   1
    a => a ** a     //3**3=  27
];

const arihpmetic = (arr, val) => arr.map(elem => elem(val));  // elem -  это ссылка на тело функ-и

// map = for
//Вызвали фун-ю /   передали массив / число и применяет к массиву это число

console.log(arihpmetic(array, 3));   //[6, 9, 1, 27]


const add = array[0];  // 2 + 2 = 4

console.log(add(2));  // function add