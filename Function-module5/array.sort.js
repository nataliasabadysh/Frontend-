'use stict'

// ============= array.sort

// Изменяет исходный массив

const number = [1, 2, 3, 4, 5, 6, 7];

console.log( number.sort( (prev, next)=> next - prev) );// [7, 6, 5, 4, 3, 2, 1]
console.log( number.sort( (prev, next)=> prev - next) );// [1, 2, 3, 4, 5, 6, 7]

// сравнивает между собой , отнимая каждый эл


// ============= Сортировка массива - обькта  array.sort

// === Отсортеруем по возрасту

const users = [
    { name: 'Mongo', active: true, age: 10 },
    { name: 'Poly', active: false , age: 90},
    { name: 'Ajax', active: true , age: 50 },
];

console.log( users.sort( (prev, next)=> prev.age - next.age) ); // age:10 ... age:50 .. age:90


// console.log(users.sort();
// ничего не получим
//обьек ты не может сравнить
