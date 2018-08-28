'use strict'
// ================================= 1
/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount.

  В prototype функции-конструктора добавить метод getAccountInfo(),
  который выводит в консоль значения полей login, email и friendsCount.

  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора,
  а использовать его смогут все экземпляры, по ссылке.

  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

function Account (login, email, friendsCount){ // функцию-конструктор Account

    this.login = login;  // добавляет будущему объекту поля login, email и friendsCount
    this.email = email;
    this.friendsCount = friendsCount;
}
Account.prototype.getAccountInfo = function() {  // prototype функции-конструктора + getAccountInfo()

    console.log(`Login: ${this.login}; email: ${this.email}; has ${this.friendsCount} friends.`);
    //   Login: Mango; email: user@gmail.com; has 20 friends.
    //  Login: Poly; email: admin@gmail.com; has 1 friends

};

const poly = new Account('Poly', "admin@gmail.com", 1);
//console.log(poly);// Account {login: "Poly", email: "admin@gmail.com", friendsCount: 1}

const mango = new Account('Mango', "user@gmail.com", 20);
//console.log(mango);// Account {login: "Mango", email: "user@gmail.com", friendsCount: 20}

poly.getAccountInfo();
mango.getAccountInfo();


// ================================= 2

/*
  Напишите функцию-конструктор StringBuilder.


  На вход она получает один параметр string - строку.

  Добавьте следующие методы в prototype функции-конструктора.

    - getValue() - выводит в консоль текущее значение поля value

    - append(str) - получает парметр str - строку и добавляет
      ее в конец значения поля value

    - prepend(str) - получает парметр str - строку и добавляет
      ее в начало значения поля value

    - pad(str) - получает парметр str - строку и добавляет
      ее в начало и в конец значения поля value
*/

// --- отве

function StringBuilder(string = "") { // функцию-конструктор StringBuilder. получает один параметр string - строку.
    this.value = string;
}
StringBuilder.prototype.showValue = function() {
    console.log(value);
};

const myString = new StringBuilder('.');

myString.append('^');
myString.showValue(); // '.^'

myString.prepend('^');
myString.showValue(); // '^.^'

myString.pad('=');
myString.showValue(); // '=^.^='


//
// function StringBuilder(string = "") {
//     this.value = string;
// }
//
// StringBuilder.prototype.showValue = function() {
//     console.log(this.value);
//     //  getValue() - выводит в консоль текущее значение поля valu
// }
//
// StringBuilder.prototype.append = function(addToEnd) {
//     this.value = this.value + addToEnd;
//     //  append(str) - получает парметр str - строку и добавляет ее в конец значения поля value
//     return this.value;
// }
//
// StringBuilder.prototype.prepend = function(addToStart) {
//     //prepend(str) - получает парметр str - строку и добавляет ее в начало значения поля value
//     this.value = addToStart + this.value;
//     return this.value;
// }
//
// StringBuilder.prototype.pad = function(add) {
//     //pad(str) - получает парметр str - строку и добавляет ее в начало и в конец значения поля value
//     this.value = add + this.value + add;
//     return this.value;
// }
//
// const myString = new StringBuilder('.');
//
// myString.append('^');
// myString.showValue();
//
// myString.prepend('^');
// myString.showValue();
//
// myString.pad('=');
// myString.showValue();
//



// //  //=============(3)


/*
  Создайте класс Car с указанными полями и методами.
*/

// class Car {
//     constructor(maxSpeed) {
//         /*
//           Добавьте свойства:
//             - speed - для отслеживания текущей скорости, изначально 0.
//
//             - maxSpeed - для хранения максимальной скорости
//
//             - running - для отслеживания заведен ли автомобиль,
//               возможные значения true или false. Изначально false.
//
//             - distance - содержит общий киллометраж, изначально с 0
//         */
//     }
//
//     turnOn() {
//         // Добавьте код для того чтобы завести автомобиль
//         // Просто записывает в свойство running значание true
//     }
//
//     turnOff() {
//         // Добавьте код для того чтобы заглушить автомобиль
//         // Просто записывает в свойство running значание false
//     }
//
//     accelerate(spd) {
//         // Записывает в поле speed полученное значение, при условии что
//         // оно не больше чем значение свойства maxSpeed
//     }
//
//     decelerate(spd) {
//         // Записывает в поле speed полученное значение, при условии что
//         // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     }
//
//     drive(hours) {
//         // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//         // но только в том случае если машина заведена!
//     }
// }

/*
  Создайте класс Car с указанными полями и методами.


*/

class Car {
    constructor(maxSpeed) {
        this.speed = 0;              // - speed - для отслеживания текущей скорости, изначально 0.
        this.maxSpeed = maxSpeed;   // - maxSpeed - для хранения максимальной скорости
        this.running = running;     // running - для отслеживания заведен ли автомобиль,
        this.distance = 0;          // distance - содержит общий киллометраж, изначально с 0
    }

    // Добавьте код для того чтобы завести автомобиль
    turnOn() {
        this.running = true; // Просто записывает в свойство running значание true
    }

    // Добавьте код для того чтобы заглушить автомобиль
    turnOff() {
        // Просто записывает в свойство running значание false
        this.running = false;
    }

    accelerate(spd) {
        if(  this.speed <= this.maxSpeed){
            return +speed;
        }

        // Записывает в поле speed полученное значение, при условии что
        // оно не больше чем значение свойства maxSpeed
    }

    decelerate(spd) {
        // Записывает в поле speed полученное значение, при условии что
        // оно не больше чем значение свойства maxSpeed и не меньше нуля
    }

    drive(hours) {
        // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
        // но только в том случае если машина заведена!
    }
}

// --- ответ
//  function Clock(time) {
//    this.time = time;
//  }

//  Clock.prototype.showTime = function() {console.log(`showTime - ${this.time}`)};



//  function Timer(time, interval) {
//    Clock.call(this, time);
//    this.interval = interval;
//  };
//  Timer.prototype = Object.create(Clock.prototype);
//  Timer.prototype.constructor = Timer;

//  Timer.prototype.countTimer = function() {console.log(`countTimer - ${this.interval}`)};


//  const getTimeValue = new Timer(2, 10);

// getTimeValue.showTime();
// getTimeValue.countTimer();

//================(4)

/*
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.

  Использование будет выглядеть следующим образом:

  const someCar = new Car(100);
  someCar.turnOn();
  someCar.drive(2);

  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
*/


// --- ответ
// class Account {

//   constructor (login, email, friendsCount){
//     this.login = login;
//     this.email = email;
//     this.friendsCount = friendsCount;
//   };

//   getAccountInfo(){
//     console.log(`Your account login: ${this.login},
//     email: ${this.email},
//     friendsCount: ${this.friendsCount}`);
//   }
// };

// const ajax = new Account('ajax', 'ajax@x.com', 47);
// ajax.getAccountInfo();

// const valley = new Account('valley', 'valley@vv.ua', 2354);
// valley.getAccountInfo();

// ============================ 5

/*
  Добавьте классу Car свойство value - цена автомобиля.

  Добавьте классу Car использование геттеров и сеттеров для свойства value.

  Геттер вернет текущей значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят

  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value

  Использование выглядит следующим образом:

  const myCar = new Car(50, 2000);

  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000
*/

// class Car {
//     constructor(maxSpeed, value) {
//         // ... код
//         this._value = value;
//     }
//     // ... код
// }


// --- ответ

//
// class Clock {
//     constructor(time){
//         this.time = time;
//     }
//
//     showTime(){
//         console.log(`Time - ${this.time}`);
//     }
//
//     static convertTime(ms){
//         return new Date(ms);
//     }
// };
//
// class Timer extends Clock{
//     constructor(time, interval){
//         super(time);
//         this.interval = interval;
//     };
//
//     countTime(){
//         console.log(`Interval - ${this.interval}`);
//     }
// }
//
// const valueOfTimer = new Timer(232121, 32);
// valueOfTimer.showTime();
// valueOfTimer.countTime();
//
// const valueOfClock = new Clock(123);
// valueOfClock.showTime();
//
// console.log(Clock.convertTime(45453));






// -----====================== HW------------//

// class Hamburger {
//     constructor({size, stuffing}) {
//         this.size = size;
//         this.stuffing = stuffing;
//         this.toppings = [];
//     };
//
//     static SIZE_SMALL = 'SIZE_SMALL';
//     static SIZE_LARGE = 'SIZE_LARGE';
//     static SIZES = {
//         [Hamburger.SIZE_SMALL]: {
//             price: 30,
//             calories: 50,
//         },
//         [Hamburger.SIZE_LARGE]: {
//             price: 50,
//             calories: 100,
//         },
//     };
//
//     static STUFFING_CHEESE = 'STUFFING_CHEESE';
//     static STUFFING_SALAD = 'STUFFING_SALAD';
//     static STUFFING_MEAT = 'STUFFING_MEAT';
//
//     static STUFFINGS = {
//         [Hamburger.STUFFING_CHEESE]: {
//             price: 15,
//             calories: 20,
//         },
//         [Hamburger.STUFFING_SALAD]: {
//             price: 20,
//             calories: 5,
//         },
//         [Hamburger.STUFFING_MEAT]: {
//             price: 35,
//             calories: 15,
//         },
//     };
//
//     static TOPPING_SPICE = 'TOPPING_SPICE';
//     static TOPPING_SAUCE = 'TOPPING_SAUCE';
//
//     static TOPPINGS = {
//         [Hamburger.TOPPING_SPICE]: {
//             price: 10,
//             calories: 0,
//         },
//         [Hamburger.TOPPING_SAUCE]: {
//             price: 15,
//             calories: 5,
//         },
//     };
//
//     addTopping = function (topping) {
//         if (!this.toppings.includes(topping)) {
//             this.toppings.push(topping);
//         }
//     }
//
//     removeTopping = function (topping) {
//         if (this.toppings.length === 0) {
//             return console.log('Nothing remove, first add you topping');
//         }
//
//         this.toppings = this.toppings.filter(key => key !== topping);
//     }
//
//     getToppings = function () {
//         return this.toppings;
//     }
//
//     getSize = function () {
//         return this.size;
//     }
//
//     getStuffing = function () {
//         return this.stuffing;
//     }
//
//     calculatePrice() {
//         let totalPrice = 0;
//         const getTotalToppingsPrice = this.toppings.reduce((acc, value) => acc + Hamburger.TOPPINGS[value].price, 0);
//         totalPrice = Hamburger.SIZES[this.size].price + Hamburger.STUFFINGS[this.stuffing].price + getTotalToppingsPrice;
//
//         return totalPrice;
//     }
//
//     calculateCalories() {
//         let totalCalories = 0;
//         const getTotalToppingsCalories = this.toppings.reduce((acc, value) => acc + Hamburger.TOPPINGS[value].calories, 0);
//         totalCalories = Hamburger.SIZES[this.size].calories + Hamburger.STUFFINGS[this.stuffing].calories + getTotalToppingsCalories;
//
//         return totalCalories;
//     }
// }
//
// const hamburger = new Hamburger({
//     size: Hamburger.SIZE_SMALL,
//     stuffing: Hamburger.STUFFING_CHEESE
// });

// // Добавка из приправы
// hamburger.addTopping(Hamburger.TOPPING_SPICE);
//
// // Спросим сколько там калорий
// console.log("Calories: ", hamburger.calculateCalories());
//
// // Сколько стоит?
// console.log("Price: ", hamburger.calculatePrice());
//
// // Я тут передумал и решил добавить еще соус
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
//
// // А сколько теперь стоит?
// console.log("Price with sauce: ", hamburger.calculatePrice());
//
// // Проверить, большой ли гамбургер?
// console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
//
// // Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SAUCE);
//
// // Смотрим сколько добавок
// console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1
//
// ==== 2

'use strict';
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
    /**
     * @constructor
     * @param {String} size - Размер
     * @param {String} stuffing - Начинка
     */
    constructor(size, stuffing) {
        this._size = size;
        this._stuffing = stuffing;
        this._toppings = [];
    }

    /**
     * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
     * @param {String} topping - Тип добавки
     */
    addTopping(topping) {
        if (!this.toppings.includes(topping)) {
            this.toppings.push(topping);
        } else console.log(`${topping}: Уже есть!`);
    }

    /**
     * Убрать topping, при условии, что она ранее была добавлена
     * @param {String} topping - Тип добавки
     */
    removeTopping(topping) {
        if (this.toppings.includes(topping)) {
            this._toppings = this.toppings.filter(x => x !== topping)
        }
        if (this.toppings.length === 0) {
            console.log('Нечего удалять!')
        }

    }

    /**
     * Получить список toppings
     * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
     */
    get toppings() {
        return this._toppings;
    }

    getToppings() {
        return this._toppings;
    }

    /**
     * Узнать размер гамбургера
     * @returns {String} - размер гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
     */
    get size() {
        return this._size;
    }

    getSize() {
        return this.size;
    }


    /**
     * Узнать начинку гамбургера
     * @returns {String} - начинка гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
     */
    get stuffing() {
        return this._stuffing;
    }

    getStuffing() {
        return this.stuffing;
    }

    /**
     * Узнать цену гамбургера
     * @returns {Number} - Цена в деньгах
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
     */
    calculatePrice() {
        let sumPrice = 0;
        let priceToppings = this.toppings
            .reduce((acc, topping) => acc + Hamburger.TOPPINGS[topping].price, 0);
        sumPrice = priceToppings
            + Hamburger.SIZES[this.size].price
            + Hamburger.STUFFINGS[this.stuffing].price;
        return sumPrice;
    }

    /**
     * Узнать калорийность
     * @returns {Number} - Калорийность в калориях
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
     */
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

/*
  Размеры, виды добавок и начинок объявите как статические поля класса.
  Добавьте отсутсвующие поля по аналогии с примером.
*/
Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
        price: 30,
        calories: 50,
    },

    [Hamburger.SIZE_LARGE]: {
        price: 50,
        calories: 100,
    },
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
        price: 15,
        calories: 20,
    },
    [Hamburger.STUFFING_SALAD]: {
        price: 20,
        calories: 5,
    },
    [Hamburger.STUFFING_MEAT]: {
        price: 35,
        calories: 15,
    },
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
        price: 10,
        calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]: {
        price: 15,
        calories: 5,
    },
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


// 🔔 Обратите внимание на такие моменты:
//   	✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается
//   		другой код, а класс живет в изоляции от мира
//   	✔️ обязательные параметры (размер и начинка) мы передаем через конструктор,
// 	чтобы нельзя было создать объект, не указав их
//   	✔️ необязательные (добавка) добавляем через методы
//   	✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто
//     	свойствами, написанным заглавными буквами, которые мы договорились считать "константами")
//   	✔️ объект создается через конструктор - функцию, которая задает начальные значения полей.
//   	✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
//     		а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории
// 	логично в тот момент, когда это потребуется, а не заранее.