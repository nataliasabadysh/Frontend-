'use strict'

//  создаем  PROMIS
// Pending - Ожидание

const promise = new Promise(()=>{});
// вызов new Promise Контстуктор - возвращает ОБЕЩАНИЕ НА СВОЕ МЕСТО

// ()=>{} - в этой фун-и есть свои аргументы Состояние fulfilled rejected
//  Мы передадим 2фун-и  где описываем Успешно и Ощибку
console.log(promise); // Promise


// 1

const promise = new Promise((onResolve, onReject)=>{
    // ассихронные операции
    setTimeout(()=>{

        // __ proto__

        //  [PromiseStatus]]: "pending"
        //  [[PromiseValue]]: "undefined "

    }, 1000)
});

console.log(promise);

// end 1

// 2

const promise = new Promise((onResolve, onReject)=>{
    // ассихронные операции
    setTimeout(()=>{
        onResolve('promise resolved !'); // Данный которые возвращает наш промис


        // __ proto__

       //  [PromiseStatus]]: "resolved"
       //  [[PromiseValue]]: "promise resolved !"

    }, 1000)
});

console.log(promise);

// 3 === then - Методы обьекта .  Promise - это обьект и в  __ proto__ + записаны методы  catch, then

const promise = new Promise((onResolve, onReject)=>{
    setTimeout(()=>{
        onResolve(' promise resolved !');
    }, 2000)
});
promise.then(
        value => console.log(value), // onResolve //  in 2 sec  promise resolved !
        error=> console.error(error) // onReject
);
console.log('afetr promise . then');  // сихронный код , выполнется первым


// value это ' promise resolved !'  также можно передать все что угодано массив ..

// promise.then(onResolve, onReject)- принемает 2 аргумента -  2 функции
// ===  end  3

// 4 === then - Методы обьекта .

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data passed into resolve function :)");
        // Если все ок, то вызываем resolve и передаем данные
        // Если что-то не так, вызваем reject и передаем ошибку - reject("Error passed into reject function :(")
    }, 2000);
});

const onResolve = data => {
    console.log("INSIDE promise.then - onResolve");
    console.log(data); // "Data passed into resolve function :)"
};

const onReject = error => {
    console.log("INSIDE promise.then - onReject");
    console.log(error); // "Error passed into reject function :("
};
promise.then(   // будет вызвана через 2 секунды, если обещание выполнится успешно или с ошибкой
    onResolve,
    onReject
);
// ===  4 - end



// 5 === then + then - Методы обьекта . -- возвращает новый просим


const promise = new Promise((onResolve, onReject)=>{
    setTimeout(()=>{
        onResolve(5);
    }, 500)
});
promise
    .then(value => { // получили  onResolve // Value - получает результат промиса
        console.log(value);  // 5

        return value * 2;   // return value * 2; - then -вернет новый промис
    })
    .then(x => console.log(x));  // 10


// 6 catch

const promise = new Promise((onResolve, onReject)=>{
    setTimeout(()=>{
        //onResolve(5);     //Фун-я на Успешно выполнено
        onReject('hey a ') // Фун-я На ошибке
    }, 500)
});

const resolved = value => {
    console.log(value);
    return value * 2;
};
const rejected = error => console.log(error)

promise
    // Отслежывает на onResolve()
    .then(resolved)  // 5  // если здесь произойдет (в первом ) ошибка то 2й не сработает, что бы этого избежать + catch
    .then(resolved)  // 10
    .then(resolved)  // 20

    // Отслежывает на onReject()
    .catch(error => console.error('Error :' , error));

// 7


const promise = new Promise((onResolve, onReject)=>{
    setTimeout(()=>{
        onResolve(5);     //Фун-я на Успешно выполнено
        //onReject('hey a ') // Фун-я На ошибке
    }, 500)
});

const resolved = value => {
    console.log(value);
    return value * 2;
};
const rejected = error => console.log(error)

promise
// Отслежывает на onResolve()
    .then(value => {
        console.log('first Value:', value); // 5
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(value*5);

            }, 2000)

        })
    })  // 5
    .then(resolved)                     // 25
    .then(resolved)                     // 50

    // Отслежывает на onReject()
    .catch(error => console.error('Error :' , error));

