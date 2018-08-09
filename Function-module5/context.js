'use strict'

// ===================================== this
const makeSale = function(product) {             // Очень важно здесь что бы они НЕ была стрелочной здесь

    console.log('this: ', this);                // this:  {name: "Mango", sales: 20, sell: ƒ}

    console.log(`${this.name} sold ${product}`);// Mango sold apples
    this.sales += 1;
};

const mango = { name: 'Mango', sales: 20,};

mango.sell = makeSale;      // делаем свойство Сел - значение фун-я

mango.sell('apples');

console.log(mango);         //+1  name: "Mango", sales: 21, sell: ƒ}

const poly = { name: 'Poly', sales: 0,};
poly.sell = makeSale;
poly.sell('grapes'); // Во время вызова эта фун-я получает контекст
console.log(poly);

// =====================================  this  + callback

const user = {
  name: 'Mango',
  showName() {


    console.log('this: ', this); // this = user.showName

      //this:  undefined - высчитываеться когда мы ее вызываем
  },
};

const log = function(callback) {
  callback(); //  вызов фун-и

// user.callback тогда бы мы юы полуили что то
};

log(user.showName);  //this:  undefined

//==================================================


// Function

const makeSale = function(product, price) {
  console.log('this: ', this);
  console.log(`${this.name} sold ${product}, price ${price}`);
  this.sales += 1;
};

// Users
const mango = {  name: 'Mango', sales: 0, };
const poly = { name: 'Poly', sales: 0, };



// Методы call и apply на месте вызывают фун-ю
// Fun это - obj и она принемает методы

// вызываем фун-ю makeSale  и передаем ей  обьект с name:'Mongo'  product:'beef' price:50   sales: 0
makeSale.call(mango, 'beef', 50);
console.log(mango);


// mango- в контексте этого обьекта необходимо вызвать этот вся фун-я -  makeSale
// beef - args
// вызываем фун-ю makeSale  и передаем ей  обьект с name:'Mongo'  product:'grapes' price:20   sales: 0
makeSale.apply(mango, ['grapes', 20]);
console.log(mango);


makeSale.call(poly, 'apples');  // принемает 2 арг
console.log(poly);

// Создает новую boundMakeSale ф-ю с Навсегда привязать контекст к какому-то методу
const boundMakeSale = makeSale.bind(mango);
boundMakeSale('apples', 10);
// теперь this всегда ссылаеться на манго mango

// =====================================  this  + callback  + bind

const user = {
  name: 'Mango',
  showName() {
    console.log('this: ', this);
  },
};
const log = function(callback) {
  callback();
};

// Мы передаем не саму user.showName а копию с привязанным контекстом навсегда привязанным к user
log(user.showName.bind(user));

// ===================================

/**
 * 1. Оператор new создает пустой объект (место в памяти)
 * 2. Оператор new взывает функцию-конструктор в контексте этого объекта
 */

function Manager({ name, age, gender }) {
    // this = {}

    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sales = 0;

    this.sell = function(product, price) {
        // console.log('this: ', this);
        console.log(`${this.name} sold ${product}, price ${price}`);
        this.sales += 1;
    };

    // return this
}

const mango = new Manager({
    name: 'Mango',
    age: 3,
    gender: 'male',
});
console.log(mango);

mango.sell('grapes', 20);
console.log(mango);

const poly = new Manager({
    name: 'Poly',
    age: 2,
    gender: 'female',
});
console.log(poly);

poly.sell('apples', 30);
console.log(poly);