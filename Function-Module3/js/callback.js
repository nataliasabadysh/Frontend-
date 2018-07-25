// Callback Функция обратного вызова GOIT


//const ar = [2, 3, 4, 5, 7];
// // func 1
// const toEven =  arr => arr.filter(elem => elem % 2 === 0);
//
// // func 2
// const log = str => console.log(str);
//
// // Обьявили func-1, и в ней Вызвали func 2
// log( toEven(ar) );    // 2 4              // Подставили вызов фун-и
//


// CALLBACK

// const add = param => param + param;         // function  add
// const mult = param => param * param;        // function  mult
// const multFoo = (num, foo) => num * foo(num);
//
// // Вызываем function  add или function  mult
// console.log(multFoo( 3, add ));    // 18
// console.log(multFoo( 3, mult ));   // 27


// Фун-я Как ЗНАЧЕНИЯ МАССИВА

// const array = [  // Фун-я Как ЗНАЧЕНИЯ МАССИВА
//     a => a + a,     //3+3=   6
//     a => a * a,     //3*3=   9
//     a => a / a,     //3/3=   1
//     a => a ** a     //3**3=  27
// ];
//
// const arihpmetic = (arr, val) => arr.map(elem => elem(val));  // elem -  это ссылка на тело функ-и
//
// // map = for
// //Вызвали фун-ю /   передали массив / число и применяет к массиву это число
//
// console.log(arihpmetic(array, 3));   //[6, 9, 1, 27]
//
//
// const add = array[0];  // 2 + 2 = 4
//
// console.log(add(2));  // function add



























