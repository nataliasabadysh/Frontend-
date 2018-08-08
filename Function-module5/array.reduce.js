'use strict'

 // ============== array.reduce ()

// const numbers = [1, 2, 3, 4, 5];
//
// const sum = numbers.reduce((accumulator, number) => {
//     return accumulator + number;
// }, 0);
//
// console.log(sum);

//  ==   первая итерация
// - accumulator = 0    то к чему мы приводим
// - number = 1 -       текущий эл

// ==  вторая итерация
// - accumulator = 1
// - number = 2

// ==  3 итерация
// - accumulator = 3
// - number = 3

// ==  4 итерация
// - accumulator = 6
// - number = 4


// ==  5 итерация
// - accumulator = 10
// - number = 5
// 10 + 5 =

// 15


// =======

// const numbers = [1, 2, 3, 4, 5];
//
// const sum = numbers.reduce((accumulator, number) => {
//     return accumulator + number;
// }, 0);
//
// console.log(sum);

//  ==   первая итерация
// - accumulator = 0    то к чему мы приводим
// - number = 1 -       текущий эл

// ==  вторая итерация
// - accumulator = 1
// - number = 2

// ==  3 итерация
// - accumulator = 3
// - number = 3

// ==  4 итерация
// - accumulator = 6
// - number = 4


// ==  5 итерация
// - accumulator = 10
// - number = 5
// 10 + 5 =

// 15
// const numbers = [1, 2, 3, 4, 5];
//
// const sum = numbers.reduce((accumulator, number) => {
//     return accumulator + number;
// }, 0);
//
// console.log(sum);

//  ==   первая итерация
// - accumulator = 0    то к чему мы приводим
// - number = 1 -       текущий эл

// ==  вторая итерация
// - accumulator = 1
// - number = 2

// ==  3 итерация
// - accumulator = 3
// - number = 3

// ==  4 итерация
// - accumulator = 6
// - number = 4


// ==  5 итерация
// - accumulator = 10
// - number = 5
// 10 + 5 =

// 15

// ============== array.reduce ()

// const numbers = [1, 2, 3, 4, 5];
//
// const sum = numbers.reduce( ( accumulator, number, index ) => {
//     console.group(`index - > ${index}`);
//
//         console.log('accomulator: ',  accumulator);
//         console.log('number: ',  number);
//
//     console.groupEnd(`index - > ${index}`);

//     return accumulator + number;

// }, 10);  // c 10
//
// //  ==   первая итерация
// // - accumulator = 10    то к чему мы приводим
// // - number = 1 -       текущий эл
//
// console.log('sum', sum); // 20

// ============== array.reduce ()

// Поситаем сумму зп

// const products = [
//     { name: 'apples', amount: 100, price: 30 }, // 1я  итерация
//     { name: 'grapes', amount: 150, price: 40 }, // 2я  итерация
//     { name: 'bananas', amount: 200, price: 50 }, //3я  итерация
// ];


// --=== forEach

// let sum = 0;
// products.forEach(product => (sum += product.price ));
// console.log(sum); // 120

// --=== reduse

// const sum = products.reduce((acc, product, idx) =>{
//
//     console.group(`index - > ${idx}`);
//         console.log('accomulator: ',  acc);
//         console.log('number: ',  product);
//
//     console.groupEnd(`index - > ${idx}`);
//
//     return acc + product.price;
// }, 0);
// console.log('Price is',sum); // 120

// --========================= reduse With DOM

// const listItem = ['HTML', 'CSS', 'JS', 'React'];
//
// const markup = listItem.reduce((str, item)=>{
//     return str + `<h1> ${item}</h1>`;
//
// },'');
// document.body.insertAdjacentHTML('afterbegin', markup);

//================================

/* Считаем общую сумму статов отряда */

// const squad = [
//   { name: 'Mango', stats: { str: 5, dex: 3, int: 8 },},
//   { name: 'Poly', stats: { str: 2, dex: 7, int: 8 },},
//   {name: 'Ajax', stats: { str: 9, dex: 3, int: 5 },},
// ];
// const squadStats = squad.reduce(
//
//     // fun вызывается на каждом элементе
//
//      (total, hero) => {
//
//     total.str += hero.stats.str;
//     total.dex += hero.stats.dex;
//     total.int += hero.stats.int;
//
//     return total;
//   },
//
//     //это наш  Accamulator,  любые дейстия может выполнять
//   { str: 0, dex: 0, int: 0 },
// );
// console.log(squadStats);// { str: 16,  dex: 13, int: 21 }


//===================  filtre (  sort,  map )

//  const numbers = [ 1, 2, 3, 4, 5, 9, 39, 20 ];
//
//  // ======  Все числа больше 5 -  filter - на свое мето вернет массив
// const filtered = numbers.filter(number => number > 5); // [9, 39, 20]
// console.log(filtered);
//
// // ======  Все числа *2   -  -  map - на свое мето вернет массив
// const multiplied = filtered.map(number => number * 2); // [18, 78, 40]
// console.log(multiplied);
//
//
// // ======  Все отсортировать по возрастонию  -  sort - на свое мето вернет массив
//
// const sorted = multiplied.sort(); //(3) [18, 40, 78]
// console.log(sorted);



// =========================  filtre (  sort,  map ) Цепочка

// const numbers = [ 1, 2, 3, 4, 5, 9, 39, 20 ];
// const result = numbers
//     .filter(number => number > 5)   // получим Array и на этом масииве вызывем map
//     .map(number => number * 2)      // получим Array и на этом масииве вызывем sort
//     .sort();
// console.log(result); // (3) [18, 40, 78]

// =========================  filtre (  sort,  map , slice() ) Цепочка
//
// const numbers = [ 1, 2, 3, 4, 5, 9, 39, 20 ];
// const result = numbers
//     .filter(number => number > 5)
//     .map(number => number * 2)
//     .sort()
//     .slice(0, 2); //from 0idx -  2 elem
// console.log(result); // (2) [18, 40]












