'use strict'
//============================= 1
/*
  Напишите скрипт, который, для объекта user, последовательно:

    - добавляет поле mood со значением 'happy'
    - заменяет значение hobby на 'javascript'
    - удаляет свойство premium

    - выводит содержимое объекта user в формате ключ:значение используя цикл for...in
    - выводит содержимое объекта user в формате ключ:значение используя Object.keys и for...of
     - выводит содержимое объекта user в формате ключ:значение используя Object.entries и for...of
*/


//  const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
// };
// user.mood = "happy";
// user.hobby = "javascript";
// delete user.premium;


// for (let key in user) {
//     console.log( key, user[key]);
// }

// const keys = Object.keys(user);
// for (let key of keys) {
//     console.log( key, user[key]);
// }
//

// const entries = Object.entries(user);
// for (let entry of entries) {
//     console.log(entry[0],entry[1]);
// }

//============================= 2

/*
  Напиште скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//     Ann: 29,
//     David: 35,
//     Helen: 1,
//     Lorence: 99
// };
//
// const people = Object.keys(tasksCompleted);
//
// let maxTasks = tasksCompleted[people [0]];
//
//  let message;
//
// for (let i = 1; i<people.length; ++i) {
//
//     if (tasksCompleted[people[i]] > maxTasks ) {
//         maxTasks = tasksCompleted[people[i]];
//        message = `${people[i]} : ${maxTasks}`
//     }
// }
// console.log(`Больше всех выполненых задач у ${message} `);

//============================= 3
/*
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/
// const countProps = (obj) => (typeof obj === "object") ? Object.keys(obj).length : 0;
//
// // Вызовы функции для проверки
// console.log(countProps({}));    // 0
// console.log(countProps({ a: 1, b: 3, c: "hello" }));    // 3
// console.log(countProps("hello"));   // 0
//


//============================= 4
/*
  Создайте функцию isObjectEmpty(obj), которая получает
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).

  Возвращает true если объект пустой, false если не пустой.
*/

// function  isObjectEmpty (obj) {
//     if (!Object.keys(obj).length) return true;
//     if (Object.keys(obj).length) return false;
// }
// // Вызовы функции для проверки
//
// console.log(isObjectEmpty({})); // true
// console.log(isObjectEmpty({ a: 1 })); // false
// console.log(isObjectEmpty({ a: 1, b: 2 })); // false


//============================= 5

/*
Напишите функцию countTotalSalary(salaries), получающую объект и считающую общую сумму запрплаты работников.
Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
Функция возвращает общую сумму зарплаты.
*/

// const workers = {
//     mango: 100,
//     poly: 150,
//     alfred: 80
// };
//
// const countTotalSalary = (salaries) => {
//     const salaryValues = Object.values(salaries);
//
//     let total = 0;
//     for (let val of salaryValues) {
//         total += val;
//     }
//     return total;
// };
//
// // Вызовы функции для проверки
// console.log(countTotalSalary({})); // 0
// console.log(countTotalSalary(workers)); // 330
//
//


//============================= 6
/*
    Напишите функцию getAllPropValues(arr, prop),
    которая получает массив объектов и имя ключа,
    возвращает массив значений определенного
     поля prop из каждого объекта в массиве
*/

// const users = [
//     { name: "Poly", age: 7, mood: "happy" },
//     { name: "Mango", age: 4, mood: "blissful" },
//     { name: "Ajax", age: 3, mood: "tired" }
// ];
//
// const getAllPropValues = (arr, prop) => {
//     const arrValues = [];
//     for (let obj of arr) {
//
//         if (obj.hasOwnProperty(prop)) {
//             arrValues.push(obj[prop]);
//         }
//     }
//     return arrValues;
// };
// // Вызовы функции для проверки
// console.log(getAllPropValues(users, "name")); // ['Poly', 'Mango', 'Ajax']
// console.log(getAllPropValues(users, "mood")); // ['happy', 'blissful', 'tired']
// console.log(getAllPropValues(users, "active")); // []


//============================= 7

/*
Напишите код, который бы  с помощью функции-конструкора User, позволял создавать объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)
Имя, активность, возраст и друзей, необходимо передать как аргументы при вызове конструктора.
Добавить метод getUserInfo(), которая, выводит строку: `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
Создать несколько объектов пользователя User и с помощью функции getUserInfo вывести строку в консоль.
*/


// function User(name, isActive, age, friends) {
//
//     this.name = name;
//     this.isActive = isActive;
//     this.age = age;
//     this.friends = friends;
// }
// const getUserInfo = function() {
//     console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`);
//     return this.isActive;
// };
// const jon = new User("Jony Depp", true, 45, 397);
// const tramp = new User("Donald Tramp", true, 67, 3);
// const friend = new User("Best Friend", true, 33, 33333);
//
// getUserInfo.call(jon);
// getUserInfo.call(tramp);
// getUserInfo.call(friend);



//============================= 8

/*
Расставьте отсутствующие this в методах объекта store
*/


//
// const store = {
//
//     products: ['bread', 'cheese', 'milk', 'apples'],
//     managers: ['poly', 'mango', 'ajax'],
//
//     addManager(manager) {
//         this.managers.push(manager);
//         console.log(this.managers);
//     },
//
//     removeManager(manager) {
//         const idx = this.managers.indexOf(manager);
//         this.managers.splice(idx, 1);
//         console.log(this.managers);
//     },
//
//     getProducts() {
//         console.log(this.products);
//         return this.products;
//     }
// };
// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']
// store.removeManager('mango'); // ['poly', ajax', 'chelsey']
// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']
//======================9
/*
Расставьте отсутствующие this в конструкторе объектов Account
*/

//
// function Account({ login, password, type = "regular" }) {
//     this.login = login;
//     this.password = password;
//     this.type = type;
//
//     this.changePassword = function(newPassword) {
//         this.password = newPassword;
//         return `new password: "${this.password}"`;
//     };
//     this.getAccountInfo = function() {
//         return `user has Login: "${this.login}", Pass: "${this.password}", Type: "${this.type}"`;
//     };
// }
//
// const account = new Account({
//     login: "Mango",
//     password: "qwe123",
//     type: "premium"
// });
//
// console.log(account.login);     // 'Mango'
// console.log(account.password);   // 'qwe123'
// console.log(account.type);  // 'premium'
// console.log(account.changePassword("asdzxc"));  // 'asdzxc'
// console.log(account.getAccountInfo());  // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
//


//+============================== hw

/*
  Создайте скрипт кассира, который получает список продуктов и деньги,
  подсчитывает общую стоимость продуктов, и в зависимости от того хватает
  денег или нет, уведомляет покупателя о результате.
*/

/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */
// const products = {
//     bread: 10,
//     milk: 15,
//     apples: 20,
//     chicken: 50,
//     cheese: 40,
// };
//
// function Cashier(name){
//     this.nameCachier ;
//     productsDatabase{ //  productsDatabase - объект база данных продуктов, передается при вызове конструктора
//
//     },
//
//     totalPrice = 0;
//     customerMoney = 0;
//     changeAmount = 0;
//
//     Success({
//         greet : `Здравствуйте, вас обслуживает ${nameCachier}`
//
//     }),
//     onSuccess({
//         greet: `Спасибо за покупку, ваша сдача ${сдача}`
//     }),
//     onError({
//         shopingErrow :'Очень жаль, вам не хватает денег на покупки'
//     }),
//     countTotalPrice(order)({
//         productsDatabase + totalPrice;
//     }),
//     getCustomerMoney(value){
//         customerMoney += customerMoney
//
//     },
//     countChange()= (changeAmount) =>
// };
//
//
// /*
//     - countChange() - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя,
//         записывает результат в поле changeAmount.
//         * Обязательно проверьте что customerMoney не меньше чем значение поля totalPrice
//         * Если денег было передано достаточно, возвращает текущее значение changeAmount
//         * Если было передано меньше денег чем в поле totalPrice, возвращает null
//
//     - reset() - метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.
// */
//
// function Cashier(name, productsDatabase) {
//     // 🔔 не забывайте о this при обращении к свойствам и методам будущего объекта
// }
//
// /* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
// const order = {
//     bread: 2,
//     milk: 2,
//     apples: 1,
//     cheese: 1
// };
//
// /* Пример использования */
// const mango = new Cashier('Mango', products);
//
// // Проверяем исходные значения полей
// console.log(mango.name); // Mango
// console.log(mango.productsDatabase); // ссылка на базу данных продуктов (объект products)
// console.log(mango.totalPrice); // 0
// console.log(mango.customerMoney); // 0
// console.log(mango.changeAmount); // 0
//
// // Вызываем метод greet
// mango.greet(); // Здравствуйте, вас обслуживает Mango
//
// // Вызываем метод countTotalPrice для подсчета общей суммы
// // передавая order - список покупок пользователя
// mango.countTotalPrice(order);
//
// // Проверям что посчитали
// console.log(mango.totalPrice); // 110
//
// // Вызываем getCustomerMoney для запроса денег покупателя
// mango.getCustomerMoney(300);
//
// // Проверяем что в поле с деньгами пользователя
// console.log(mango.customerMoney); // 300
//
// // Вызываем countChange для подсчета сдачи
// const result = mango.countChange();
//
// // Проверяем что нам вернул countChange
// console.log(result); // 190
//
// // Проверяем результат подсчета денег
// if(result !== null) {
//     // При успешном обслуживании вызываем метод onSuccess
//     mango.onSuccess(); // Спасибо за покупку, ваша сдача 190
// } else {
//     // При неудачном обслуживании вызываем метод onError
//     mango.onError(); // Очень жаль, вам не хватает денег на покупки
// }
//
// // Вызываем reset при любом исходе обслуживания
// mango.reset();
//
// // Проверяем значения полей после reset
// console.log(mango.totalPrice); // 0
// console.log(mango.customerMoney); // 0
// console.log(mango.changeAmount); // 0







