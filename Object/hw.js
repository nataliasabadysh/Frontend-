//1

const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
};

// добавляет поле mood со значением 'happy'
user.mood ='Happy';

// заменяет значение hobby на 'javascript'
user.hobby ='javascript';

// удаляет свойство premium
delete user.premium;

// выводит содержимое объекта user в формате ключ:значение (используя цикл for...in)
// выводит содержимое объекта user в формате ключ:значение (используя Object.keys и for...of)
// выводит содержимое объекта user в формате ключ:значение ( используя Object.entries и for...of)

console.log(user);


//  2

/*
  Напиште скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99 // Нужно вывесто     lorence: 99
};


// "Обшая сумма выполненных задач с команды :" 164
let total = 0;
for(const key in tasksCompleted){
    total += tasksCompleted[key];
};
const teamWork = total; // Таким образом мы перезаписали обшую смму и выведем один раз ,  total - выведет 4 раза одно и тоже
console.log('Обшая сумма выполненных задач с команды :', teamWork);  // "Обшая сумма выполненных задач с команды :" 164




// =====  3

/*
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки
console.log(
    countProps({})
); // 0

console.log(
    countProps({a: 1, b: 3, c: 'hello'})
); // 3






// ======  4

/*
  Создайте функцию isObjectEmpty(obj), которая получает
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).

  Возвращает true если объект пустой, false если не пустой.
*/

// Вызовы функции для проверки
console.log(
    isObjectEmpty({})
); // true

console.log(
    isObjectEmpty({a: 1})
); // false

console.log(
    isObjectEmpty({a: 1, b: 2})
); // false
