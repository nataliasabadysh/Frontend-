'use strict'

//=== Array.map

console.log([1, 2, 3, 4, 5] .map( x => x * 5 ));  // 5) [5, 10, 15, 20, 25]

// массив - [1, 2, 3, 4, 5]
// на этом массиве вызываем метод .map
// методу .map мы передаем функцию   которая получает один параметр х

// .map внутри себя Циклом переберает наш массив , создает новый пустой ,
// для каждого элемента массива о
// н вызывает функцию возврашает результат с новым масиивом
// -- И так же оригинальный массив не изменяеться !

//// == Разберем вречную как работает map

function map(arr) {
   const newArr = [];
    for (let i = 0; i < arr.length; i++){
        const elem = arr[i];
        newArr.push(elem *2);
    }
    return newArr;
}
const numbers  = [1, 2, 3, 4];
const result  = map(numbers);

console.log('numbers', numbers); // numbers (4) [1, 2, 3, 4]
console.log('result', result); // result (4) [2, 4, 6, 8]


// что бы поменять на деление нам нужно менять всю логуку ,
// Или нас спасет здеьсь ---- >   callback

// 3 + callback
function map(arr, callback) {
    // callback -фун-я -  второй аргумент

    const newArr = [];
    console.log(callback);

    // val => val * 2 это  callback-1
    // val => val + 5  это  callback-2

    for (let i = 0; i < arr.length; i++){
        const elem = arr[i];

        //// ======callback(elem) - получает (elem, index, array)

        const results = callback(elem);  //  Для каждого эл вызвать его для каждого эл массива
                                         // results передает вторым агр ы функции
        newArr.push(results);           // results - запишим в новый массив
    }
    return newArr;                      // new array
}
const numbers  = [1, 2, 3, 4];

const double = val => val * 2;            //записывается в -  callback
const result  = map(numbers, double);   // MAP делает пустой массив

console.log('numbers', numbers);        // numbers (4) [1, 2, 3, 4]
console.log('result', result);          // result (4) [2, 4, 6, 8]


// Теперь эсли нам нужно изментить функцию добавлять значения а не умножать то

const addFive = val => val + 5;        // callback
const resultB  = map(numbers, addFive); // MAP

// MAP - для каждого эл массива она будет вызвала и к каждому она будет + 5 и запишетося в новый массив

console.log('numbers', numbers);         // numbers (4) [1, 2, 3, 4]- исходный массив
console.log('result', resultB);          // result (4) [6, 7, 8, 9]  - наш callback

//================ callbac-  передача дополнительных параметров - callbac (elem, index, array )

// Получает аткие данные : само значение,  текуштй индекс ,сыылку на весь массив

console.log(
    [1, 2, 3, 4, 5] .map( x => x * 5 )
);
// (5) [5, 10, 15, 20, 25]

// [1, 2, 3, 4, 5] - исходный массив  arr
// map - function map -создает пустой масиив , переберает каждый эл , передает в  callback и возвращает его
// ( x => x * 5 ) - callback


//========== map  Массив + Обьект

// Работает также просто каждый эл  у нас Обьект

const guests = [
    { name: 'Manngo', age: 26, },
    { name: 'Poly', age: 23, },
    { name: 'Ajax', age: 2, },
];

const results = guests.map(guest => { // calback function guest -

    // console.log(guest);            // { name: 'Manngo', age: 26, },{ name: 'Poly', age: 23, }, ...
    if(guest.name === 'Manngo'){      // найдем по имени гостя

        return{                        // Это вернет новый элемент - Обьктр на базе предедушего
            ...guest,                 // Распелит все эл которые есть
            age: guest.age +1,         // Если нашли Имя  то +1
        };
    }
    return guest;                      //А если Не нашли !Mango
});
//{name: "Manngo", age: 27}
console.log(results);

// guests по умолчанию return undefined   - (3) [undefined, undefined, undefined] -

