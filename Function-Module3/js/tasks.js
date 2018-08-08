'use strict'
// 1

// 2
//============== task-05-02

/*
  Напишите функию getPropValues(arr, prop), принимающую
  параметры arr - массив, и prop - имя ключа в объекте.
  Функция должна возвращать массив всех значений этого
  ключа из arr.
  PS: обязательно используйте функциональные методы массивов,
  никаких for!
*/
//
// const guests = [
//   { name: 'Mango', age: 20, isActive: true },
//   { name: 'Poly', age: 18, isActive: false },
//   { name: 'Ajax', age: 30, isActive: true },
//   { name: 'Chelsey', age: 45, isActive: false },
// ];
// //для кадого эл что то сделать
// const getPropValues = (arr, prop) => arr.map(el => el[prop]);
//
//
// // Вызовы функции для проверки
// console.log(getPropValues(guests, 'name')); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
// console.log(getPropValues(guests, 'age')); // [20, 18, 30, 45]
// console.log(getPropValues(guests, 'isActive')); // [true, false, true, false]

// ============================= task-05-03

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

// const guests = [
//   { name: 'Mango', inactiveDays: 15, isActive: true },
//   { name: 'Poly', inactiveDays: 8, isActive: false },
//   { name: 'Ajax', inactiveDays: 32, isActive: false },
//   { name: 'Chelsey', inactiveDays: 85, isActive: true },
// ];
//== 1
// const setGuestState = (guests, period) => {
//   return guests.map(guest => {
//     if (guest.inactiveDays > period) {
//       return {
//         ...guest,
//         isActive: false,
//       };
//     }

//     return {
//       ...guest,
//       isActive: true,
//     };
//   });
// };
// == 2
// const setGuestState = (guests, period) => {
//   return guests.map(guest => {
//     return {
//       ...guest,
//       isActive: guest.inactiveDays < period,
//     };
//   });
// };

//== 3

// const guests = [
//     { name: 'Mango', inactiveDays: 15, isActive: true },
//     { name: 'Poly', inactiveDays: 8, isActive: false },
//     { name: 'Ajax', inactiveDays: 32, isActive: false },
//     { name: 'Chelsey', inactiveDays: 85, isActive: true },
// ];
//
// const setGuestState = (guests, period) =>
//   guests.map(guest => ({
//     ...guest,
//     isActive: guest.inactiveDays < period,
//   }));
//
// // Вызовы функции для проверки
// console.log(setGuestState(guests, 10)); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
//
// console.log(setGuestState(guests, 20)); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
//
// console.log(setGuestState(guests, 50)); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

// ==========================  4

/*
  Напишите функцию getGuestsOlderThan(guests, age), где  // filter
  guests - массив объектов гостей, age - предел возраста
  для сортировки.
  Функция возвращает массив объектов значение свойства
  age которых больше чем параметр age.
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { name: 'Mango', age: 20, isActive: true },
//   { name: 'Poly', age: 18, isActive: false },
//   { name: 'Ajax', age: 30, isActive: true },
//   { name: 'Chelsey', age: 45, isActive: false },
// ];
//
// //=====  explicit return - явный возврат {}
// // const getGuestsOlderThan = (guests, age) => {
// //   return guests.filter(guest => guest.age > age);// true false
// // };
//
// // // implicit return - неявный возврат
// const getGuestsOlderThan = (guests, age) =>
//     guests.filter(guest => guest.age > age);
//
// // Вызовы функции для проверки
// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
// console.log(getGuestsOlderThan(guests, 55)); // []

// ================================================   5

/*
  Напишите функию getGuestByEmail(guests, email), принимающую
  guests - массив объектов гостей, email - мыло (строка).
  Функция должна возвращать объект гостя с совпадающим email.
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// id
// const guests = [
//     { id: 1, name: 'Mango', age: 20, email: 'mango@mail.com' },
//     { id: 2, name: 'Poly', age: 18, email: 'poly@mail.com' },
//     { id: 3, name: 'Ajax', age: 30, email: 'ajax@mail.com' },
//     { id: 4, name: 'Chelsey', age: 45, email: 'chelsey@mail.com' },
// ];
//
// const getGuestByEmail = (guests, id) =>
//     guests.find(guest => guest.id === id);
//
//
// console.log(getGuestByEmail(guests, 1)); // {id: 3, name: 'Ajax', age: 30}
// console.log(getGuestByEmail(guests, 3)); // {id: 1, name: 'Mango', age: 20}
// console.log(getGuestByEmail(guests, 5)); // undefined


// email

// const guests = [
//   { id: 1, name: 'Mango', age: 20, email: 'mango@mail.com' },
//   { id: 2, name: 'Poly', age: 18, email: 'poly@mail.com' },
//   { id: 3, name: 'Ajax', age: 30, email: 'ajax@mail.com' },
//   { id: 4, name: 'Chelsey', age: 45, email: 'chelsey@mail.com' },
// ];
//
// // const getGuestByEmail = (guests, email) => {
// //   return guests.find(guest => guest.email === email);
// // };
//
// // const getGuestByEmail = (guests, email) =>
// //   guests.find(guest => guest.email === email);
//
//
// // Вызовы функции для проверки
// console.log(getGuestByEmail(guests, 'mango@mail.com')); // {id: 3, name: 'Ajax', age: 30}
// console.log(getGuestByEmail(guests, 'poly@mail.com')); // {id: 1, name: 'Mango', age: 20}
// console.log(getGuestByEmail(guests, 'bangalore@mail.com')); // undefined
//


