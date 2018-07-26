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