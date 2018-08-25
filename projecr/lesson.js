'use strict';

// <div class="note">
//     <div class="note_content">
//              <p class="note_text">text text tex</p>
//              <p class="note_data"></p>
//     </div>
//     <div class="note_actions">
//          <button class="button"> Изменить</button>
//          <button class="button"> Удалить</button>
//     </div>
//     </div>


// =  note_content

//  <div class="note">
const note = document.createElement('div');
note.classList.add('note');

// <div class="note_content">
const noteContent = document.createElement('div');
noteContent.classList.add('note_content');

// <p class="note_text">
const noteText = document.createElement('p');
noteText.classList.add('note_text');
noteText.textContent = 'Value of Note !';

//  <p class="note_data">
const noteDatas = document.createElement('p');
noteDatas.classList.add('note_data');
noteDatas.textContent = 'Today is 07/06/2018';

// Вложенность
noteContent.append(noteText, noteDatas);
console.log(noteText);


// =  note_actions

const noteActions = document.createElement('div');
noteActions.classList.add('noteActions');

// <button class="button">
const editBtn = document.createElement('button');
editBtn.classList.add('button');
editBtn.textContent = 'Edit ';

// <button class="button">
const deltBtn = document.createElement('button');
deltBtn.classList.add('button');
deltBtn.textContent = 'Delete ';

noteActions.append(editBtn, deltBtn);

//  вложенности тегов .note родитель для .noteContent  .noteActions
note.append(noteContent ,noteActions);

// Содали в памяти разметку
// ЕЕ нужно кудато повесить

// У нас усть пкустая сетка в html - <div class="notes-grid"></div>

const grid = document.querySelector('.notes-grid');
grid.appendChild(note);

// Так мы добавили в разметку наш создынные эл

// -- ======   так в коде это не годиться нужно вынести все в одну фун-ю
// + добавили деструктуризацию


const grid = document.querySelector('.notes-grid');

const note = createNote({
    text: 'Value of Note !',
    data: '07/06/2018',
});

// note - это таже самоя фун-я и мы ее вещаем на  grid - grid.appendChild(note);


grid.appendChild(note);

function createNote({ text, data }) {  // дестроктуризируем Подпист и Дату
    // =  note_content

//  <div class="note">
    const note = document.createElement('div');
    note.classList.add('note');

// <div class="note_content">
    const noteContent = document.createElement('div');
    noteContent.classList.add('note_content');

// <p class="note_text">
    const noteText = document.createElement('p');
    noteText.classList.add('note_text');
    noteText.textContent = text; //  // дестроктуризируем Подпист

//  <p class="note_data">
    const noteDatas = document.createElement('p');
    noteDatas.classList.add('note_data');
    noteDatas.textContent = `Today is ${data}`; //  // дестроктуризируем  Дату

// Вложенность
    noteContent.append(noteText, noteDatas);
    console.log(noteText);


// =  note_actions

    const noteActions = document.createElement('div');
    noteActions.classList.add('noteActions');

// <button class="button">
    const editBtn = document.createElement('button');
    editBtn.classList.add('button');
    editBtn.textContent = 'Edit ';

// <button class="button">
    const deltBtn = document.createElement('button');
    deltBtn.classList.add('button');
    deltBtn.textContent = 'Delete ';

    noteActions.append(editBtn, deltBtn);

//  вложенности тегов .note родитель для .noteContent  .noteActions
    note.append(noteContent ,noteActions);

// ==== funcrion created note и возващает  ссылку на этот обьект
    return note;

}


// ========  Динамически сделаем разметку



const notesList = [
    { text: 'Заметка номер один', date: '07/06/2018' },
    { text: 'Заметка номер два', date: '07/06/2018'},
    { text: 'Заметка номер три', date: '07/06/2018' },
    { text: 'Заметка номер четыре', date: '07/06/2018' },
];
const grid = document.querySelector('.notes-grid');
notesList.forEach(note => console.log(note));

// Пройдемся по массиву

const elements = [];
// На каждой операции будем добовялть createEL
notesList.forEach(note => {
    const el = createNote(note);// передали аргумееты фун-и  приходящее с notesList
    elements.push(el)
});
console.log(elements);

// Мы получили кождой note - как обьект - notesList.forEach(note => console.log(note)); - {text: "Заметка номер один", date: "07/06/2018"}

grid.append(...elements);// распиляем все элеметс  --- Динамически получая от user - notesList

function createNote({ text, data }) {

    const note = document.createElement('div');
    note.classList.add('note');

    const noteContent = document.createElement('div');
    noteContent.classList.add('note_content');

    const noteText = document.createElement('p');
    noteText.classList.add('note_text');
    noteText.textContent = text; //  // дестроктуризируем Подпист

    const noteDatas = document.createElement('p');
    noteDatas.classList.add('note_data');
    noteDatas.textContent = `Today is ${data}`; //  // дестроктуризируем  Дату

    noteContent.append(noteText, noteDatas);
    console.log(noteText);

    const noteActions = document.createElement('div');
    noteActions.classList.add('noteActions');

    const editBtn = document.createElement('button');
    editBtn.classList.add('button');
    editBtn.textContent = 'Edit ';

    const deltBtn = document.createElement('button');
    deltBtn.classList.add('button');
    deltBtn.textContent = 'Delete ';

    noteActions.append(editBtn, deltBtn);

    note.append(noteContent ,noteActions);
    return note;
}


// =========  Завернем все это в функцию


const notesList = [
    { text: 'Заметка номер один', date: '07/06/2018' },
    { text: 'Заметка номер два', date: '07/06/2018'},
    { text: 'Заметка номер три', date: '07/06/2018' },
    { text: 'Заметка номер четыре', date: '07/06/2018' },
];

const grid = document.querySelector('.notes-grid');

const elements = createGridItems(notesList);// елементы запишем в функцию
grid.append(...elements);

function createGridItems(arr) {  //Отвечает за набор элементод для нашей карточки
    const elements = [];

    arr.forEach(note => {
        const el = createNote(note);
        elements.push(el)
    });
    return elements;
}


function createNote({ text, data }) {  // Отвечает за создание Одной карточки
    const note = document.createElement('div');
    note.classList.add('note');

    const noteContent = document.createElement('div');
    noteContent.classList.add('note_content');

    const noteText = document.createElement('p');
    noteText.classList.add('note_text');
    noteText.textContent = text; //  // дестроктуризируем Подпист

    const noteDatas = document.createElement('p');
    noteDatas.classList.add('note_data');
    noteDatas.textContent = `Today is ${data}`; //  // дестроктуризируем  Дату

    noteContent.append(noteText, noteDatas);

    const noteActions = document.createElement('div');
    noteActions.classList.add('noteActions');

    const editBtn = document.createElement('button');
    editBtn.classList.add('button');
    editBtn.textContent = 'Edit ';

    const deltBtn = document.createElement('button');
    deltBtn.classList.add('button');
    deltBtn.textContent = 'Delete ';

    noteActions.append(editBtn, deltBtn);

    note.append(noteContent ,noteActions);

    return note;
}

// цикл замени на reduse


const notesList = [
    { text: 'Заметка номер один', date: '07/06/2018' },
    { text: 'Заметка номер два', date: '07/06/2018'},
    { text: 'Заметка номер три', date: '07/06/2018' },
    { text: 'Заметка номер четыре', date: '07/06/2018' },
];

const grid = document.querySelector('.notes-grid');

const elements = createGridItems(notesList);
grid.append(...elements);

function createGridItems(arr) {
    return arr.reduce((acc, el) => acc.concat(createNote(el)), []);
}

// function createGridItems(arr) {
//
//     // (acc, el)-  acc - аккумулято  и один обьект ( { text: 'Заметка номер один', date: '07/06/2018' },)
//
//     //  На кождой итерации мы вернем
//     // concat с тем что прийдет с createNote с аккумулятором - createNote(el), [])
//     //  возвращаю его
//
//     const res = arr.reduce(
//         (acc, el) => acc.concat(createNote(el),
//             [])
//     );
// }

function createNote({ text, data }) {  // Отвечает за создание Одной карточки
    const note = document.createElement('div');
    note.classList.add('note');

    const noteContent = document.createElement('div');
    noteContent.classList.add('note_content');

    const noteText = document.createElement('p');
    noteText.classList.add('note_text');
    noteText.textContent = text; //  // дестроктуризируем Подпист

    const noteDatas = document.createElement('p');
    noteDatas.classList.add('note_data');
    noteDatas.textContent = `Today is ${data}`; //  // дестроктуризируем  Дату

    noteContent.append(noteText, noteDatas);

    const noteActions = document.createElement('div');
    noteActions.classList.add('noteActions');

    const editBtn = document.createElement('button');
    editBtn.classList.add('button');
    editBtn.textContent = 'Edit ';

    const deltBtn = document.createElement('button');
    deltBtn.classList.add('button');
    deltBtn.textContent = 'Delete ';

    noteActions.append(editBtn, deltBtn);

    note.append(noteContent ,noteActions);

    return note;
}


//   =====!!   Сократим написание ФУНКЦИИ -  createNote  !!* ====


// Function...
//
// // const noteActions = document.createElement('div');
// // noteActions.classList.add('noteActions');
// ===> const noteActions = $cel('div', { className: 'note__actions' });
//
//
// // ==  Edid
// // const editBtn = document.createElement('button');
// // editBtn.classList.add('button');
// // editBtn.textContent = 'Edit ';
// ====>  const editBtn = $cel('button', { className: 'button' }, 'Изменить');
//
// // ==== Delete
// // const deltBtn = document.createElement('button');
// // deltBtn.classList.add('button');
// // deltBtn.textContent = 'Delete ';
//====>  const delBtn = $cel('button', { className: 'button' }, 'Удалить');  // tad= button, обькт настроей { className: 'button' }
//
// noteActions.append(editBtn, deltBtn);
//
// note.append(noteContent ,noteActions);
//
// return note;
// }



function createNote({ text, date }) {
    const note = $cel('div', { className: 'note' });
    const noteContent = $cel('div', { className: 'note__content' });
    const noteText = $cel('p', { className: 'note__text' }, text);
    const noteDate = $cel('p', { className: 'note__date' }, `Создано: ${date}`);

    const editBtn = $cel('button', { className: 'button' }, 'Изменить');
    const delBtn = $cel('button', { className: 'button' }, 'Удалить');

    noteContent.append(noteText, noteDate);
    noteActions.append(editBtn, delBtn);
    note.append(noteContent, noteActions);

    return note;
}

// ==  ============  Добавим эл как строка
// без createEl ..



const notesList = [
    { text: 'Заметка номер один', date: getTimeStamp() },
    { text: 'Заметка номер два', date: getTimeStamp()},
    { text: 'Заметка номер три', date: getTimeStamp() },
    { text: 'Заметка номер четыре', date: getTimeStamp() },
];

const grid = $qs('.notes-grid');

function createGridItems(arr) {
    return arr.reduce((acc, el) => acc.concat(createNote(el)), []);
}
const markup = createGridItemsMarkup(notesList);
grid.innerHTML = markup;   // innerHTML = распарсим

function createGridItemsMarkup(arr) {
    return arr.reduce(
        (acc, obj) => acc + createNoteMarkup(obj),
        ''
    );

    // let markup = '';
    // arr.forEach(note => {
    //   const html = createNoteMarkup(note);
    //   markup += html; });
    // return markup;
}

function createNoteMarkup({ text, date }) {
    return `
  <div class="note">
    <div class="note__content">
      <p class="note__text">${text}</p>
      <p class="note__date">Создано: ${date}</p>
    </div>
    <div class="note__actions">
      <button class="button">Изменить</button>
      <button class="button">Удалить</button>
    </div>
  </div>
  `;
}

function getTimeStamp() {
    return new Date().toLocaleDateString();
}
