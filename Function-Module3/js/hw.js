"use strict";

let logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];


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
    if (function checkLoginValidity(login) {
            if(!checkIfLoginExists(logins, login)) {
                logins.push(login);
                return  'Логин успешно добавлен!';
            }
            return 'Ошибка! Логин должен быть от 4 до 16 символов';
        };
    return 'Такой логин уже используется!';
};

console.log(logins);
addLogin('Mango');

