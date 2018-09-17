
// function executor(one, two) {// (resolve, reject)
//     if (true) {
//         return one('All right!') //one === resolve
//     }
//     return two('Error in IF condition!')// two === reject
// }
//
// objPromise
//         .then(data => console.log(data)) //  'All right!'
//         .catch( err => consoloe.log(err));
//


// 2


// function executor(resolve, reject) {
//
//     if('Все хорошо')  return resolve('данные для Promis');
//
//     else return reject('описание почему данные не получились');
//     // new Error
// }


// 3  получаем Радномные числа

// function executor(resolve, reject) {
//     let num = Math.floor(Math.random() * 1000)
//     let delay = Math.floor(Math.random() * 3000)
//
//     function asyncFoo () {
//         if(num > 500){
//             return resolve(num)
//         }
//         else {
//             return reject(num);
//         }
//     }
//     setTimeout(asyncFoo, num)
// }
//
// const promise = new Promise(executor);
//
// promise.then(data => data * 2)
//     .then(data2 => console.log('четное число больше 1000 и не равно - ' + data2))
//     .catch(err => console.log('ошибка при получении четного число больше 1000 Причина  - ' + err));
//


//  3-btn кнопки , первую которую нажмет та и зафексируеться

















