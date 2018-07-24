'use strict';



// const userArrRes = [];
//
// let userInput;
// do{
//     userInput = prompt ('Write the number');
//     userInput !== null && Number.isInteger(Number(userInput)) ? userArrRes.push(Number(userInput)) : ""
// } while(userInput !== null);
//
// let summ = 0;
//
// for ( let item of userArrRes ){
//     summ += item;
// }
// const message = `Сумма всех чисел массива ${summ}`
// alert(message)
//
// // 2
// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// let attempts = 3;
// let userInputPassw;
// let  hasNumber = false;
// let message;
//
//
// do{
//     let inputMessage = `Введите пароль. Осталось попыток: ${attempts}`
//     userInputPassw = prompt(inputMessage);
//     attempts -=1;
//     if( passwords.includes(userInputPassw)){
//         hasNumber = true;
//     }
//     messege = hasNumber ? 'Добро пожаловать!' : 'Аккаунт заблокирован!';
//
// } // end do
// while( userInputPassw !== null && attempts !== 0 && !passwords.includes(userInputPassw));
// alert(messege);

// НЕ МОЕ тоже самое но не мое

// const storedPassword = 'qwerty123';
// let loginAttepmts = 3;
// let isLoginCancelled = false;
// let userAuthenticated = false;
//
// do{
//     let password = prompt("Будь-ласка, уведіть пароль");
//     userAuthenticated = password === storedPassword;
//     isLoginCancelled = password === null;
//     if(userAuthenticated || isLoginCancelled)
//         break;
//     else{
//         loginAttepmts -= 1;
//         alert(`Невірний пароль, у Вас залишилось ${loginAttepmts} спроб.`);
//     }
// }while(loginAttepmts > 0 && isLoginCancelled === false);
//
// if(userAuthenticated){
//     alert("Ласкаво просимо!");
// }else{
//     if(loginAttepmts === 0)
//         alert("У Вас закінчилися спроби, акаунт заблоковано.");
// }
// }



// повторим цыклы  LOOP ( module  - 3 Part 3

// const arr =[ 10, 25, 30, 4, 15, 60, 55, 9];
//
// let i = arr.length - 1,    // 6 - 1 = 5  Array
//     j = arr.length - 1;
// do {
//     i  -= 1;  // 5 - 1 = 4
//     console.log(`arr[&{i}]' = ${arr[i]}`) // 4
// }
// while(i)                  // =    while == 0    прикратить выполнение если попадет 0 ( 0 == False )
//
// do {
//     j -= 1;
//     console.log(`while {arr[i]} arr[${j}] = ${arr[j]}`);
// }
// while (arr[j]);          // =    while (arr[j] == 0 )
//
// // while and if все что попадает этот цикл превращаеться в TRUE/ FALSE
//
// // все это приверащаеться в TRUE
// // if ([]) - пустой массив == thue
//
// // все это приверащаеться в FALSE
// // 0  -0  NaN False Undefined Null  ""  == false