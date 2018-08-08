// spread

// for obj and array
//====// SPREAD -  Array add into new Array
//a “spread operator” and expands an array into a list.


// let stringFirst  = ['Loren text text 1'];
// let stringSecond = ['Loren text text 2', 'and some more after'];
//
// let stringSerd = ['Loren text text 3',...stringFirst, ...stringSecond, 'finished'];
//
// console.log(stringSerd);
// ["Loren text text 3",   "Loren text text 1",   "Loren text text 2",   "and some more after",   "finished"]

//====// SPREAD - Pass element of an array as arg  to function

// function add( x, y, z) {    // x=0, y=1, z=2
//     console.log( x + y + z );
// }
//
// let arr = [0, 1, 2];
// // [0, 1, 2, 3, 4, 5, 6] nope  =  x=0, y=1, z=2
//
// // Spread out into add
// add(...arr);    // 3

//====// SPREAD -  Copy Arrays
//
// let array = [0, 1, 2, 3, 4, 5, 6, 7]; // Spread ferst array into second Array
//
// let copeArr = [...array];  // like .slice()
//
// // Add num in the end into Array
// copeArr.push(8);
// console.log(copeArr); // (9) [0, 1, 2, 3, 4, 5, 6, 7, 8]
//
// // First hasn's changed
// console.log(array); //(8) [0, 1, 2, 3, 4, 5, 6, 7]

//====// SPREAD -  Copy Arrays

const arr = [1, 2, 3, 4, 5];
const newArr = [...arr, 6, 7, 8, 9];
console.log(newArr); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

//====// slice() -  Copy Arrays

// let array = [0, 1, 2, 3, 4, 5, 6, 7];
// let copeArr = array.slice();
//
// copeArr.push(8);
// console.log(copeArr); // [0, 1, 2, 3, 4, 5, 6, 7, 8]
//
// // but Att hasn't changed
// console.log(array);  // [0, 1, 2, 3, 4, 5, 6, 7]

//====// concat() - Copy Arrays -  used to join two or more arrays.

// let array = [0, 1, 2, 3, 4, 5, 6, 7];
// let copeArr = array.concat([12, 13, 34]);
//
// console.log(copeArr); //(11) [0, 1, 2, 3, 4, 5, 6, 7, 12, 13, 34]
//
// // but Att hasn't changed
// console.log(array);  // [0, 1, 2, 3, 4, 5, 6, 7]

//====// SPREAD - Concatenation Arrays   (also we can use  array.concat(array2); )

// let a = [0, 2, 4, 6, 9];
// let b = [1, 3, 5, 8];
//
// // a =[...a, ...b];
// console.log(a);   //(9) [0, 2, 4, 6, 9, 1, 3, 5, 8]
//
// //(11) [0, 2, 4, 6, 9, "wow", "hey here is concat", 1, 3, 5, 8]
// a =[...a,'wow', 'hey here is concat', ...b];
//
// console.log(a);   //(9) [0, 2, 4, 6, 9, 1, 3, 5, 8]


//  for function  as an argum into array
//===  REST - condens mulpitle el into an array
//
// function multiply(multiplier, ...theArgs) {
//
//     // multiplier = 2,  ...theArgs = 1, 2, 3
//     // 2*2=2,  2*2=4   2*3=6
//
//     return theArgs.map(function(element) {
//         return multiplier * element;  //
//     });
// }
//
// let arr = multiply(2, 1, 2, 3);
// console.log(arr);  // [2, 4, 6]


//====// REST -

// opposite of spread syntax
// The rest parameters can be mentioned in a function definition with three dots ...

// function sum(...theArgs) {
//     return theArgs.reduce((previous, current) => {
//         return previous + current;
//     });
// }
// console.log(sum(1, 2, 3));// expected output: 6
// console.log(sum(1, 2, 3, 4));// expected output: 10


