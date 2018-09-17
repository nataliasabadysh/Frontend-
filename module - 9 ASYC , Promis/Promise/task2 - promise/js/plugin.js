'use strict'

/*

*/

// Это Фун-я - checkNumber которая возвращает Promis

const checkNumber = num => {
    return new Promise((resolved, rejecte)=>{
        setTimeout(()=>{
          if(num % 2 === 0 ){ // четное число
              resolved('Even!!!  Succes !!!')
          }else rejecte('Odd!!!   Fail !!!')
        }, 1000)
    });
};

 checkNumber(5)
     .then(result => console.log(result))
     .catch(err => console.log(err));

// = 2 или через переменную

// const promis = checkNumber(4);      // На место checkNumber - вернется промис

// promis
// .then(result => console.log(result))
// .catch(err => console.log(err));