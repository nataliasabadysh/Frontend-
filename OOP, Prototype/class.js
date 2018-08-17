'use strict'

// =============  Класс- способ описания сущьноси,  описания как обьект
// Содержит поля и методы для полей
// Класс -схера , чертеж
//
// const car = {
//     brand: '',
//     speed: 0,
//     // метод для работы с полями
//
//     accelerate(speed) { // увеличиваем скорость
//         speed += speed;
//     }
// };



// =================   Обьект - это то что создается из класса
// Экземпяр этого класса

// Class
function  Car({brand, speed}) {
    this.brand= brand;
    this.speed = speed;

//  метод для работа со свойствами
    this.accelerate = function (speed) { // увеличиваем скорость
        this.speed += speed;
    };
}

// Object - создание экземпляра
const car = new Car({   // вызываем конструктор new Car
// на выходе получим ОБЬЕКТ - car тоисть экземпляр

    brand: 'Audi',
    speed: 40,
});

// =================  Интерфейс это то что  Обьект - открывает для использования , - методы

console.log(car);// obj

// Интерфейс - accelerate :ƒ(speed)
// для описания Интерфейс - важно описывать нужные свойства - методы

// ================ Парадигмы ООП

// =====   Абстакция это выделить самые важные характеристика нашей сушьности

// =====   Инкапсуляция  - создание самого класса
// скрыть реализацию сложную от пользоваетеля

// =================  hasOwnProperty наследует собственные свойства на обьекте

// Js обновляеться технологии - а не пишуться новые
//
//
// const objA = {
//     objAProp: 'ObjA'// собственные свойства
// };
// const objB = Object.create(objA);
//
// objB.objAProp = "obj B prop";  // наследуемые свойства
//
// console.log(objB.hasOwnProperty(objB));   // false
//


// Prototip - механизм который позволяет наследование реализовывать
// - если не найдет то там будет null

// Class - это фун-я констуктор

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
//     // static x = 5;
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


// ============== //  Наследовательность

// - Заменяеться на
//
// class WarriorClass extends HeroClass{ // То что наследует
//     constructor(name, level, weapon){
//         super(name, level);  // Вызывет конструктор HeroClass
//         this.weapon = weapon;
//     }
// }

// ================  ОТловим ошибку

//
// function sumArray(arr) {
//     if (!Array.isArray(arr)) {
//         throw new TypeError('передали не массив');  //TypeError: передали не масси
//     }
//     return arr.reduce((acc, val) => acc + val, 0);
// }
// try {
//     console.log('hello')
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


// ----- hw --- -



// =========== Natasha end  ===== //






























/*
  Сеть фастфудов предлагает несколько видов гамбургеров.
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
  Дополнительно, гамбургер можно:
	- посыпать приправой (+10 денег, +0 калорий)
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
  указанные методы, которые принимают и возвращают данные указанного типа.
*/

/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
class Hamburger {
    constructor(size, stuffing) {
        this._size = size;
        this._stuffing = stuffing;
        this._toppings = [];
    }
    addTopping(topping) {
        if (!this.toppings.includes(topping)) this.toppings.push(topping);
        else console.log(`${topping}: Уже есть!`);
    }
    removeTopping(topping) {
        if (this.toppings.includes(topping)) {this._toppings = this.toppings.filter(x => x !== topping)}
        if (this.toppings.length === 0) {console.log('Нечего удалять!')}
    }
    get toppings() {return this._toppings;}
    getToppings() {
        return this._toppings;
    }
    get size() {return this._size;}
    getSize() {return this.size;}
    get stuffing() {return this._stuffing;}
    getStuffing() {return this.stuffing;}

    calculatePrice() {
        let sumPrice = 0;

        let priceToppings = this.toppings
            .reduce((acc, topping) => acc + Hamburger.TOPPINGS[topping].price, 0);
        sumPrice = priceToppings
            + Hamburger.SIZES[this.size].price
            + Hamburger.STUFFINGS[this.stuffing].price;
        return sumPrice;
    }
    calculateCalories() {
        let sumCalories = 0;

        let sumToppingsCalories = this.toppings
            .reduce((acc, topping) => acc + Hamburger.TOPPINGS[topping].calories, 0);

        sumCalories = sumToppingsCalories
            + Hamburger.SIZES[this.size].calories
            + Hamburger.STUFFINGS[this.stuffing].calories;
        return sumCalories;
    }
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {price: 30, calories: 50,},
    [Hamburger.SIZE_LARGE]: {price: 50, calories: 100,},
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {price: 15, calories: 20,},
    [Hamburger.STUFFING_SALAD]: {price: 20, calories: 5,},
    [Hamburger.STUFFING_MEAT]: {price: 35, calories: 15,},
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {price: 10, calories: 0,},
    [Hamburger.TOPPING_SAUCE]: {price: 15, calories: 5,},
};

/* Вот как может выглядеть использование этого класса */

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1




