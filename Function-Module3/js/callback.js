// Callback Функция обратного вызова GOIT
// Фун-и можно передать в другую фун-ю



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




// ============== call back - анонимные фун-и - обраного вызова  (easycode les5)

// function parent(firsеName ) {
//     return function (secondName) {
//         return 'Hello ' +  firsеName + '..' + secondName;
//     };
// }
// console.log(parent('Nata')('Sabadysh')); // Hello Nata..Sabadysh
//
// const parentFun = parent ('Sean') ;
// console.log(parentFun('Hahhesy'));   //Hello Sean..Hahhesy





// 1  вывели отдельно в фкнк и предали имя _ тоисть тело фун-и


// function foo(string, func) {
//     let result = '';
//     console.log(func());
//     for (let char of string){
//         console.log(char);
//     }
//     return result;
// }
// function handler () {
//     console.log('Hello i am  Function');
// }
// foo('hello World' , handler);
//
// // 2 - передали ври визове фун-и вторим арг функцию
//
// function foo(string, func) {
//     let result = '';
//
//     console.log(func());
//     for (let char of string){
//         console.log(char);
//     }
//     return result;
// }
// foo('hello World' ,  function () {
//     console.log('Hello i am  Function');
// });



// 2  вторая функция может принемать неколько задач для каждого конкретного случас handler и handler2 ..

// function foo(string, func) {
//     let result = '';
//     for (let char of string){
//         result += func (char);
//     }
//     return result;
// }
// // handler могут быть разными
//
// function handler (symbol) {
//     return symbol.toUpperCase() + '-';
// }
// function handler2 (symbol) {
//     return symbol.charCodeAt(0);
// }
// console.log(foo('Natasha' , handler));  // N-A-T-A-S-H-A-
// console.log(foo('Natasha' , handler2)); // 78971169711510497
//

//====  +++ === ОПИСАНИЕ
// фун-я принемает другую фун-ю  в качестве аргументов
// возращает фун-ю

//Создали функцию
// эта фун-я принемает параметр firsеName
// принемает secondName
// и возвращает строчку " 'Hello ' +  firsеName + '..' + secondName; "

 // function parent(firsеName ) {  // эта фун-я принемает
 //     // function body
 //    return function (secondName) {  // анонимная фун-я не даем имея и она принемает secondName
 //        // function body
 //        return 'Hello ' +  firsеName + '..' + secondName;
 //    };
 // }
//  //console.log(parent('Nata')); // parent - возвращает целую функцию
// // Мы сразу вызвали вторую функцию, после радительской функции

  // console.log(parent('Nata')('Sabadysh')); // Hello Nata..Sabadysh

// // радительскую фун-ю в переменную
// //const parentFun = parent ('Denis') ;  //  переменная = вызову второй функции  +  передали Имя
// // в переменной  parentFun =  будет то что указанно в parent  return ====
// // ====>  return function (secondName) {return 'Hello ' +  firsеName + '..' + secondName; };

// const parentFun = parent ('Sean') ;// we got the function parent
// console.log(parentFun); // function (secondName) {return 'Hello ' +  firsеName + '..' + secondName; };
// console.log(parentFun('Hahhesy')); // function (secondName) {return 'Hello ' +  firsеName + '..' + secondName; };
// //console.log(parentFun('Hahhesy')); ====>  Hello Sean..Hahhesy


// ============== call back  Functionкоторые принемают в качестве арг другие function  (easycode les5)


// function foo(string, func) {    // принемает строчку и  вторую фуннкцию
//     let result = '';            // создали переменную которую мы возвращаем
//
//     console.log(func());        // Hello i am  Function
// // Но она возвращает Undefined
//
//
//    //  будем переберать нашу строчку
//     for (let char of string){
//         console.log(char);
//         // получим каждый символ в новой строчке
//     }
//     return result;
// }
// // Вызвали функцию Вторым аргументом передаем вторую нашу фун-ю
//
//
//
// function handler () {
//     console.log('Hello i am  Function');
// }
// foo('hello World' , handler);
// // можно исползовать стрелочные функции

// 1  вывели отдельно в фкнк и предали имя _ тоисть тело фун-и


// function foo(string, func) {
//     let result = '';
//     console.log(func());
//     for (let char of string){
//         console.log(char);
//     }
//     return result;
// }
// function handler () {
//     console.log('Hello i am  Function');
// }
// foo('hello World' , handler);

// 2 - передали ври визове фун-и вторим арг функцию

// function foo(string, func) {
//     let result = '';
//     console.log(func());
//     for (let char of string){
//         console.log(char);
//     }
//     return result;
// }
// foo('hello World' ,  function () {
//     console.log('Hello i am  Function');
// }

// ============== call back  Functionкоторые принемают в качестве арг другие function  (easycode les5)
// function foo(string, func) {
//     let result = '';
//     for (let char of string){
//         result += func (char);
//     }
//     return result;
// }
// // handler могут быть разными
//
// function handler (symbol) {
//     return symbol.toUpperCase() + '-';
// }
// function handler2 (symbol) {
//     return symbol.charCodeAt(0);
// }
// console.log(foo('Natasha' , handler));  // N-A-T-A-S-H-A-
// console.log(foo('Natasha' , handler2)); // 78971169711510497


/// ОЬЯСНЕНИЕ

// из цыкла переменная char
// попав  в фун-ю func
// перенеслать в фун-ю handler под именем symbol



// function foo(string, func) {
//     let result = '';
//     // console.log(func());
//
//     //будем вызыват на каждой итерации
//     for (let char of string){
//         console.log(func(char));
// // на каждой итерации вызываем символ
//         func(char); // передаем один символ
//     }
//     return result;
// }
// function handler (symbol) {
//     //получаем один символ
//     return symbol.toUpperCase() + '-';
//     // return -значит вернет результат
// }
// foo('Nat' , handler);


// ===== callback   (modul 5)

const greet = (name) =>{
    console.log('helo' + ' ' + name);
};

const doStuff = (message, callback) => {
    const input = prompt(message);
    callback(input);
};
doStuff('Давай имя !', greet);  // message = 'Давай имя'




// Функция без callback

const doStuff = (message, callback) => {
    const input = prompt(message);
    callback(input);
};

doStuff('Давай имя !', name => {  // 1й и 2й аргумет для функции - doStuff
    console.log('helo' + ' ' + name);
});

// =========// getUsers

// Передается  как аргумент в  другую фун-ю
// getUsersById('qwqw', updateUI );
// - updateUI - callback















