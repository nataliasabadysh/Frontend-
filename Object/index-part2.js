// Alex - part -2
// У обьекта нет индексов , поетому перебрать можно только с помощью

//================= for.. in..

const dog = {
    name : 'Mango',
    age : 22,
    color : 'brown',
    friendCount : 2,
};
// KYE in Object - переберает наш обьект и выводит ключи

for (const key in dog) {
    // Получим ключи
        console.log(key);  // name / age/ color / friendCount

    // Значение ключа
        console.log(dog[key]);  //  Mango 22 brown 2
}

// ======  Kye - STRING

for (const key in dog){
    console.log(typeof(key));  // string
}


// ================== for .. in..

// Посчитаем сумму всех чисел ( зарплаты )

const salaries = {
    mango : 50,
    poly : 50,
    ajex : 80,
};

let total = 0;

for(const key in salaries){
    total += salaries[key];
};
console.log(total);  // 180

// ================== Вложенные обькты  array + object

// Масив каждого элемента являеться обьякт


const salaries =[
    {
        name: 'Mango',
        salary: 50,
    },
    {
        name: 'Poly',
        salary: 50,
    },
    {
        name: 'Ajax',
        salary: 50,
    },
];
// ===  (0){name: "Mango", salary: 50} (1) {name: "Mango", salary: 50} ..
console.log(salaries);  // all array

//  == {name: "Mango", salary: 50}
console.log(salaries[0]);  //  first object

//  == Mango
console.log(salaries[0].name);  //  Mango
console.log(salaries[0].salary);  //  50

console.log(salaries[1].name);  //  Poly


// ======================= object + array + object

const  dog= {
    name: 'Mango',  // dog.name
    friends: [      // dog.friends[0]
        {  name: 'Poly',  salary: 50, },   // dog.friends[0].name    Poly
        { name: 'Alex', salary: 50, }
    ],
};
// Получим имя
console.log(dog.name); //Mango

// получим массив
console.log(dog.friends); // 0 {name: "Poly", salary: 50} ,  2 {name: "Alex", salary: 50}

// получим  FIRST USER  из массива
console.log(dog.friends[0]); //{name: "Poly", salary: 50}


console.log(dog.friends[0].name); // Poly

// // ======================= FOR KEY OF VALUE    array + object

const workers =[
    { name: 'Mango', salary: 50,},
    { name: 'Poly', salary: 50,},
    { name: 'Ajax', salary: 50,},
];
for (const worker of workers){ // ссылка на наш обьект

    console.log(workers); // получим 3 обьекта
    console.log( worker.salary ); // получим все зп   // 50 50 50
}

// ======================= FOR KEY OF VALUE    array + object
// for of  для индексированых значениий ( массив и строка )
//for (variable of iterable) {statement }

const workers =[
    { name: 'Mango', salary: 50,},
    { name: 'Poly', salary: 50,},
    { name: 'Ajax', salary: 50,},
];
let total = 0;

// перебераем эл в массиве   for of
for (const worker of workers){
   total += worker.salary;
}
console.log(total); // 150

// =========================== NEW NEW NEW ;)

// ================================== Object keys (заберает key) - возращает массив КЛЮЧЕЙ

// // что бы перебрать этот Массив + Обькт разньше нам нужно было  for in

const workers ={
    mango : 50,
    poly : 50,
    ajex : 80,
    };
const keys = Object.keys(workers);// отдает масиив

// мы получили массив , теперь мы можем пройтись по нем используя метода массив
//console.log(keys); // ["name", "salary"]

let total =0;
for(const key of keys){  //  for(const key of Object.keys(workers)){  - мы могли бы сделать так но это плохой код
    total += workers[key];
}
console.log(total); // 180

// ================================== Object values(заберает value)  - возращает массив ЗНАЧЕНИЙ

// ЕСЛИ  нам нужны значение (посчитать сумму ..) то  Object values


const workers ={
    mango : 50,
    poly : 50,
    ajex : 80,
};

const values = Object.values(workers);
console.log(values); // [50, 50, 80]

let total = 0;
for (const value of values){ //  value - у нас элемент обькта
    total += value;
}
console.log(total); // 180

// ================================== Object entries -- (заберает пары key:value) - состовляет для каждой пары массив

const workers ={
    mango : 50,
    poly : 50,
    ajex : 80,
};
const entries = Object.entries(workers);
//console.log(entries);    // (1) ["ajex", 80],  (2) ["ajex", 80],  (3)["ajex", 80]
let total = 0;

for (const endry of entries){
    const key = endry[0];
    const value = endry[1];

    console.log(key); // mango poly  ajex
    console.log(value); // 50 50 80
}

// for (const [ key, value ] of entries){  // ================  деструктуризация массива
//     console.log('Key :', key, 'Value ', value); // Key : mango Value  50
// }

// =================================== Слияние Обьектов.  Object .assign (target, ... sourse)
// Два обьекта нужно слить в 3Й обьект

const defaultSettings = {
    theme : 'Light',
    timeFormat : '24h',
};

const userSettings = {
    name : 'Mango',
    theme : 'dark',
};
// value если разние то значения перезапишуться
// а если чего то нет то добавиться

const merget =  Object.assign({}, userSettings,defaultSettings);  // {name: "Mango", theme: "Light", timeFormat: "24h"}

// const merget =  Object.assign({} ,defaultSettings, userSettings);  // {theme: "dark", timeFormat: "24h", name: "Mango"}

// сделали копию его свойст
console.log(merget); //  {name: "Mango", theme: "Light", timeFormat: "24h"}

// ===================================  Spread   так же  для Слияния Обьектов и Масссивов

const defaultSettings = {
    theme : 'Light',
    timeFormat : '24h',
};
const userSettings = {
    name : 'Mango',
    theme : 'dark',
};
// const merged =  {...defaultSettings, ...userSettings}; // {theme: "dark", timeFormat: "24h", name: "Mango"}
const merged =  {...userSettings , ...defaultSettings}; // {name: "Mango", theme: "Light", timeFormat: "24h"}
console.log(merged);

// =================================== Как же добавить в массив

const arr = [ 1, 2, 3, 4, 5];
const newArr = arr.slice(); // сделали  копию  массива
// на базе предедушего создадим новый массив и + чило 6

newArr.push(6); // [1, 2, 3, 4, 5, 6]

console.log(newArr);
//==
// console.log(newArr === arr); -  false - но они не равны , 1н место памяти [ 1, ..];
// и .slice(); делаем копию , создает еще один

//================================== Добавить в массив concat ([..])
// создает копию и туда добовляет оригенальный массив + копию

const arr = [ 1, 2, 3, 4, 5];
const newArr = arr.concat([6]); // [1, 2, 3, 4, 5, 6]
// newArr.push(6); БОЛЬШЕ НЕ НУЖЕН
console.log(newArr);

//================================== SREAD для массивов

// spread - распылием , собераем в один массив
// создает копию и туда добовляет оригенальный массив + копию

const arr = [ 1, 2, 3, 4, 5];
const newArr = [...arr, 6,7,8,9,0];
console.log(newArr);     // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const newArr = [...arr];      // Это будет копия !  все эл распыляються
console.log(newArr===arr); // false

// ===== Добавим эл перед и после массива

const arr = [ 1, 2, 3, 4, 5];
const newArr = ['Hi', 'here is some numbers', ...arr, 6,7,8,9,0];
console.log(newArr); //  ["Hi", "here is some numbers", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// SREAD применяеться только к массивам и обьктам

//================================== Деструктуризация обьктов !!

// ключ значение - присвоеи вне этого обьекта
// мы можем указать только одно свойство


const dog = {
    name : 'Mango',
    age : 22,
    color : 'brown',
    friendCount : 2,
};

//console.log(dog);       // {name: "Mango", age: 22, color: "brown", friendCount: 2}
// const name  = dog.name;
// const age  = dog.age;
// const color  = dog.color;

const { name, age, color, bread} = dog;  // создали 3 переменных name, age, color

// обьявляем переменную получаем свойства
console.log(name); // Mango
console.log(age); // 22
console.log(color); // brown

// Мы обратились в bread но такого нет в нашем обьетк ,
// но все же мы можем задать по умолчанию знаению  bread =>>> bread = 'dog'

console.log(bread); // undefined // такого свойтва нет в переменной


//================================== Деструктуризация обьктов !! Got undefined of ++ default значение .)

const dog = {
    name : 'Mango',
    age : 22,
    color : 'brown',
    friendCount : 2,
};
const { name = 'Poly', age = 10, color = 'white', bread = 'dog'} = dog;

// Мы обратились в bread но такого нет в нашем обьетк ,
// но все же мы можем задать по умолчанию знаению  bread =>>> bread = 'dog'
console.log(name); // Mango
console.log(age); // 22
console.log(color); // brown
console.log(bread); // dog    //  Но такого свойтва нет в переменной Но мы оставили зн по умолчанию


//================================== Деструктуризация обьктов +  rest
// Если мы хотим взять Один значение Ю а все остальное записать записать в новый обьект


const dog = {
    name : 'Mango',
    age : 22,
    color : 'brown',
    friendCount : 2,
};
const { name = 'Poly', ...rest} = dog;

console.log(name); // Mango
console.log(rest); // {age: 22, color: "brown", friendCount: 2}

//rest - это копия. отдельный обьект

//================================== Cвойства обьекта  Деструктуризаровать в другую переменную
const dog = {
    id : 1,
    name : 'Mango',
    age : 22,
    color : 'brown',
    friendCount : 2,
};
 const { name = 'Poly', id: dogID , ...rest} = dog;
console.log(dogID); // 1

//================================== Где применяеться Деструктуризация
//================ Старая запись

const showGuestInfo = (guest) => {
    console.log(guest.name);
    console.log(guest.age);
    console.log(guest.room);
};
showGuestInfo('Mango', 2, 34);

//================ А вот то что нужно
const showGuestInfo = ({name = 'Guest',age, room}) => {
    console.log(name);
    console.log(age);
    console.log(room);
};
showGuestInfo({
    name:'Mango ',
    age:2,
    room: 34
});