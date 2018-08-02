'use strict'


/*
  Создайте скрипт кассира, который получает список продуктов и деньги,
  подсчитывает общую стоимость продуктов, и в зависимости от того хватает
  денег или нет, уведомляет покупателя о результате.
*/

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
};

function Cashier(name, productDatabase) {
    this.name = name;
    this.productDatabase = productDatabase;
    this.customerMoney = 0;


    //метод, получает число, деньги покупателя, и записывает его в поле customerMoney.
    this.getCustomerMoney = function(value){
        this.customerMoney = value;
        return `Ваша сумма ${value}`;
    };

    // метод, получает объект списока покупок, считает общую стоимость покупок.
    this.countTotalPrice = (order) =>{
                                // productDatabase ?
        let  total = 0;
        for(let price of order){
        total += price;
    }
    //метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
    this.countChange = (totalPrice) => {
            if(customerMoney > totalPrice){
                let change = customerMoney - totalPrice;
            }return null
    };

    this.onSuccess = (change)=> {
        return `Спасибо за покупку, ваша сдача ${change}!`;
    };
    this.onError=()=> {
        if (customerMoney < totalPrice) return 'Очень жаль, вам не хватает денег на покупки';
    };
    this.reset = function(){
        console.log(`after reset - totalPrice = ${this.totalPrice}, customerMoney = ${this.customerMoney}, changeAmount = ${this.changeAmount}`); // 0, 0, 0
        return result;
    }
};
const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
};

/* Пример использования */
const mango = new Cashier('Mango', products);

// Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);

// Проверям что посчитали
console.log(totalPrice); // 110

// Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney(300);

// Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
const change = mango.countChange();

// Проверяем что нам вернул countChange
console.log(change); // 190


if(change !== null) { mango.onSuccess(change);
} else { mango.onError();}
mango.reset();
console.log(mango.customerMoney);