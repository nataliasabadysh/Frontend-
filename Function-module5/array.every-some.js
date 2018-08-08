'use strct'

// ===============  Array.every
// если хотябы один из колекции false   every вернет false

// // 1
const numbers = [1, 2, 3, 4,5, 6,7];

const result = numbers.every(number => number > 3);//number > 3 == true/false
console.log(result);
// //fasle

// // 2
const number = [10, 20, 30, 4, 5, 6,7];

const result2 = number.every(number => number > 3); //number > 3 == true/false
console.log(result2);  // true

// ===============  Array.some / Array.every

const numbers = [1, 2, 3, 4, 5, 6,7];
const result = numbers.some(number => number > 3);
const resultEv = numbers.every(number => number > 3);

console.log('Array.some:', result);  //  Array.some: true
console.log('Array.every:', resultEv);  // Array.every: false

// ===============  Array.some / Array.every

const numbers = [1, 2, 3, 4, 5, 6,7];
const result = numbers.some(number => number > 3);
const resultEv = numbers.every(number => number > 3);

console.log('Array.some:', result);  //  Array.some: true
console.log('Array.every:', resultEv);  // Array.every: false



// ===============  Array.some  /  Array.every

const guests = [
    { name: 'Mongo', active: true  },
    { name: 'Poly', active: false  },
    { name: 'Ajax', active: true  },
];
const resultes = guests.every(guest => guest.active);
console.log('Every :', resultes); // Every : false

const resultesSome = guests.some(guest => guest.active);
console.log('Some :', resultesSome); // Some : true


// ===============  Array.some  /  Array.every

const validationresolts = {
    name: 'Mango',
    email : true ,
    password : false,                                // false - every valid is :  false
};
const values  = Object.values(validationresolts);   // все поля наши   'Mango, true , false,
const valid = values.every(value => value);         // value => value - возращаем значение - true/false
console.log("every valid is : ", valid);             // valid is :  false
















