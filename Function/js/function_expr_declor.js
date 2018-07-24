"use strict";

//1

// const checkNumberType = function(num){
//      return num % 2 === 0 ? 'Even': 'Odd';
// };
// console.log( checkNumberType(2) );  // 'Even'
// console.log( checkNumberType(46) ); // 'Even'
// console.log( checkNumberType(3) );  // 'Odd'
// console.log( checkNumberType(17) ); // 'Odd'


// 2

// function formatString(str){
//     if(str.length > 40) {
//         return str.substring(0, 40) + '...'  //  str.substring(0, 40)
//     }
//     return str
// };
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// console.log(formatString("Curabitur ligula sapien."));
// console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."));

// 3

/*
  Напишите функцию checkForSpam(str)

  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale

  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false

  PS: слова могут быть в произвольном регистре
*/
// includes(условие ? значение1 : значение2)

// function checkForSpam(str){
//         return str.includes('sale')? 'yes include sale ': 'no';
//         return  str.includes('spam') ? 'yes include spam ': 'no' ;
// }
// console.log( checkForSpam('Latest technology news'));       // false
// console.log( checkForSpam('JavaScript weekly newsletter')); // false
// console.log( checkForSpam('Get best sale offers now!'));    // true
// console.log( checkForSpam('[SPAM] How to earn fast money?')); // true


// 4

/*
  Написать функцию, getPx(str)



  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да,
  возвращать только числовую составляющую, к примеру 10.

  Если была передана не строка, функция возвращает null.
*/

// Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null


// function getPx(str) {
//
//     if(str){
//
//     }
//     return str = null;
// }
//
// getPx(str);
//





// 5

/*
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.

  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр! (нет , - /...)
*/


// Вызовы функции для проверки




// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // вернет 'jumped'
// console.log(findLongestWord("Google do a roll")); // вернет 'Google'
// console.log(findLongestWord("May the force be with you")); // вернет 'force'
//


// 6

/*
  Создайте функцию findLargestNumber(numbers),
  которая получает массив чисел numbers, и возвращает
  самое большое число в массиве.
*/

// Вызовы функции для проверки
// console.log(
//     findLargestNumber([1, 2, 3])
// ); // вернет 3
//
// console.log(
//     findLargestNumber([27, 12, 18, 5])
// ); // вернет 27
//
// console.log(
//     findLargestNumber([31, 128, 14, 74])
// ); // вернет 128


// 7

/*
  Есть массив уникальных чисел uniqueNumbers.

  Написать функцию, addUniqueNumbers(...),
  которая получает произвольное кол-во чисел как аргументы,
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers  = [2, 1, 4, 9];
//
// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//     uniqueNumbers
// ); // [2, 1, 4, 9, 3]
//
// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//     uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]
//
// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//     uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

// 8

/*
  Создайте функцию removeFromArray(arr),
  которая получает 1 параметр, исходный массив arr.

  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел.

  Удалите все элементы из исходного массива,
  которые имеют такое же значение, что и аргументы.
*/

// Вызовы функции для проверки
// console.log(
//     removeFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]
//
// console.log(
//     removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]



// дз module 3

//const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

/*
  Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.

  Добавляемый логин должен:
    - проходить проверку на длину, от 4 до 16-ти символов включительно
    - быть уникален, тоесть еще не используется в массиве logins

  🔔 Разбейте задачу на подзадачи, что удобно решить используя функции.

  Для начала напишите функцию checkLoginValidity(login) которая получает логин как
  аргумент, проверяет количество символов логина и возвращает true если логин подходит
  под условие длины от 4-х до 16-ти символов включительно, и false если не подходит.
  Убедитесь что функция работает верно.

  Далее создайте функцию checkIfLoginExists(logins, login), которая получает логин и список
  всех логинов как аргументы, проверяет наличие логина в массиве logins, возвращая false
  если такого логина в массиве еще нет, и true если есть. Убедитесь что функция работает верно.
  Далее напишите функцию addLogin(logins, login) которая:
    - Получает новый логин и массив всех логинов как аргументы

    - Проверяет валидность логина используя вспомогательную функцию checkLoginValidity

    - Если логин не валиден, прекратить исполнение функции addLogin
      и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'

    - Если логин валиден, функция addLogin проверяеть уникальность логина
      с помощью функции checkIfLoginExists

    - Если checkIfLoginExists вернет false, addLogin добавляет новый логин
       в logins и возвращает строку 'Логин успешно добавлен!'

    - Если checkIfLoginExists вернет true, тогда addLogin не добавляет
       логин в массив и возвращает строку 'Такой логин уже используется!'

  🔔 Принцип единственной ответственности функции:
      - checkIfLoginExists только проверяет есть ли такой логин и возвращает true или false.
        Больше ничего не делает.

      - checkLoginValidity только проверяет  валидный ли логин и возвращает true или false.
        Больше ничего не делает.

      - addLogin вызывает обе функции и по результату их работы или добавляет логин в logins или нет,
        возвращая указанные строки. Больше ничего не делает.
*/

// cw Alex
// 1

// const greet = function(name = 'guest') {
//     console.log(`Hello ${name} !`);
// };
// greet('Natasha');
// greet();

// 2 в фун-ях когда мы незнаем сколько аргументов прийдет Но их нам нужно посчитать

// const add = function (a, b, c, d) {
// let total = 0;
//     console.log(arguments);
//     // псевдомассив но в нем нет методов массива ,
//     // мы можем только length (+for) все аргуменры соберает в массив, мы можем итерировать в нем
//     // console.log('Arguments Lenght : ', arguments);
//
//     for(const arg of arguments){
//         total += arg; //  на каждой итерации + к total одно значение
//     }
//     return total;
// };
// console.log(add(2, 2, 2)); // 6
//
// // console.log(add('1','2'));
// // console.log(add(1, 2, 4, 5, 9));
// // console.log(add(1, 2, 4, 5, 9, 30, 10, 48));

// 2.2 alex

// const add = function (...args) {
//     let total = 0;
//     for(const arg of arguments){
//         total += arg;
//     }
//     return total;
// };
// console.log(add(2, 2, 2)); // 6
//

// 3 alex

// const fn = function(arr, ...args){
//     const newArray = arr.slice();  // сделали копию аригинально массива [1,2,3,4]
//
//     for (const arg of args){
//         const hasElement = newArray.includes(arg);
//
// // проверим если ел не совпадает то тогда +
//
//         if(!hasElement){   // если такого ЭЛ НЕТУ
//             newArray.push(arg); // тогда мы эго пушем
//         }
//     }
// console.log(newArray);
// };
// fn([1,2,3,4],6,7,8,9,0,1,2,3,4,5,6,8,1);  // (10) [1, 2, 3, 4, 6, 7, 8, 9, 0, 5]

//




// HW

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];  // Есть массив logins с логинами пользователей
//
// function checkLoginValidity(login) {
//     let loginLength = login.length;
//     return loginLength >= 4 && loginLength <= 16;  // проходить проверку на длину, от 4 до 16-ти символов включительно
// }
//
// function checkIfLoginExists(login) {
//   return logins.includes(login);  // быть уникален, тоесть еще не используется в массиве logins
// }
//
// function addLogin(login) {
//   if (checkLoginValidity(login) === false) {
//     return "Ошибка! Логин должен быть от 4 до 16 символов";
//   } else {
//     if (checkIfLoginExists(login)) {
//       return "Такой логин уже используется!";
//     } else {
//       logins.push(login); //  Напишите скрипт добавления логина в массив logins.
//     }
//   }
// }
//
// test();
//
// function test() { // которая получает логин и список всех логинов как аргументы, проверяет наличие логина в массиве logins, возвращая false
//   let login = "";
//   let proceed = true;
//   do {
//     login = prompt("Enter login or 'Q' to quit");
//     if (login) {
//       proceed = login.toLowerCase() !== "q";
//       if (proceed) {
//         let msg = addLogin(login);
//         if (msg) {
//           alert(msg);
//         } else {
//           alert(logins);
//         }
//       }
//     }
//   } while (proceed);
// }
/*
  Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.

  Добавляемый логин должен:
    - проходить проверку на длину, от 4 до 16-ти символов включительно
    - быть уникален, тоесть еще не используется в массиве logins

  🔔 Разбейте задачу на подзадачи, что удобно решить используя функции.

  Для начала напишите функцию checkLoginValidity(login) которая получает логин как
  аргумент, проверяет количество символов логина и возвращает true если логин подходит
  под условие длины от 4-х до 16-ти символов включительно, и false если не подходит.
  Убедитесь что функция работает верно.

  Далее создайте функцию checkIfLoginExists(logins, login), которая получает логин и список
  всех логинов как аргументы, проверяет наличие логина в массиве logins, возвращая false
  если такого логина в массиве еще нет, и true если есть. Убедитесь что функция работает верно.
  Далее напишите функцию addLogin(logins, login) которая:
    - Получает новый логин и массив всех логинов как аргументы

    - Проверяет валидность логина используя вспомогательную функцию checkLoginValidity

    - Если логин не валиден, прекратить исполнение функции addLogin
      и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'

    - Если логин валиден, функция addLogin проверяеть уникальность логина
      с помощью функции checkIfLoginExists

    - Если checkIfLoginExists вернет false, addLogin добавляет новый логин
       в logins и возвращает строку 'Логин успешно добавлен!'

    - Если checkIfLoginExists вернет true, тогда addLogin не добавляет
       логин в массив и возвращает строку 'Такой логин уже используется!'

  🔔 Принцип единственной ответственности функции:
      - checkIfLoginExists только проверяет есть ли такой логин и возвращает true или false.
        Больше ничего не делает.

      - checkLoginValidity только проверяет  валидный ли логин и возвращает true или false.
        Больше ничего не делает.

      - addLogin вызывает обе функции и по результату их работы или добавляет логин в logins или нет,
        возвращая указанные строки. Больше ничего не делает.
*/



 // 1 easycode

// function calcul() {
//
//     let a = 10; // локольная переменная
//     return a + 20;
// };
// let res = calcul() + 50; //  //фун-ю присвоили в переменную
// console.log(res);   // 80

//2


// const a = 20;
// function calcul() {
//     const a = 10;
//     console.log('local Var', a); // .. 10
//     return a + 20;
// };
// let res = calcul() + 50; //  //фун-ю присвоили в переменную
// console.log('Global Var', a); // .. 20
// console.log(res);   // 80
//
//
// // 3   перезаписали внутри фун-и переменнную
//
// let a = 20;
// function calcul() {
//     a = 90;
//     console.log('local Var', a); // .. 80
//     return a + 20;
// };
// let res = calcul() + 50; //  //фун-ю присвоили в переменную
// console.log('Global Var', a); // .. 90
// console.log(res);   // 160

// 4

// function calc(a, b) {
//     return a + b;
// };
// let res;
// res = calc(2, 18) + 50;  // 70
//
// console.log(res);

// 5 todo

// Add, Edit, Delete

// let todos = [
//     {
//         text: 'Learn JavaScript',
//         id: 0
//     },
//     {
//         text: 'Learn Angular',
//         id: 1
//     }
// ];
//
// function addTask(text) {
//     if (typeof text !== 'string') return new Error('text is not a string');
//     if (!text.length) return new Error('text empty');
//
//     // Create new task obj
//     const newTask = {
//         id: todos.length,
//         text
//     };
//
//     // Add new task
//     todos.push(newTask); // push, pop, unshift, shift
//     return todos;
// }
//
//
// function deleteTask(id) {
//     if (id !== 0 && !id) return new Error('id required');       // id is not a === 0  and  id = false
//     if (isNaN(id)) return new Error('id must be a number');
//     id = Number(id);
//
//     let todo;  //
//
//     for (let i = 0; i < todos.length; i++ ) {
//         if (todos[i].id === id) {                         // а если id совпал то мы его получим
//             todo = todos[i];                                записали текущий елемент которыйtodos.splice(i, 1);                            // удаляем из массива(c какого индекса - мы его нашли , кол удаляемых элиз массива ,на место можем что то припесать  , , )
//             break;
//         }
//     }
//
//     return todo || 'task not found';
// }





// hw




