'use strict'


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




//
//
// //  HOMEWORK
//
// // /*
// //   Создайте скрипт кассира, который получает список продуктов и деньги,
// //   подсчитывает общую стоимость продуктов, и в зависимости от того хватает
// //   денег или нет, уведомляет покупателя о результате.
// // */
// //
// // const products = { bread: 10,  milk: 15, apples: 20, chicken: 50, cheese: 40, };
// //
// // function Cashier(name, productDatabase) {
// //     this.name = name;
// //     this.productDatabase = productDatabase;
// //
// //     this.customerMoney = 0;
// //     this.getCustomerMoney = 0;
// //     this.countTotalPrice = 0;
// //
// //
// //     //метод, получает число, деньги покупателя, и записывает его в поле customerMoney.
// //     this.getCustomerMoney = function(value){
// //         this.customerMoney = value;
// //         return `Ваша сумма ${value}`;
// //     };
// //
// //     // метод, получает объект списока покупок, считает общую стоимость покупок.
// //     this.countTotalPrice = (order) =>{
// //         // productDatabase ?
// //         let  total = 0;
// //         for(let price of order){
// //             total += price;
// //         }
// //         //метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
// //         this.countChange = (totalPrice) => {
// //             if(customerMoney > totalPrice){
// //                 let change = customerMoney - totalPrice;
// //             }return null
// //         };
// //
// //         this.onSuccess = (change)=> {
// //             return `Спасибо за покупку, ваша сдача ${change}!`;
// //         };
// //         this.onError=()=> {
// //             if (customerMoney < totalPrice) return 'Очень жаль, вам не хватает денег на покупки';
// //         };
// //         this.reset = function(){
// //             console.log(`after reset - totalPrice = ${this.totalPrice}, customerMoney = ${this.customerMoney}, changeAmount = ${this.changeAmount}`); // 0, 0, 0
// //             return result;
// //         }
// //     };
// //     const order = {
// //         bread: 2,
// //         milk: 2,
// //         apples: 1,
// //         cheese: 1
// //     };
// //
// //     /* Пример использования */
// //     const mango = new Cashier('Mango', products);
// //
// // // Проверяем исходные значения полей
// //     console.log(mango.name); // Mango
// //     console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
// //     console.log(mango.customerMoney); // 0
// //
// // // Вызываем метод countTotalPrice для подсчета общей суммы
// // // передавая order - список покупок пользователя
// //     const totalPrice = mango.countTotalPrice(order);
// //
// // // Проверям что посчитали
// //     console.log(totalPrice); // 110
// //
// // // Вызываем getCustomerMoney для запроса денег покупателя
// //     mango.getCustomerMoney(300);
// //
// // // Проверяем что в поле с деньгами пользователя
// //     console.log(mango.customerMoney); // 300
// //
// // // Вызываем countChange для подсчета сдачи
// //     const change = mango.countChange();
// //
// // // Проверяем что нам вернул countChange
// //     console.log(change); // 190
// //
// //
// //     if(change !== null) { mango.onSuccess(change);
// //     } else { mango.onError();}
// //     mango.reset();
// //     console.log(mango.customerMoney);'use strict'
// //
// //
// //     /*
// //       Создайте скрипт кассира, который получает список продуктов и деньги,
// //       подсчитывает общую стоимость продуктов, и в зависимости от того хватает
// //       денег или нет, уведомляет покупателя о результате.
// //     */
//
//     const products = {
//         bread: 10,
//         milk: 15,
//         apples: 20,
//         chicken: 50,
//         cheese: 40,
//     };
//     function Cashier({name = 'cashier s Name', productDatabase = 0}) {
//
//         this.name = name;
//         this.productDatabase = productDatabase;
//
//         // this.customerMoney = 0;
//         // this.countChange = 0;
//
//         this.countTotalPrice = function(order) {
//             const orderAll= Object.entries(order);
//             for (let elem of orderAll) {
//                 this.totalPrice += productsDatabase[elem[0]] * order[elem[0]];
//             }
//         };
//
//         this.countChange = function() {
//             if (this.customerMoney >= this.totalPrice) {
//                 return (this.changeAmount = this.customerMoney - this.totalPrice)
//             } else {
//                 return null;
//             }
//         };
//
//         this.onSuccess = function() {
//             this.changeAmount > 0 ?
//                 console.log(`Спасибо за покупку, ваша сдача ${this.changeAmount}`) : console.log(`Спасибо за покупку`);
//         };
//
//         this.onError = function() {console.log("Очень жаль, вам не хватает денег на покупки");};
//
//         this.reset = function(){console.log(`after reset - totalPrice = ${this.totalPrice}, customerMoney = ${this.customerMoney}, changeAmount = ${this.changeAmount}`); // 0, 0, 0
//             return result;}
//         };
//         const order = {
//             bread: 2,
//             milk: 2,
//             apples: 1,
//             cheese: 1
//         };
//
//         /* Пример использования */
//
//         const mango = new Cashier({name : 'Mongo', productDatabase: this.products});
//
//
//
// // Проверяем исходные значения полей
//         console.log(mango.name); // Mango
//         console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
//         console.log(mango.customerMoney);  // 0
//
// // Вызываем метод countTotalPrice для подсчета общей суммы
// // передавая order - список покупок пользователя
//
//         const totalPrice = mango.countTotalPrice(order);
//
// // Проверям что посчитали
//         console.log(totalPrice); // 110
//
// // Вызываем getCustomerMoney для запроса денег покупателя
//         mango.getCustomerMoney(300);
//
// // Проверяем что в поле с деньгами пользователя
//         console.log(mango.customerMoney); // 300
//
// // Вызываем countChange для подсчета сдачи
//         const change = mango.countChange();
//
// // Проверяем что нам вернул countChange
//         console.log(change); // 190
//
//
//         if(change !== null) { mango.onSuccess(change);
//         } else { mango.onError();}
//         mango.reset();
//         console.log(mango.customerMoney);