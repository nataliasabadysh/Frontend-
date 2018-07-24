"use strict";

// Scope
// Создается во время обьявления

// Область видемости

// if(true){ // локальная
//     const a = 5;
//     console.log('a in if', a);
// }
// console.log('a in global', a);  //  глобальная


// Лексическое окружение lexical environment - словарик, где какая то функция была обьявленна

//  выполняеться каждый раз  когда функция создаеться
// Ключ Значения -
// Когда мы хотим достучасться до
// какойто переменной или индефикатору,
// наш интепритатор должен знать где это посмотреть -> в словаре или в Лексическое окружение
//


/**
 *Global LE = {};
 */

//
// const outerVar = 'outer Var';
// // GlobalLE = { outerVar: 'outer Var !'};
//
//
//
//  const fn = function(value){
//
//      //  внутри каждой фун-и (при ее вызове ) создается словарик Имя:Значение
//     /*
//         LE = {
//             value : 5             // когда мы обьявили параметры , то они присвоюваютя суда
//             outerVar: GlobalLE  (cсылка на GlobalLE )
//         }
//     */
//     console.log('outer Var:', outerVar);
//     console.log(value);
//     const string = 'hello';
//
//     /*
//         LE = {
//             value : 5
//             string : 'hello'
//         }
//     */
//
//     console.log(string);
// };
//
// // Global LE = {
// //      outerVar: 'outer Var !'
// //      fn : function
// // };
//
//
// fn(5);

//LE  Scope  -   Создается во время обьявления


// Function Scope - область видемости функции, внутри фун-и которое закрыть
// Создаеться во время вызова фун-и, создаеться при вызове фун-и каждый раз. внутриннее закротое свойство фун-и



// Вложенные области видемости
// Function  можно обьявлять в другой фун-и


// Global LE = { outerLE = null }
const globalValue = 'Global Value';

/** Global LE = {
*   globalValue : 'Global Value ,
*   outerLE = null
*   }
*/

// Function 1
const fmA = function () {

        /**   При Обьявлении сохраняеться Scope
            * fmA.Scope = Global LE
            * outerLE = fmA.Scope
            *   fmA_LE  :  {
            *   }
            *
        */

        const varInFmA = ' Var In FmA ';

        /**
            *   fmA_LE  :  {
            *       varInFmA = ' Var In FmA ';
            *       outerLE = fmA.Scope
            *   }
        *
        */

// Function 2
            const fnB = function(){

                /**   При Обьявлении сохраняеться Scope
                    * fmA.Scope = Global LE
                    * outerLE = fmA_LE
                    *   fmA_LE  :  {
                    *   }
                *
                */
            }
};
fmA();