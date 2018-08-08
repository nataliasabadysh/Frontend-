'use strict';

// function User(name, age, icActive) {
//     this.name = name;
//     this.age = age;
//     this.icActive = icActive;
//     this.showName = function () {
//         console.log(this.name);  // mango.showName(); // Mongo
//     }
// }
// const mango = new User('Mongo', 2, true); // User {name: "Mongo", age: 2, icActive: true, showName: ƒ}
// const poly = new User('Poly', 2, true);  // User {name: "Poly", age: 2, icActive: true, showName: ƒ}
//
// console.log(mango);
// mango.showName();
//
// console.log(poly);


//========= Var in this , closure
// можно использовать локальные переменные в это конструкторе

// function User(name, age, icActive, friends) {
//
//     const message = 'Hello';
//
//     this.name = name;
//     this.age = age;
//     this.friends = friends;
//
//     this.icActive = icActive;
//     this.showName = function () {
//         console.log(message + ' ' + this.name);  // mango.showName(); //Hello Mongo
//     };
//     this.addAge = function(addA){
//         this.age += addA;
//     };
// }
// const mango = new User('Mongo', 2, true, 10); // User {name: "Mongo", age: 2, icActive: true, showName: ƒ}
// const poly = new User('Poly', 2, true, 20);  // User {name: "Poly", age: 2, icActive: true, showName: ƒ}
//
// mango.showName();
// mango.addAge(50);
// console.log(mango);
// console.log(poly);


//===================== передадим аргументы в виде обькта

// function User(param) {
//
//     console.log(param);  // {name: "Mongo", age: 2, icActive: true, friends: 10}
//
//     const message = 'Hello';
//     this.name = param.name;
//     this.age = param.age;
//     this.friends = param.friends;
//     this.icActive = param.icActive;
//
//     this.showName = function () {
//         console.log(message + ' ' + this.name);
//     };
//     this.addAge = function(addA){
//         this.age += addA;
//     };
// }
// const mango = new User({
//     name: 'Mongo',
//     age: 2,
//     icActive: true,
//     friends : 10,
// });
// mango.showName();
// mango.addAge(50);
// console.log(mango);

// ================ Деструктуризация

// const user = {
//     name: 'Mongo',
//     age: 2,
//     icActive: true,
//     friends : 10,
// };
// const {name, age, icActive, friends} = user;


// =============

function User({           // Деструктуризация
    name= 'Guest',
    age =18, isActive = false,
    friends =0,
    isAdmin = false
    }) {
    const message = 'Hello';
    this.name = name;
    this.age = age;
    this.friends = friends;
    this.isActive = isActive;
    this.isAdmin = isAdmin;

    this.showName = function () {
    console.log(message + ' ' + this.name);
    };
    this.addAge = function(addA){
    this.age += addA;
    };
}
const mango = new User({
    name: 'Mongo',
    age: 2,
    isActive: true,
    isAdmin: true,
    friends : 10,
});
mango.showName();
mango.addAge(50);
console.log(mango);

const poly = new User({
    name: 'Poly',
    age: 2,
    isActive: true,
    isAdmin: false,
    friends : 10,
});

console.log(poly);
poly.showName();


