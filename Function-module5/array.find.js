'use strct'

const users = [
    { id: "000", name: "Mango", isActive: true },
    { id: "001", name: "Poly", isActive: false },
    { id: "002", name: "Ajax", isActive: true },
    { id: "003", name: "Chelsey", isActive: false }
];

// Для каждого элемента коллекции (user) проверим
// поле id. Если оно совпадает с искомым идентификатором, то
// find прекратить дальнейшее выполнение и вернет текущий
// элемент (user) как результат выполнения

const user = users.find(user => user.id === "002"); //{id: "002", name: "Ajax", isActive: true}
console.log(user);

// Создадим функцию которая будет возвращать нам пользователя по id
const getUserById = (arr, id) => arr.find(x => x.id === id);

console.log( getUserById(users, "001") );   //{ id: "001", name: "Poly", isActive: false}
console.log( getUserById(users, "003") );  // { id: "003", name: "Chelsey", isActive: false}

//  Найдем имя
const userName = users.find(userName => userName.name === "Mango");
console.log(userName);   // {id: "000", name: "Mango", isActive: true}


// Селекторы - это функции которое что то выберают по какому то критерию

const getActiveGuest  = arr => arr.filter(el => el.isActive);
//Это - Селекторы -  из колекции по критериямэто выберает данные которые нам нужно

const activeGuest = getActiveGuest(users);
console.log(activeGuest); //{id: "000", name: "Mango", isActive: true}  {id: "002", name: "Ajax", isActive: true}
