// //========== Object Part-1

// // Динамические
// // string :  String


const dog = {
    name : 'Mango',
    age: 2,
    color: 'brown',
};
console.log(dog);

// // ========     Получим только одно значение

// Чаще всего. Но когда вы знаете какое значение надо получить

console.log(dog.name); // Mango
console.log('name');

// // =========    но если Не знаем к каком эл мы обратимся то

const key = 'name';     // string
console.log(dog[key]);   // 5

// ---- если такого ключа и свойства нет то UNdefind
console.log(dog.bread);   // undefined

//==============  Короткие Свойства

const name = 'Mango';   // name
const age = 5;   // age

const dog = {

    // name:name( name :  const name = .. )// интепритируеться как переменная Имя : = Свойстку ключа
    // age: age, //

    name ,
    age,
};
console.log(dog);  // {name: "Mango", age: 5}

//==============  Удаление свойст обьекта
// delete

const dog = {
    name : 'Mango',
    age: 2,
    color: 'brown',
};

console.log(dog); // {name: "Mango", age: 2, color: "brown"}

delete dog.name;
console.log(dog); // {age: 2, color: "brown"}


//==============  Добавление свойст обьекта

// если такого ключа нет в обьекте то он добавиться
// а если был то нет .

const dog = {
    name : 'Mango',
    color: 'brown',
};
console.log(dog);       //{name: "Mango", color: "brown"}

dog.color = 'brown';    //{name: "Mango", color: "brown"}
dog.age = 2;            //{name: "Mango", color: "brown", age: 2}
console.log(dog);


//============== hasOwnProperty -  Отсутствующие свойства

// " hasOwnProperty " - А ЕСТЬ ЛИ ТАКОЙ КЛЮЧ-ЗНАЧЕНИЕ У ОБЬЕКТА

const dog = {
    name : 'Mango',
    age: 2,
    color: 'brown',
    mood: undefined,
};

console.log('Dog mood :', dog.mood);  //Dog mood : undefined

console.log('Dog bread :', dog.bread);  // Dog bread : undefined

// Проверяем на ключи, на налиие такого ключа в нашем обьекте

console.log('hasOwnProperty(mood):', dog.hasOwnProperty('mood'));  //hasOwnProperty(mood): true

console.log('hasOwnProperty(bread):', dog.hasOwnProperty('bread'));  // hasOwnProperty(bread): false

// ===========================  KEY : Value-FUNCTION

const dog = { // свойство состоит из key : value (function )
    name : 'Mango',
    age: 2,
    color: 'brown',
    mood: undefined,

// cстарая запись
    makeSound: function(){ // key : function
        console.log('woof!');
    },

// новая запись -  ES5

    makeSoundMix(a){
        console.log('woof!');
    },
};

console.log(dog);   //{name: "Mango", age: 2, color: "brown", mood: undefined, makeSound: ƒ}
dog.makeSound();    //woof!

// ===========================  KEY : Value-FUNCTION - внутри функции обратимся к полю всех key:value

// Value-FUNCTION - внутри функции обратимся к полю всех key:value

const dog = {
    name : 'Mango',
    age: 2,
    color: 'brown',
    mood: undefined,
    friendsCount : 5,

    makeSoundMix(){
        console.log(`${dog.name} Says Woof!`); // Mango Says Woof!
    },

    addFriends(num){    // Добавили друзей
        dog.friendsCount += num;
    },
};
dog.makeSoundMix();

dog.addFriends(5);  // Добавили друзей = friendsCount: 10

console.log(dog);  // {name: "Mango", age: 2, color: "brown", mood: undefined, friendsCount: 10, …}

//================================ Присвоение по ссылке и по значению
// 5 - примеивние тип данных


let a = 5;
let b = a;
a = 10;

console.log(a);
console.log(b);

//================================ Присвоение по ссылке и по значению

const objA = { name: 'Mango' };

const objb = objA;       //  присваивоение сложных типов

// objA - идет к обьекту в панямми в  objb и там меняю свойство name

// objA and objB хранят указать на одну точку в памят
// мы НЕ создаем копию  мы создаем указатель

console.log('objA  ', objA); // Mango
console.log('objb ', objb);  // Mango

objA.name = 'Poly';
// мы НЕ создаем копию  мы создаем указатель
console.log('objA ', objA); //  Poly
console.log('objb ', objb); //  Poly

objA.name = 'Ajax';
// мы НЕ создаем копию  мы создаем указатель
console.log('objA ', objA); // Ajax
console.log('objb ', objb); // Ajax


// массивы и обьекты всегда передаються по ССЫЛКЕ
// приметивные типы

//передача по ссылке  -  кладем копьютер в комнату , закрываем на ключ , делаем копии ключей и РАЗДАЕМ работникам (все смотрят в комнате если что то оновилось  )
//присвоение по значению  - это наделать копии тетрадки и раздать каждому, (куча копий)

// //================================ Присвоение по ссылке и по значению

// два разных обьекта
const a = { val: 5 };
const b = { val: 5 };
a.val = 111;    // перезаписали
console.log(a); // {val: 111}
console.log(b); // {val: 5}

//два разных обьекта
const a = { val: 5 };
const b = a;    // присвоение по ссылке

//================================  ДВА одинаковых Массива = false
// если мы сравниваем ДВА одинаковых Массива то

console.log( [ 1,2,3,4,5,6 ] ===[ 1,2,3,4,5,6 ] ); // false

// это два разних мета в памяти

//================================ Один и тот же массив = true - это одно и тоже место в памяти

// это Одно место в памяти , один и тот же массив
const x = 3;
const y = x;           // ( x=x )
console.log( x === y); // true

//================================ Function (ССЫЛКА  на оригенал ) { ... }

// Когда передаем сложный тип мы присваеваем ее в переменную , или аргументом - это живая ссылка

// Присвоение по ссылке и по значению

const number = [1,2,3,4,5];
const addNumber = (arr, x) =>{ // в параметры записвлась ссылка где лежит орегинальнй массив
    arr.push(x);                 // мы можем нечего не возвращать (return)
};
addNumber(number, 6);
console.log(number); //(6) [1, 2, 3, 4, 5, 6]
// //================================ Function сделаем копию

const number = [1,2,3,4,5];

//Функция добавит 2- элемента

const addNumber = (arr, x) =>{    // принемает масиив x
   const newArray = arr.slice();  // сделали копию   , отдает новый массив

   newArray.push(x);   //Добавили

   return newArray;

};
const  addArray  = addNumber(number, 6);

console.log('Number',number); // New Number (6) [1, 2, 3, 4, 5]

console.log('New Number', addArray); // New Number (6) [1, 2, 3, 4, 5, 6]

//================================ Function передаем обькт

const guests = {
    name : 'Mango',
    age: 2,
};
const changeAge = (obj, newAg)=> {
    obj.age = newAg;
};
 // guests - то ссылка на указатель  obj-запишиться НЕ копия А ССЫЛКА
changeAge(guests, 5);   //{ name: "Mango", age: 5 }
console.log(guests);


