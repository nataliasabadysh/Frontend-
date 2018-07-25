// 5 todo -  Add, Edit, Delete
// ====== task-todo =======//

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



//=========  массив(значения) + обьеки

// исходные данные полученные от сервера

// тело задачи   text: 'Learn JavaScript',
// номер задачи  id: 0
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


//========  Function Creat add task

    // Проверим на текстЕсли
    // Проверим на длинну, что бы не получить пустую строку !text.length

function addTask(text) {

    if (typeof text !== 'sting') return new Error('text is not a string');
    if (!text.length) return new Error('text empty');

// Получим текст от пользовалеля
// + Id

//========= Create new task obj
// id = длинне массива

    const newTask = {
        id: todos.length,
        text: text,
// key mane of object ===  text: text;  то можно записать только text
    };

//========= Add new task
// Добавим в массив с задачами
// return-  весь массив

    todos.push(newTask);   // push, pop, unshift - + в начало массива , shift
    return todos;
}

//========= Delete  task

// Удаляем таск по  id

function deleteTask(id) {
// проверим если у нас этот id
// на то что это НЕ = 0 , потому что наш индекс начинаеться с 0 , так что 0 нас устроит


    if (id !== 0 && !id) return new Error('id required');

// id !== 0 - is НЕ 0  и не  !id = false (undefined '' . . . )



//  если он есть , то теперь приведем к числу (что бы не ввели строку
//  Это  НЕ число ?( если это строка ..) -  тогда выводим обшибку, а если число то мы пропускаем проверку

    if (isNaN(id)) return new Error('id must be a number');

// Мы получили id той задачи которую собераемся удалить

//=======   Найдем среди всех задач и УДАЛИМ

    id = Number(id);  //
    let todo;  // она пустая и когда Мы найдем задачу мы запишем сюда

// а если id совпал то мы его получим    if (todos[i].id === id) {
// записали текущий елемент которыйtodos.splice(i, 1);
//

    for (let i = 0; i < todos.length; i++ ) {
        if (todos[i].id === id) {
// массив , количетво -1   (можно постовить что то на то место 3м значеним)
// Вернем удаленный элемент , который хотят удалить
            todo = todos[i];
            todos.splice(i, 1);
// Цыкл должен остановиться
            break;
        }
    }

// Вся фун-я вернет  todo или  'task not found';

    return todo || 'task not found';
}

// удаляем из массива(c какого индекса - мы его нашли , кол удаляемых элиз массива ,на место можем что то припесать  , , )

