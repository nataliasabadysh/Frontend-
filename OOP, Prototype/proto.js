'use strict'


// ===================== OOP -
// все описывается как обькт

// const manager = {
//
// //обьект с данными
//     name: 'Natalia',
//     sales : 0,
// // метод работает с данными
//     sell(){
//     }
//
// };


// ====================
// js = OOP + Function Program

// =================== Class
// Способ описание сушьности как обьект  - самые выжние свойства



// const car = {
//     brand: '',
//     speed: 0,
//     accelerate(speed){
//         this.speed += speed;
//     },
// };

//
//  // === ===  Class - для динимческого создания ,( получених от ользователя данных )
//
// function Car({brand, speed}){
//     this.brand = brand;
//     this.speed = speed;
//
//     this.accelerate = function (speed) {
//         this.speed += speed;
//     }
// }
//
// // === === Обьект - экземпляр
// const car = new Car({
//     brand :'Audi',
//     speed : 100,
// });
//
//
// // ==================== Интерфейс - это тот набор методов который  обьект открывает для набота использования
// // ===  нобор методов для работы с обьектами
//
// // Car  accelerate:ƒ (speed) brand:"Audi"speed:100__proto__: Obj
//========================= __proto__ ссылка на какой либо обьект , он будет искать по цепочке до конца пока не найдет
//
// console.log(car);  //===== Получили Интерфейс



// ============= Парадигмы

// ===  Абстакция - выбрать самые главные вещи , задачи

// ===  Инкапсуляция - создание самого классаб и также описывает скрытые реализации

// ===  Наследовательность
// Когда есть что то готовое и мы с того старого добовляем что то и получая Новое

// ===  Полиформизм
// Изменение , переопределение функционала


//===================OOP and JS
//В js нет классв
//В java c++ есть классв
//
// const user = {};

//     // Вызываеться конструктор
//     //const user = new Object();  -  Boolean String Number Array  Object
//
// console.log(user);// {}
//
// const a = user.hasOwnProperty("qweqwe"); // __proto__
// console.log(a); // false
//
// __proto__ - есть в любом обьекте
// ===================  OBJ на который указывает ссылка  __proto__ наз ПРОТОТИПОМ

// =================== Прототип обьекта  , Object.create - создание прототипа
//
// const objA = { objProp : 'obj A prop' };
// const objB = Object.create(objA);  // ==== Object.create -  Создается новый пустой обьект
//
// objB.objBprop = 'obj B prototip'; // ==== В prototip  записуються значения
//
// console.log(objB);  // {objBprop: "obj B prototip"}  - СОБСТВенные
// // и у него в Прото лужит ссылка на  - objProp:"obj A prop" - Наследуемые прототипы
//
//
// // objB = Object.create(objA); // {} __proto__: Object    - пустой , хотя вверху мы записывали в него значения
// console.log(objB.hasOwnProperty('x'));
//
// // В одного в поле есть ссылка на поле другого обькта

// ====================== Обьект без протатипа -  Object.create(null); / No properties

// const book = Object.create(null);
// console.log(book); //No properties

// hasOwnProperty - проверяет если есть собственное свойство на обькте

// for .. in мы используем  hasOwnProperty что бы из цепи  не достать кикието не собственные свойства


// ======================  Свойство prototype
// function - object
// func мы можем добавить свойства и методы (bind call aplly )
//
//
//
// function Guest (name, room) {
//     this.name = name;
//     this.room = room;
// }
// console.log(Guest.prototype);  // obj
//
// //{ constructor: ƒ }  / constructor:ƒ Guest(name, room), __proto__: Object
// // constructor - ссылка на саму фун-ю constructor
//
// Guest.prototype.showNAme  = function () {
//     console.log(this.name);
// };
//
// const mango = new Guest('Mongo', 23);
// console.log(mango); //  Guest {name: "Mongo", room: 23}

// Когда создается экземпляр конструктора то в наш обькт свойство  __proto_ передается ссылка на Guest.prototype
// mongo.__proto__ === Guest.prototype

//mango.showNAme();// Mongo



// 200- милионов  obj - то это занимает много памяти ,
// а если prototype делает ссылку для обьктов к одному который хранит


//======================  Разница между  __proto__  and prototipe

// proto - это встроенное свойство на   обькте  - свойство обьекта и там лежит ссылка на обьект (fm.prototipe)

// У  Function  есть fm.prototipe - свойство фун-и там лежит обьект

// Когда мы вызывает new Fn();-результат этой фун-и это обьект но в его ПРОТО запишиться ссылка на  fm.prototipe

// ---------------------------------
// Пртотип обьекта
// ---------------------------------
//  наследованость прототипная

const user = {};
// каждый раз когда мы создаем обьект , массив , литерал (все эти тыпы - обькты )
// происходит  вызываеться конструктр
// const user = new Object()

console.log(user); // {}- пустой обькт но
// у него есть прото с обьктом - __proto__: Object


const x = user.hasOwnProperty("qweqwe");
console.log(x); // false


// === 2

const obj1 = {
    objAProp: 'ObjA'
};

let obj2 = {
    objBProp: 'ObjB'
};

obj2 = Object.create(obj1);  //  {}__proto__:Object    objAProp: "ObjA"
// objB.__proto__= objA;  //= // {objBProp: "ObjB"} objBProp:"ObjB"   __proto__ :  objAProp:"ObjA"

console.log(obj2);

// === 3 Наследование  - Создастца новый пустой обьект  - Object.create(objA)

// const objA = {
//     objAProp: 'ObjA'
// };
// // сначала Создастца новый пустой обьект  - Object.create(objA)
// // потом Записывает в прототип
// const objB = Object.create(objA);
// // потом записываем все поля
// objB.objAProp = "obj B prop";
//
// console.log(objB);
// // {objAProp: "obj B prop"}(собственное свойство ) -> __proto__ :Object  ->  objAProp:"ObjA"- (наследуемое свойство )


// === 4   Если мы не хотим  Наследование  Object.create(null)
// === 5
// const objA = {
//     objAProp: 'ObjA'
// };
// const objB = Object.create(objA);
//
// objB.objAProp = "obj B prop";
//
// console.log(objB.hasOwnProperty(objB));


// ----------------------------------------- Constructor

//По умолчанию свойство  prototipe есть внутри свойство Constructor
// Оно ссылаеться на саму фун-ю конструктор  Guest   По умолчанию Guest.prototype.constructor = Guest;


// function Guest (name, room) {
//     this.name = name;
//     this.room = room;
// }
//
//
// Guest.prototype = {
//     constructor: Guest
// };

//==================

// function Guest(name, room) {
//     this.name = name;
//     this.room = room;
// }
// console.log('Guest.prototipe: ', Guest.prototype);
// // То что доступно нашим обьектам созданным через фун-и конструктор
// // Guest.prototipe:  {constructor: ƒ}  // constructor:ƒ Guest(name, room)  -
//
// // екземпляр нашего Guest , у него
// // есть свойство котороке ведет --proto-- Guest(name, room)  -на  console.log('Guest.prototipe: ', Guest.prototype);
// const mango = new Guest("Nata", 2);
// console.log(mango);     // Guest {name: "Nata", room: 2}



// ====================== // --- constructor

//---   Guest.prototype.constructor = Guest;  --  default

// function Guest(name, room) {
//     this.name = name;
//     this.room = room;
// }
//
// Guest.prototype.changeRoom = num => {
//     this.room = num;
// };
// -  При создании фун-ю по умолчанию пустой обьект  prototype
// + добовляеться фун-я конструктор  которая ссылаеться на саму фун-ю
//---   Guest.prototype.constructor = Guest;  --  default


// ======================

// Guest.prototype.showName = () => {
//     console.log(this.name);
// };
//
//
// function Guest(name, room) {
//     this.name = name;
//     this.room = room;
// }
//
// Guest.prototype.changeRoom = num => {
//     this.room = num;
// };

// --- constructor
// -  При создании фун-ю по умолчанию пустой обьект  prototype
// + добовляеться фун-я конструктор  которая ссылаеться на саму фун-ю
//---   Guest.prototype.constructor = Guest;  --  default


Guest.prototype.showName = () => {
    console.log(this.name);
};

// Guest.prototype.showName = function () {
//     console.log(this.name);
// };
const mango = new Guest("Nata", 2);

// - 1. Оператор new Создает новый обькт    mango = Object.create(Guest.prototype);

//  Object.create(Guest.prototype - создает новый обьек, указывая его прототипом из фун-и

// - 2. Вызывает конструктор в контексте нового обькта

console.log(mango);


// ======================= стрелочных фун-я - НЕТ своего контекста. Он берется внешне во время его создания
// Поетому меняем все на обичные функции

// function Guest(name, room) {
//     this.name = name;
//     this.room = room;
// }

// Guest.prototype.changeRoom = num => {
//     console.log(this);  // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
//     this.room = num;

// Guest.prototype.changeRoom = function(num){ this.room = num; };
// Guest.prototype.showName = function(num){ console.log(this.name); };
//
// // first User
// const mango = new Guest("Nata", 2);
// console.log(mango);
//
// mango.changeRoom(50);
// console.log(mango);
// mango.showName();  // Nata
//
// // Second User
// const poly = new Guest("Poly", 2);
// console.log(poly);
//
// poly.changeRoom(50);
// console.log(poly);
// poly.showName();  // Poly

//===================================== Наследование и конструкторы

// Обькты созданы через одну фун-ю контруктор
// Должны получать доступ свойства методов в которых созданные через другую фун-ю (прототайп другой фун-и конструктора )
//
// Цепочка конструкторов

// Базовий класс-  Конструктор у которого есть свой пустой прототайп
function Hero(name, xp) {
    this.name = name;
    this.xp = xp;
}
/*
  Теперь у нас есть конструктор базового класса героя,
  добавим в prototype какой-то метод.
*/
Hero.prototype.gainXp = function (amount) {
    console.log(`${this.name} gained ${amount} experience points`);
    this.xp += amount;
};

const mango = new Hero('Mango', 1000);

console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// Так как mango это экземпляр Hero,
// то ему доступны методы из Hero.prototype
mango.gainXp(500); // Mango gained 500 experience points

console.log(mango); // Hero { name: 'Mango', xp: 1500 }

//Дочерній класс
function Warrior(name, xp, weapon) { // - Конструктор война
    //  вызовим Конструктор родителя.  Конструктор героя call- вызывает фун-ю на месте в контексте
    // this = {} - ссылаеться на новый NEW Warrior созданный обьект, и передаем ссылку в call
    Hero.call(this, name, xp);
    this.weapon = weapon;
}
Warrior.prototype = Object.create(Hero.prototype); // Warrior.prototype.__proto__ = Hero.prototype;

Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function () {
    console.log(`${this.name} attacks with ${this.weapon}`); // Poly attacks with sword
};

const poly = new Warrior('Poly', 200, 'sword');// Получили методы и свойства

// new - создаем новый обьект, и записываеться ссылка на Warrior.prototype
//  Вызываем Hero.call(this, name, xp);


console.log(poly); // Warrior {name: "Poly", xp: 200, weapon: "sword"}

poly.attack(); // Poly attacks with sword


//=========== Прототипное наследование


// function Hero(name, xp) {
//     this.name = name;
//     this.xp = xp;
// }
//
// Hero.prototype.gainXp = function(amount) {
//     console.log(`${this.name} gained ${amount} experience points`);
//     this.xp += amount;
// };
//
// const mango = new Hero('Mango', 1000);
// console.log(mango);
//
// function Warrior(name, xp, weapon) {
//     Hero.call(this, name, xp);
//     this.weapon = weapon;
// }
//
// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;
// Warrior.prototype.attack = function() { console.log(`${this.name} attacks with ${this.weapon}`); };
//
// const ajax = new Warrior('Ajax', 300, 'halberd');
//
// console.log(ajax);
// ajax.attack();
// ajax.gainXp(500);
// console.log(ajax);

//--es6

// class Warrior extends Hero{
//     constructor(name, xp, weapon){
//         super(name,xp);
//
//         this.weapon = weapon
//     }
// }

//
// // Initialize constructor functions
// function Hero(name, level) {
//     this.name = name;
//     this.level = level;
// }
//
// function Warrior(name, level, weapon) {
//     Hero.call(this, name, level);
//
//     this.weapon = weapon;  // Добавили поле
// }
//
// function Healer(name, level, spell) {
//     Hero.call(this, name, level);
//
//     this.spell = spell;  // Добавили поле
// }
//
// // Link prototypes and add prototype methods
// Warrior.prototype = Object.create(Hero.prototype);
// Healer.prototype = Object.create(Hero.prototype);
//
// Hero.prototype.greet = function () {
//     return `${this.name} says hello.`;
// };
//
// Warrior.prototype.attack = function () {
//     return `${this.name} attacks with the ${this.weapon}.`;
// };
//
// Healer.prototype.heal = function () {
//     return `${this.name} casts ${this.spell}.`;
// };
//
// // Initialize individual character instances
// const hero1 = new Warrior('Bjorn', 1, 'axe');
// console.log(hero1);
// const hero2 = new Healer('Kanin', 1, 'cure');
// console.log(hero2);


//=============//============//============= new Array
// const number = new Array(1, 2, 3, 4, 6);
//
// Array.prototype.getFirst = function () { // getFirst - будет в прототипе
//
//     console.log('inside this ,', this);
//     return this[0];
// };
// console.log(
//     [2, 3, ].getFirst() // 2
// );
// console.log(number.getFirst()); // 1

//=============//============//============= ERROW
//
// function sumArray(arr) {
//     if (!Array.isArray(arr)) {
//         throw new TypeError('передали не массив');
//     }
//
//     return arr.reduce((acc, val) => acc + val, 0);
// }
//
// try {
//     console.log('hello');
//     console.log(sumArray([1, 2, 3]));
// } catch (e) {
//     console.log(e);
// }
//
// try {
//     console.log(sumArray('hello'));
// } catch (e) {
//     console.log(e);
// }
//
// console.log('qweqweqwe');
//
//
// // const numbers = [1, 2, 3];
//
// // Array.prototype.getFirst = function() {
// //   return this[0];
// // };
//
// // console.log(
// //   [2, 3, 4, 5].getFirst()
// // );
//
// // console.log(
// //   numbers.getFirst()
// // )
// class HeroClass {
//     constructor(name, level) {
//         this._name = name;
//         this._level = level;
//     }
//
//     get name() {
//         return this._name;
//     }
//
//     set level(level) {
//         this._level = level;
//     }
//
//     static sayHi() {
//         console.log('aloha');
//     }
//
//    // static x = 5;
//
//     getName() {
//         return this.name;
//     }
//     /**
//      *
//      *
//      * @param {Number} level
//      * @memberof HeroClass
//      */
//     setLevel(level) {
//         this.level = level;
//     }
// }
// /**
//  *
//  *
//  * @class WarriorClass
//  * @extends {HeroClass}
//  */
// class WarriorClass extends HeroClass {
//     /**
//      * Creates an instance of WarriorClass.
//      * @param {String} name
//      * @param {Number} level
//      * @param {String} weapon
//      * @memberof WarriorClass
//      */
//     constructor(name, level, weapon) {
//         super(name, level);
//
//         this.weapon = weapon;
//     }
//
//     attack() {
//         console.log(`${this.name} attacks with ${this.weapon}`);
//     }
// }
//
// const x = new WarriorClass('x', 2, 'axe');
//
// x.level = 10;
//
// console.log(x);
//
// function Hero(name, level) {
//     // this = {}
//     // this.__proto__ = Hero.prototype
//     this.name = name;
//     this.level = level;
// }
//
// // Hero.sayHi = function() {
// //   console.log('hello');
// // };
//
// // Hero.sayHi();
//
// // Hero.x = 5;
//
// Hero.prototype.getName = function() {
//     return this.name;
// };
//
// Hero.prototype.setLevel = function(level) {
//     this.level = level;
// };
//
// // const mango = new Hero('mango', 1);
//
// // console.log(mango.getName());
//
// // mango.setLevel(666);
//
// // console.log(mango);
//
// function Warrior(name, level, weapon) {
//     // this = {}
//     // this.__proto__ = Warrior.prototype
//     Hero.call(this, name, level);
//     this.weapon = weapon;
// }
//
// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;
//
// /*
//   {
//     __proto__: Hero.prototype
//   }
// */
//
// Warrior.prototype.attack = function() {
//     console.log(`${this.name} attacks with ${this.weapon}`);
// };
//
// /*
// {
//   __proto__: Hero.prototype,
//   attack: f()
// }
//  */
//
// // const poly = new Warrior('poly', 1, 'axe');
// // console.log(poly);