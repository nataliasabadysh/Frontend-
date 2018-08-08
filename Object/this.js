'use strict';

// ================================THIS
// Что бы не зависить от имени обьектов внутри ставим tHsi

// const user = {
//     name:'Alex',
//     age: 2,
//
// };
// const x ="name";
// const value = user[x];
// console.log(value);
//================================= this
// const grandParent = {
//     parent : {
//         method : function () {
//             return this === grandParent.parent;
//
//         }
//     }
// };
// grandParent.parent.method(); // true

// // ================================ bind
//// перезаписываем this обьект внутри на постоянно
// const n ='n in window';
//
// function foo() {
//     return this.n;
// }
// const obj = {
//     n:'n in obj'
// };
// //Меняем указатель this с обьекта на обьект obj
// const bindDedFoo = foo.bind(obj); // foo перезаписали obj
//
// console.log(bindDedFoo());        //n in obj

// ================================ bind

// null === window  - это признанная ощибка
//
// function setLocalTime(time, local){
//     return time + local;
// }
// const getLocalTime = setLocalTime.bind(null, 2);
// console.log(getLocalTime(10));  // 12

// ================================  apply & call
// одноразово перезаписываем this

// let n = 'n in window';
// function foo() {
//     return this.n;
// }
// const obj = {
//     n:'n in obj'
// };
// // console.log(foo.call(obj)); // n in obj
// // console.log(foo.apply(obj));// n in obj
//

// ================================  apply
// const  arr = [10, 20, 30, 40];
// const max = function (array) {
//     return Math.max.apply(Math, array)
// };
// console.log(max(arr));// 40


// ================================  this

// const petya = {
//     name: 'Petya',
//     showThis() {
//         console.log(this);
//     },
//     showName() {
//         console.log(this.name);
//     },
// };
//
// petya.showThis(); // {name: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'
//==

// function fn() {
//     console.log(this);
// }
//fn(); // window без "use strict" и udefined с "use strict"

//====

// function showName() {
//     console.log('this in showName: ', this);
//     console.log("this.name: ", this.name);
// }
// showName();
// const user = { name: "Mango" };
// user.show = showName;
// user.show();


//==========
// this в стрелках

// const fn = () => {
//   console.log('this: ', this );
// }

// fn();

// const obj = {
//   name: 'alex'
// };

// obj.x = fn;

// console.log(obj.x);

// obj.x();

//=======================

// const hotel = {
//   name: 'hello',
//   showThis() {
//     console.log('this in showThis: ', this);

//     const fn = () => {
//       console.log('this in fn: ', this);
//     };

//     console.log(fn());
//   },
// };

// hotel.showThis(); // {showThis: ƒ}

//===========  callback
// this в callback
// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//    // console.log(this.name);  // undefined
//   },
// };
// // use this - передаем как фун-ю обратного вызова
//
// const fn = function(callback) {
//   console.log('this в fn:', this);      // this в fn: { name: "Resort Hotel",   showThis: ƒ,    newFn: ƒ}
//   console.log('callback: ', callback);  // callback:  ƒ showThis() {console.log(this); }
//   callback();
// };
//
// hotel.newFn = fn;
// hotel.newFn(hotel.showThis);

//===================

// const showName = function(arr) {
//   console.log('this.name: ', this.name);
//   console.log('arr:', arr);
// };

// const userA = {
//   name: 'userA qweqwe',
// };

// const userB = {
//   name: 'userB qeqwe',
// };

// const array = [1, 2, 3, 4, 5];

// showName.call(userA, [1, 2, 3, 4, 5]);
// showName.apply(userB, [1, 2, 3, 4, 5]);

// const boundShowName = showName.bind(userB, [1, 2, 3, 4, 5]);
// boundShowName();
// ====================== arrow function

// const hotel = {
//     name: 'Resort Hotel',
//     showThis() {
//         console.log('this в showThis: ', this);   //this в showThis:  Object
//         //this вложенная в this - берет на уровень выше
//         const fn =() => {
//             console.log('this в fn:', this);  // this в fn: Object
//         };
//         console.log( fn() );  // Вызвали фун-ю
//     },
// };
//
// hotel.showThis();

//============================ callback
// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log('this в showThis: ', this);
//   },
// };
//
// const fn = function(callback) {
//   console.log('this в fn:', this);
//
//   callback('gi');
// };
//
// const boundShowThis = hotel.showThis.bind(hotel);
//
// fn(boundShowThis);
//
// hotel.showThis();

//=================
// const user = {
//   name: 'Alex',
//   age: 20,
//   isActive: true,
// };

// function User({
//   friendsCount = 0,
//   name = 'user',
//   isActive = false,
//   age = 18,
//   isAdmin = false,
// }) {
//   const message = 'Hello';

//   this.name = name;
//   this.age = age;
//   this.isActive = isActive;
//   this.friendsCount = friendsCount;

//   this.showName = function() {
//     console.log(message + ' ' + this.name);
//   };

//   this.addAge = function(val) {
//     this.age += val;
//   };
// }
// // name, age, isActive, friendsCount
// // const mango = new User('Mango', 2, true, 10);
// // const poly = new User('Poly', 3, false, 20);

// const mango = new User({
//   friendsCount: 10,
//   name: 'Mango',
//   isActive: true,
//   age: 2,
//   isAdmin: true,
// });

// console.log(mango);
// mango.showName();
// mango.addAge(50);

// const poly = new User({
//   friendsCount: 20,
//   name: 'Poly',
//   age: 3,
// });

// console.log(poly);
// poly.showName();
//====================== This

const user = {  name: "maogo",  };
const poly = {  name: "Poly",  };


function showName() { // showName() = undefind - вызвана без контекста- что за name от куда он пришел? this
    console.log(this.name); // this = user
}

user.show = showName;
user.showName();// Mongo

poly.show = showName;
poly.showName();// Poly


//================= Shop + manegers
// +   Конструктор
// --Добавим Деструктиризацию


function Shop({ products = [], managers = [] }) {
    this.products = products;
    this.managers = managers;

    this.addManager = function(params) {
        const manager = new Manager(params);

        this.managers.push(manager);
    };

    this.makeSale = function(managerName, productName) {
        for (const manager of this.managers) {
            if (manager.name === managerName) {
                manager.sell(productName, this.products);
            }
        }
    };

    this.addProduct = function(product) {
        this.products.push(product);
    };

    this.findProduct = function(productName) {
        for (const elem of this.products) {
            if (elem.name === productName) {
                return elem;
            }
        }
    };

    this.addProductAmount = function(productName, num) {
        console.log(`Adding ${num} ${productName}`);

        const product = this.findProduct(productName);
        product.amount += num;
    };

    this.subtractProductAmount = function(productName, num) {
        console.log(`Selling ${num} ${productName}`);

        const product = this.findProduct(productName);
        product.amount -= num;
    };

    this.getAllProducts = function() {
        return this.products;
    };
}

function Manager({ name = 'manager', salesCount = 0 }) {
    this.name = name;
    this.salesCount = salesCount;

    this.sell = function(productName, products) {
        console.log('inside Manager.sell, productName: ', productName);
        console.log('inside Manager.sell, products: ', products);

        console.log(`Selling ${productName}`);

        this.salesCount += 1;
    };
}

const products = [
    { name: 'apples', amount: 100, price: 30 },
    { name: 'grapes', amount: 150, price: 40 },
    { name: 'bananas', amount: 200, price: 50 },
];

const shopA = new Shop({
    products: products,
});

shopA.addManager({
    name: 'Mango',
    salesCount: 10,
});

shopA.addManager({
    name: 'Poly',
    salesCount: 20,
});

shopA.makeSale('Mango', 'apples');