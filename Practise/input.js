
// lesson 4
// ===============    Функция принемает числа , и перемножит ьмежду собой , или вывести 0

function multiply() {
    if (arguments[0] === undefined) return 0;

    let result = 1;
    for (let i = 0; i < arguments.length; i++) {
        result *= arguments[i];
    }
    return result;
}
console.log(multiply(3, 2, 7));
console.log(multiply());



// ======================    Создать фун-ю которая принемает строку и возвращает строку перевертыш
let string = "default test string";

function reverseString(string) {
    let result = "";
    for (let i = string.length -1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}
console.log(reverseString(string));

//  ===================    Фун-я принемает строку  и возвращает сроку
// каждый симыол разделить пробелом и заменить на Ини код
//
let stringOne = "default test string";

function getCodeStringText(stringOne) {
    let result = "";
    for (let i = 0; i < stringOne.length; i++) {
        result += i ? " " + stringOne.charCodeAt(i) : //Юникодное значение
            stringOne.charCodeAt(i);
    }
    return result;
}
console.log(getCodeStringText(stringOne));

// ===================  task-todo =======//

let todos = [
    {
        text: 'Learn JavaScript',
        id: 0
    },
    {
        text: 'Learn Angular',
        id: 1
    }
];

// Add a new task
function addTask(text) {
    if (typeof text !== 'string') return new Error('text is not a string');
    if (!text.length) return new Error('text empty');

    // Create new task obj
    const newTask = {
        id: todos.length,
        text
    };

    // Add new task
    todos.push(newTask);

    return todos;
}

// Delete task
function deleteTask(id) {
    if (id !== 0 && !id) return new Error('id required');
    if (isNaN(id)) return new Error('id must be a number');
    id = Number(id);

    let todo;

    for (let i = 0; i < todos.length; i++ ) {
        if (todos[i].id === id) {
            todo = todos[i];
            todos.splice(i, 1);
            break;
        }
    }

    return todo || 'task not found';
}

// Edit task

// Сделать функцию editTask  он должен принимать id,
// задачи и новый текст находит в массиве задач задачу с таким же id и менять ее значение поля text.
function editTask(id, taskText) {

    if (id !== 0 && !id) return new Error('id required');
    if (isNaN(id)) return new Error('id must be a number');

    for (let i = 0; i < todos.length; i++ ) {
        if (todos[i].id === id) {
            todos[i].text = taskText;
            break;
        }
    }
    return todos;
}
editTask(1, "learn React");


// В консоле

//addTask('New task')
//deleteTask(2)
//editTask(1, 'Learn  Advansed Angular')

// module 3
//
//
// //============================================= 2
// const formatString = function(str) {
//     if (str.length <= 40) {
//         return str;
//     }
//     return str.slice(0, 40) + "...";
// };
//
// //const formatString = (str) => (str.length <= 40) ? str : str.slice(0, 40) + "...";
//
// //Curabitur ligula sapien, tincidunt non.
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
//
// //Vestibulum facilisis, purus nec pulvinar...
// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
//
// //Curabitur ligula sapien.
// console.log(formatString("Curabitur ligula sapien."));
//
// //Nunc sed turpis. Curabitur a felis in nu...
// console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."));
// //============================================= 3
//
// const checkForSpam = function(str) {
//     const strLow = str.toLowerCase();
//     if (strLow.includes("spam") || strLow.includes("sale")) {
//         return true;
//     }
//     return false;
// };
//
// // const checkForSpam = (str) => str.toLowerCase().includes("spam") || str.toLowerCase().includes("sale");
// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
// //====================================== 5
// //
// // const uniqueNumbers = [2, 1, 4, 9];
// // const addUniqueNumbers = function(...addArr) {
// //     if (!Array.isArray(addArr)) {
// //         return null;
// //     }
// //     let wasAded = 0;
// //     for (let elemAdd of addArr) {
// //         if (!uniqueNumbers.includes(elemAdd)) {
// //             uniqueNumbers.push(elemAdd);
// //             wasAded += 1;
// //         }
// //     }
// //     return wasAded;
// // };
// // // [2, 1, 4, 9, 3]
// // addUniqueNumbers(1, 2, 3);
// // console.log(uniqueNumbers);
// //
// // // [2, 1, 4, 9, 3, 12, 19]
// // addUniqueNumbers(12, 2, 3, 19);
// // console.log(uniqueNumbers);
// //
// // // [2, 1, 4, 9, 3, 12, 19, 5, 8]
// // addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// // console.log(uniqueNumbers);
//
// //====================================== 6
//
// const findLargestNumber = function(numbers) {
//     if (!Array.isArray(numbers) || Number.isNaN(Number(numbers[0]))) {
//         return NaN;
//     }
//     let maxNumber = numbers[0];
//     for (let i = 1; i < numbers.length; i += 1) {
//         if (!Number.isNaN(Number(numbers[i]))) {
//             if (numbers[i] > maxNumber) {
//                 maxNumber = numbers[i];
//             }
//         }
//     }
//     return maxNumber;
// };
// console.log(findLargestNumber([1, 2, 3])); // вернет 3
// console.log(findLargestNumber([27, 12, 18, 5])); // вернет 27
// console.log(findLargestNumber([31, 128, 14, 74])); // вернет 128
//

//============================ HW module -3

//let logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
//
//
// function checkLoginValidity(login){
//     if(login.length >= 4 && login.length <= 16){
//         return true;
//     }
//     return false;
// }
// function checkIfLoginExists(logins, login){
//     return logins.includes(login)
// }
//
// function addLogin(logins, login){
//     if (function checkLoginValidity(login) {
//             if(!checkIfLoginExists(logins, login)) {
//                 logins.push(login);
//                 return  'Логин успешно добавлен!';
//             }
//             return 'Ошибка! Логин должен быть от 4 до 16 символов';
//         };
//     return 'Такой логин уже используется!';
// };
//
// console.log(logins);
// addLogin('Mango');

//==========



