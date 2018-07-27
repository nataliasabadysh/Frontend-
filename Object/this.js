'use strict';


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
// ================================  apply

function addProp (prop, value) {
    this[prop]

}