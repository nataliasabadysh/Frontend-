'use strict'

/*
Сихронный код но выполнятся он будет полностью как Асенхронный

-  const DISTANCE = 1000; //Дистанция в  метр
-  fun  - race которая получает нашего Гоншика Имя и Скорость
-  и с себя возвращает  new Promise- новый промис
-  у которого обьвлен только один метод - resolve(когорит о точ что Промис выполнется успешно )
-  и внутри  Promise - есть setTimeout
-   как только выполнется setTimeout
         - сразу выполняеться resolve
         - и передается значеие  `${name} crossed the finish line !`

- время setTimeout Дистанцию / скорость * 1000что бы перевесть в сек
- Поетому чем выше скорость тем раньше resolve -промис


* race('mango', 300) - промис
* .then( .. ); - вызов метода then - происходит сенхронно
* А то что внутри then ->  (res => console.log(res)) - будет вызванна Асинхронно После Промиса

*/

// const DISTANCE = 1000;
// const race = (name, speed) =>
//     new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve(`${name} crossed the finish line !`);
//         },( DISTANCE/speed ) * 1000 );
//     });
// race('mango', 300).then(res => console.log(res));
// race('poly', 500).then(res => console.log(res));
// race('ajax', 600).then(res => console.log(res));


// 1
 const DISTANCE = 1000;

const race = (name, speed) =>
    new Promise((resolve) => {
    setTimeout(()=>{
        resolve(`${name} crossed the finish line !`);

    },( DISTANCE/speed ) * 1000 );

});

race('mango', 300).then(res => console.log(res));
// timeout =( 1000 / speed = 300 ) * 1000 msec = 3.3 sec
//- 'mango crossed the finish line !'  - после 3.3 сек

race('poly', 500).then(res => console.log(res));
// timeout =( 1000 / speed =  500  ) * 1000 msec = 2 sec
//- 'poly crossed the finish line !'   -  после 2 сек

race('ajax', 600).then(res => console.log(res));
// timeout =( 1000 / 600 ) * 1000 msec = 1.6 sec

// Получили

//1 - ajax crossed the finish line !   -  после 1.6 сек
//2- 'poly crossed the finish line !'   -  после 2 сек
//3- 'mango crossed the finish line !'  - после 3.3 сек



// == Promis можно  передать в переменную
const mango = race('mango', 900);
// mango.then(res => console.log(res));

const poly = race('poly', 500);
// poly.then(res => console.log(res));

const ajax = race('ajax', 700);
// ajax.then(res => console.log(res));


//                   Promise.all
//  == Подождем к.л. данные  А кгда он прийдут (все асехронные закончаться )
// тогда Выполняем дальше код


const DISTANCE = 1000;
const race = (name, speed) =>
    new Promise((resolve) => {
        setTimeout(()=>{
            resolve(`${name} crossed the finish line !`);
        },( DISTANCE/speed ) * 1000 );
    });
const mango = race('mango', 300);
const poly = race('poly', 500);
const ajax= race('ajax', 600);

Promise.all([ajax, mango, poly])
  .then(arr => console.log(arr))
  .catch(err => console.log(err));

//["mango crossed the finish line !", "poly crossed the finish line !", "ajax crossed the finish line !"]
// 0:"mango crossed the finish line !"
// 1:"poly crossed the finish line !"
// 2:"ajax crossed the finish line !"

// all - принемае Массив промисов


// 3  ==       Promise.race
// Клда нужно отловить тасого быстрого со всего массива


const DISTANCE = 1000;
const race = (name, speed) =>
    new Promise((resolve) => {
        setTimeout(()=>{
            resolve(`${name} crossed the finish line !`);
        },( DISTANCE/speed ) * 1000 );
    });
const mango = race('mango', 300);
const poly = race('poly', 500);
const ajax= race('ajax', 600);

Promise.race([ajax, mango, poly])
  .then(result => console.log(result))    // ajax crossed the finish line !
  .catch(err => console.log(err));


// race - получает массив промисов Но он ждет пока исполниться хотябы один , а все остальные от отбрасывает
// =======================================================
// Из бэк энда получаем данные
// fetch - из себя возвращает  промис


console.log('before');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log('data inside then: ', data))

  .catch(err => alert('Error!' + err));

console.log('after');


// 2



let x;
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())

    .then(data => {
        x = data;
        console.log('data inside then: ', x)
// data inside then:  (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    })
    .catch(err => alert('Error!' + err));

// Потому что это сихронный код Он выполнется первее чем Асинхронный внутри then
console.log('after', x); // after undefined
