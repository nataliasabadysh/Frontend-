'use strict'


// == сегоднешняя дата


const date = new Date();    // конструктор
console.log(date);          // Sun Sep 09 2018 10:41:25 GMT+0400 (Gulf Standard Time)
// выводит как строку Но это обьект просто у него есть toString подкапотом

console.log(typeof date);   // object


// == Конкретная дата

// const date = new Date('March 27, 2019');
// console.log(date);          // Wed Mar 27 2019 00:00:00 GMT+0400 (Gulf Standard Time)

// == Конкретная дата

const date2 = new Date(2019, 8, 17, 17); // 8 - sep not Aug - месяца начинаються с 0
console.log(date2);          // Tue Sep 17 2019 17:00:00 GMT+0400 (Gulf Standard Time)

