"use strict";


// lesson -5 Easycode

// ======================function declaration

function calc() {
    let a = 10;
    let b = 20 + a;
    console.log(b);  // 30    -Получили  Значение фун-и
    return b;
}
calc();   // вызвали фун-ю

// ======================function declaration

function calc() {
    return 20 + 40;
}
const  res = calc();  // в переменную записали фун-ю
console.log(res);   // 60

const  res2 = calc() + 50;  // в переменную записали фун-ю
console.log(res2);  // 110

// ====================== fun-decl / Область видемости GL,LE

let a = 20; // глобальная зона видемости

function calc() {   //  локальная зоа видемости
    let a = 10;
    console.log('Local Var:', a);  // 10
    return 20 + a;
}

let res = calc();     // что бы функция работала нужно вызвать ее!

console.log('Global Var:', a);  // 20
console.log(res);  // 30

// ====================== fun-decl./ Переопределим Глобальную переменную

let a = 20;
function calc() {
    a = 10;   //  переопределим Глобальную переменную , не написав let
    console.log('Local Var:', a);  // 10
    return 20 + a;
}
let res = calc();
console.log('Global Var:', a); // 10
console.log(res);  // 30

// ====================== fun-decl. Параметры и Аргументы

function calc(a, b) { // если они не чему не равны они = undefined
    return a + b;      // При любых математических вычеслений с Undefined = NAN
}
let res = calc(); //undefined + undefined = NaN
console.log(res); // Nan

let res2 = calc(2, 4) + 50;
console.log(res2);  // 56

//==== NaN in Function - Потомучто нет аргументов

function mult (x, y){
    return x * y;  // NaN
}
let multRes = mult();
console.log(multRes);


// ====================== fun-decl. Arguments - получим результат в виде псевдомасиве

// Arguments - это обькт (итерируемый обькт- можно перебрать - псевдо массив)
// Если мы не знаем сколько будет аргументов в фун-и
// (если много аргумантов то лучше тогда Обьект передать )

function args() {
    console.log(arguments);  // будут проиндексированы все эл которые были переданны в фун-ю
}
args(1,2,3, 5,6,7,8,9);

// ====================== fun-decl. Делаем проверки на Полученные данные На число На строку

function mult (x, y){

//  if (x === undefined || y === undefined) return new Error(' Данные не были переданны! ') = (!x || !y )
    if (!x || !y ) return new Error('');
    // вызвали ошибку new Error('');

    if (typeof x !== 'number' || typeof y !== 'number') return new Error('x, y Not a Number');

    return x * y;
}
let multRes = mult(2, 5); // 10
console.log(multRes);

// ======================  Значение по умолчанию ,   что бы не писать проверку  if (!x || !y ) return new Error('');)

function mult ( x = 1, y = 1 ){ //  по дефолту можно передать другуб фун-ю или переменную, обьект , любое значение
    if (typeof x !== 'number' || typeof y !== 'number') return new Error('x, y Not a Number');
    return x * y; // 1*1 = 1
}
let multRes = mult(); // 1
console.log(multRes);

// ======================  Rest - мы получим в виде массив (методы массива можем применять )

function foo(...args) {
    console.log(args);
}
foo(1, 2, 3, 4, 5);// (5) [1, 2, 3, 4, 5]

 // ==+==+==+==

function foo(a, d, ...args) { // a=1, b=2, args = 3, 4, 5- всему остальному

    console.log(a,d, args);  // 1 2 [3, 4, 5]
}
foo(1, 2, 3, 4, 5);


// ====================== Деструктиразация  function ..({name, age}..  console.log(name, age);
// Деструктурировали обьет и выташили только то что нам нужно было как отдельные переменные

let useName = {
    name : 'Natasha',
    age : 29
};

function userUpdate({name, age} ) {  // name.. становятся аргументами фун-и
    console.log(name, age);  // Natasha 29
    console.log(name);       // Natasha
}
userUpdate(useName);

// ====================== Деструктиразация

let useName1 = { name : 'Natasha',  age : 26 };
let useName2 = { name : 'Sean',  age : 30 };

function userUpdate({name}, {age} ) {  // name.. становятся аргументами фун-и
    console.log(name, age);  // Natasha 29
}
userUpdate(useName1, useName2);


// === А здесь нет Деструктиразации

let useName = {
    name : 'Natasha',
    age : 29
};
function userUpdate(useName) {
    console.log(useName.name, useName.age);  // Natasha 29
}
userUpdate(useName);
// userUpdate({name : 'Natasha', age : 29})  //или в переменнцю +

// ============================== Functio Expression

// не всплывает
// когда мы фун-ю присваиваем в переменную

const foo2 = function  () {
    console.log('Functio Expression');  // Functio Expression
};
foo2();

//================================ Self-invoking functions
// самовызываюшийся анонимная фун-я
 // заварачиваються весь код. дабы изолировать весь код от глобальной зоны выд и замкнуть код


(function () {
    console.log('Hello Natalia');
}) (); // вызов фун-и

//}(); )  - вызов фун-и второй вареант



// Go It

function fn() {
    // argum - доступен только в нутри переменной

    arguments.length;

    for(let i =0; i< arguments.length; i++) {
        console.log(arguments[i]);
    }
}
fn( 23, 54, 23 );   // вывели просто цыфры