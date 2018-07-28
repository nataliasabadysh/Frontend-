//============================= 1

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
// };
// // add, change, delete;
// user.mood = "happy";
// user.mood = "javascript";
// delete user.premium;
// console.log(user);
//
// // for in
// for (let key in user) {
//     console.log(`for (let key in user) - ${key}:${user[key]}`);
// }
//
// // for of
// for (let key of keys) {
//     console.log(`for (let key of keys) - ${key}:${user[key]}`);
// }
//
// // Object.keys                  /// --- ?   Не получилось
// const keys = Object.keys(user);
// console.log(keys);
//
// // Object.entries
// const entries = Object.entries(user);
// console.log(entries);
// for (let entry of entries) {
//     console.log(`for (let entry of entries) - ${entry[0]}:${entry[1]}`);
// }
//============================= 2

//============================= 3

//============================= 4

//============================= 5

//============================= 6

//============================= 7

//============================= 8

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