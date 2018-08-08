'use strict'

//=========   Array.filter
// Может искать какие- то эл по критерию  в колекции


const numbers = [1, 2, 4, 5, 8, 9, 10];
const filtered = numbers.filter(number => number < 3);      // callbeck  -  number => number < 3
console.log(filtered);                                       // (2) [1, 2]



//=========   Filter - руками

const number = [1, 2, 4, 5, 8, 9, 10];

// Вызываем filter и передаем
function filter(arr, callback) {

    const newArray  = [];

    for (let i = 0; i < arr.length; i +=1 ){

        const passes = callback(arr[i]);


        //- Проветка наших чисел
        if(passes){  // passes true ot false
            newArray.push(arr[i]); //true-  тогда записиваем в масиив
        }
    }
    return newArray;
}
console.log(number); // [1, 2, 4, 5, 8, 9, 10];

// передаем в функцию агумент (arr=number, callback= val => val > 3)
const result = filter(number, val => val > 3 );// !!!   filter запишет только те эл которые проходят проверку val > 3

console.log(result);  // (5) [4, 5, 8, 9, 10]

//=======================  filter

const guests = [
    { name: 'Manngo', age: 21, isActive: true },
    { name: 'Poly', age: 2, isActive: false },
    { name: 'Ajax', age: 1, isActive: true },
];
// по возрасту
const filtered = guests.filter(guest => guest.age > 2);
console.log(filtered);   // [ { name: 'Manngo', age: 21,} ]

// активные
const activeGuest = guests.filter(guest => guest.isActive);
console.log(activeGuest); // [ 0:{name: "Manngo",.., isActive: true}   1:{name: "Ajax",.., isActive: true}]

// не активние
const inActiveGuest = guests.filter(guest => !guest.isActive);
console.log(inActiveGuest); // [ 0:  { name: 'Poly', age: 2, isActive: false } ]


//  callbeck -  вернет true fasle
// filter(guest => guest.isActive === true);  === true  Cравнивать не нужен
