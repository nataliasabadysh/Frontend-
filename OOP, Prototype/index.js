'use strict'


// ===================== OOP -
// все описывается как обькт

const manager = {
    //обьект с данными
    name: 'Natalia',
    sales : 0,
    // метод работает с данными
    sell(){
    }
};
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

const user = {};

    // Вызываеться конструктор
    //const user = new Object();  -  Boolean String Number Array  Object

console.log(user);// {}

const a = user.hasOwnProperty("qweqwe");
console.log(a); // false







