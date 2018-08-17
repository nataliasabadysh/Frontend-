/*
  Напишите функцию-конструктор StringBuilder.
  На вход она получает один параметр string - строку.
  Добавьте следующие методы в prototype функции-конструктора.

    - getValue() - выводит в консоль текущее значение поля value

    - append(str) - получает парметр str - строку и добавляет
      ее в конец значения поля value

    - prepend(str) - получает парметр str - строку и добавляет
      ее в начало значения поля value

    - pad(str) - получает парметр str - строку и добавляет
      ее в начало и в конец значения поля value
*/


function StringBuilder(string = "") {
    this.value = string;
}
// getValue() - выводит в консоль текущее значение поля value
StringBuilder.prototype.getValue = function(){
     this.value = value;
};

// append(str) - получает парметр str - строку и добавляет ее в конец значения поля value
StringBuilder.prototype.append = function(str){
    this.value = push(str);
};

// prepend(str) - получает парметр str - строку и добавляет ее в начало значения поля value
StringBuilder.prototype.append =  function(str){
    this.value = unshift(this.value);
};

//    - pad(str) - получает парметр str - строку и добавляет ее в начало и в конец значения поля value
StringBuilder.prototype.append = function(str){
    this.value  = unshift(this.value) + push(str);
};

Str.prototype.showValue = () => {
    console.log(`${this.append()}`);
};

const myString = new StringBuilder('.');

myString.append('^');
myString.showValue(); // '.^'

myString.prepend('^');
myString.showValue(); // '^.^'

myString.pad('=');
myString.showValue(); // '=^.^='
