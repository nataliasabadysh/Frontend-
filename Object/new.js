'use strict';

//1.  Оператор new создает пустой обькт ( место в памяти )
//2.  Оператор new вызывает фун-ю - констркутор в контексте этого обькта

//3. this = {}  and  return this - default - возращает этот обьект


// функция конструктор  Имя с большой буквы
//=========

//
// function Manager() {
//     // this = {}
//     this.name = 'qweqwe';
//     // return this - возращает этот обьект
// }
// const mango = new Manager();
// console.log(mango); // Manager {name: "qweqwe"}


//=========
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
//
// function User({           // Деструктуризация
//     name= 'Guest',
//     age =18, isActive = false,
//     friends =0,
//     isAdmin = false
//     }) {
//     const message = 'Hello';
//     this.name = name;
//     this.age = age;
//     this.friends = friends;
//     this.isActive = isActive;
//     this.isAdmin = isAdmin;
//
//     this.showName = function () {
//     console.log(message + ' ' + this.name);
//     };
//     this.addAge = function(addA){
//     this.age += addA;
//     };
// }
// const mango = new User({
//     name: 'Mongo',
//     age: 2,
//     isActive: true,
//     isAdmin: true,
//     friends : 10,
// });
// mango.showName();
// mango.addAge(50);
// console.log(mango);
//
// const poly = new User({
//     name: 'Poly',
//     age: 2,
//     isActive: true,
//     isAdmin: false,
//     friends : 10,
// });
//
// console.log(poly);
// poly.showName();


//======================
//1.  Оператор new создает пустой обькт ( место в памяти )
//2.  Оператор new вызывает фун-ю - констркутор в контексте этого обькта

//- 1
// function Manager() {
//         this.name = 'Mango';
//         this.age = 23;
// }
// const mango = new Manager(); // Manager {name: "Mango", age: 23}
// console.log(mango);

//- 2
// function Manager(name, age) {
//         this.name = name;
//         this.age = age;
// }
// const mango = new Manager('Nata', 25); //  Manager {name: "Nata", age: 25}
// console.log(mango);
//
// const poly = new Manager('Poly', 20); //  Manager {name: "Poly", age: 20}
// console.log(poly);

// - 3

// function Manager(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const mango = new Manager('Nata', 25); //  Manager {name: "Nata", age: 25}
// console.log(mango);
//
// const poly = new Manager('Poly', 20); //  Manager {name: "Poly", age: 20}
// console.log(poly);

// -4

// function Manager(name) {
//     this.name = name;
//     this.sales = 0;
// }
// const mango = new Manager('Nata', 25); //  Manager {name: "Nata", age: 25}
// console.log(mango);
//
// const poly = new Manager('Poly', 20); //  Manager {name: "Poly", age: 20}
// console.log(poly);

// ============== new Array()    / object / string / number


const number = new Array(1, 2, 3, 4, 6);

Array.prototype.getFirst = function () { // getFirst - будет в прототипе

    console.log('inside this ,', this);
    return this[0];
};
console.log(
    [2, 3, ].getFirst() // 2
);
console.log(number.getFirst()); // 1