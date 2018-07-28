// easycode 5
// // ============================ Методы массивов  push
//
// let stringArr = ['one', 'two'];
// stringArr.push('tree');
// console.log(stringArr);// ["one", "two", "tree"]
//
// // ============================ Методы массивов pop
// let stringArr = ['one', 'two'];
// console.log(stringArr.pop());   // two
// console.log(stringArr);      // ["one"]
//
// // ============================ Методы массивов unshift
// let stringArr2 = ['one', 'two'];
// console.log(stringArr2.unshift('Numbers :'));   //3
// console.log(stringArr2);                       // ["Numbers :", "one", "two"]
//
// // ============================ Методы массивов shift
// let stringArr3 = ['one', 'two'];
// console.log(stringArr3.shift('two'));           // one
// console.log(stringArr3);                       // ["two"]

// ============================== Методы массивов  split
// из строки в массив

// let str = 'Hi,  my name is Natalia';
//
// console.log(str.split()); //  ["Hi,  my name is Natalia"]
// console.log(str.split(' ')); //  ["Hi,", "", "my", "name", "is", "Natalia"]
//
// console.log(str.split('')); // "H", "i", ",", " ", " ",....  "l", "i", "a"]

// ============================ Методы массивов  join
// сделать массиив -> строки

// let stringArr = ['one', 'two', 'tree'];
//
// console.log(stringArr.join()); // one,two,tree
// console.log(stringArr.join(' ')); // one two tree
// console.log(stringArr.join('')); // onetwotree


// ============================ Методы массив Перевернем строку

// let str = 'Hi,  my name is Natalia'; //  ["Natalia", "is", "name", "my", "", "Hi,"]
// let spliceRest = str.split(' ');
// spliceRest.reverse();
// spliceRest.join(' ');
// console.log(spliceRest);



// ===================================
//  Перевернем строку
// ===================================

// Можно написать в одну строку
// только если предедуший метод возврашиет провельны результат , и мы можем применими методы добовлять
// должно возвращать валидное значение для следующего метого

// let str = 'Hi,  my name is Natalia';
// let spliceRest = str.split(' ').reverse().join(' ');// ..Natalia is name my  Hi
// let spliceRest = str.split(' ').reverse().join(' ').toUpperCase();// NATALIA IS NAME MY  HI,
//
// console.log(spliceRest);


// // ============================ Добавим  в массива

//(6) ["Here is my", "Numbers", "23", 34, 55, 87]
//let array = ['23', 34, 55, 87];
// array.splice(0, 0, 'Here is my', "Numbers");
//
// // // ============================ Удалим из массива один последний эл
// //(5) ["Here is my", "23", 34, 55, 87]
//  array.splice(1, 1);
// console.log(array);
// // // ============================ Удалит и заменит эл в масииве на другое значение
//
// array.splice(1, 1, 'заменил на этот текст');
// console.log(array); // (5) ["Here is my", "заменил на этот текст", 34, 55, 87]

// ================================  Slice () копирует массив
//копирует участок массива и отдает новый массив (от, до)

// console.log(array.slice(0, 1)); //["23"]
// console.log(array.slice(0, 4)); //["23", 34, 55, 87]

// ================================= concat
// - может сложить два масиисва в один или скоприровать

// let hege = ["Cecilie", "Lone"];
// let stale = ["Emil", "Tobias", "Linus"];
// console.log(hege.concat(stale));// ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]

// ================================= sort()
//
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();      //  (4) ["Orange", "Mango", "Banana", "Apple"]


// let number = [4, 6, 3, 4, 10, 6, 7];
// number.sort();      //  [10, 3, 4, 4, 6, 6, 7]


// let number = [4, 6, 3, 4, 10, 6, 7];
// number.sort(function (prev, next) {
//         return prev - next;
// });
// console.log(number);// [3, 4, 4, 6, 6, 7, 10]

// ================================= sort()  по возрасту отсертеровали

// let number = [4, 6, 3, 4, 10, 6, 7];
// let users = [
//     {
//         name: 'Nata',
//         age : 23,
//     },
//     {
//         name: 'Pata',
//         age : 22,
//     }
// ];
// users.sort((prew, next) => prew.age - next.age);
// console.log(users);



