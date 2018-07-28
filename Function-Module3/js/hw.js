"use strict";

let logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const login = prompt('Введите логин');

function checkLoginValidity(login){
    if(login.length >= 4 && login.length <= 16){
        return true;
    }
    return false;
}
function checkIfLoginExists(logins, login){
    return logins.includes(login)
}
function addLogin(logins, login){

    if (checkLoginValidity(login)) {
        if(!checkIfLoginExists(logins, login)) {
            logins.push(login);
            return  alert('Логин успешно добавлен!');
        }
        return alert('Такой логин уже используется!');
    }
    return alert('Ошибка! Логин должен быть от 4 до 16 символов');
}
addLogin(logins, login);
console.log(logins);

// ========================= 1
/*
  Напишите функцию checkNumberType(num)
  Функция получает число num как аргумент и возвращает
  строку "Even" если число четное и строку "Odd" если не четное.
*/
const checkNumberType = (num) => (!Number.isNaN(Number(num))) ? ((num % 2 === 0) ? "Even" : "Odd") : undefined;

console.log(checkNumberType(2)); // 'Even'
console.log(checkNumberType(46)); // 'Even'
console.log(checkNumberType(3)); // 'Odd'
console.log(checkNumberType(17)); // 'Odd'
console.log(checkNumberType("as")); // '???'

// ========================= 2
/*
  Напишите функцию formatString(str)
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее.
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего
    возвращает укороченную версию.
*/

const formatString = (str) => (str.length <= 40) ? str : str.slice(0, 40) + "...";

console.log(formatString("Curabitur ligula sapien, tincidunt non.")); // вернется оригинальная строка
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")); // вернется форматированная строка
console.log(formatString("Curabitur ligula sapien.")); // вернется оригинальная строка
console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")); // вернется форматированная строка

// ========================= 3
/*
  Напишите функцию checkForSpam(str)
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  PS: слова могут быть в произвольном регистре
*/

const checkForSpam = (str) => str.toLowerCase().includes("spam") || str.toLowerCase().includes("sale");

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true


// ========================= 4

/*
  Написать функцию, getPx(str)
  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да,
  возвращать только числовую составляющую, к примеру 10.
  Если была передана не строка, функция возвращает null.
*/
const getPx = (str) => (typeof str !== "string") ? null : Number.parseFloat(str);

console.log(getPx("10px") === 10); // должно быть:  true
console.log(getPx("10.5") === 10.5); // должно быть:  true
console.log(getPx("0") === 0); // должно быть:  true
console.log(getPx(-1)); // должно быть:  null
console.log(getPx(10)); // должно быть:  null

// ========================= 5

/*
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/

console.group(5);
const findLongestWord = function(str) {
    if (str.length < 1) {
        return null;
    }
    const arr = str.split(" ");
    let longWord = "";
    for (let wrd of arr) {
        if (wrd.length > longWord.length) {
            longWord = wrd;
        }
    }
    return longWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // вернет 'jumped'
console.log(findLongestWord("Google do a roll")); // вернет 'Google'
console.log(findLongestWord("May the force be with you")); // вернет 'force'

// ========================= 6
/*
  Создайте функцию findLargestNumber(numbers),
  которая получает массив чисел numbers, и возвращает
  самое большое число в массиве.
*/
console.group(6);
const findLargestNumber = function(numbers) {
    if (!Array.isArray(numbers) || Number.isNaN(Number(numbers[0]))) {
        return NaN;
    }
    let maxNumber = numbers[0];
    for (let i = 1; i < numbers.length; i += 1) {
        if (!Number.isNaN(Number(numbers[i]))) {
            if (numbers[i] > maxNumber) {
                maxNumber = numbers[i];
            }
        }
    }
    return maxNumber;
};

// Вызовы функции для проверки
console.log(findLargestNumber([1, 2, 3])); // вернет 3
console.log(findLargestNumber([27, 12, 18, 5])); // вернет 27
console.log(findLargestNumber([31, 128, 14, 74])); // вернет 128

// ========================= 7
/*
  Есть массив уникальных чисел uniqueNumbers.
  Написать функцию, addUniqueNumbers(...),
  которая получает произвольное кол-во чисел как аргументы,
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/
console.group(7);
const uniqueNumbers = [2, 1, 4, 9];
const addUniqueNumbers = function(...addArr) {
    if (!Array.isArray(addArr)) {
        return null;
    }
    let wasAded = 0;
    for (let elemAdd of addArr) {
        if (!uniqueNumbers.includes(elemAdd)) {
            uniqueNumbers.push(elemAdd);
            wasAded += 1;
        }
    }
    return wasAded;
};

addUniqueNumbers(1, 2, 3);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3]
addUniqueNumbers(12, 2, 3, 19);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19]
addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19, 5, 8]


// ========================= 8
/*
  Создайте функцию removeFromArray(arr),
  которая получает 1 параметр, исходный массив arr.
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел.
  Удалите все элементы из исходного массива,
  которые имеют такое же значение, что и аргументы.
*/

console.group(8);
const removeFromArray = function(arr, ...remElements) {
    if (!Array.isArray(arr)) {
        return [];
    }
    for (let remEl of remElements) {
        if (arr.includes(remEl)) {
            arr.splice(arr.indexOf(remEl), 1);
        }
    }
    return arr;
};
console.log(removeFromArray([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]
console.log(removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)); // [12, 8, 17]
console.groupEnd(8);




