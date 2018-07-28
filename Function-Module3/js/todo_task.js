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


