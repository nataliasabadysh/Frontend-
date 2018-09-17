'use strict'

// const noteEditor = document.querySelector('.js-note-editor');  // <form class="js-note-editor">
// const input = noteEditor.querySelector('input');  // <form class="js-note-editor">
// const  noteList = document.querySelector('.note-list');
//
// noteEditor.addEventListener('submit',handelSubmit); // вешаем событие на кнопку
//
//
//
// function handelSubmit(event) {
//     event.preventDefault(); //Запретили браузеру выполнять по умолчанию события -  что бы submit  не перезагружал страницу
//
//     const text = input.value;// текущее значение нашего input хрониться в обьекте value
//
//
//     //console.log(text);
//     const markup = createNoteMark(text);
//     // input.value = '';  -1й авреан + пустую строку   очистем поле input после отправки
//     // console.log(markup); - разметка
//
//
//     noteList.insertAdjacentHTML('afterbegin', markup); // уже есть разметка мы хотим Добавим  в конец или начало
//     this.reset();// =  noteEditor.reset(); - сбросятся поля в исходное состояние
// }
//
//
// // func - которая создает одну карточку
// function createNoteMark(text) { // принемает текс и возвращает шаблонную строку
//     return `
//     <li class="note">
//         <p>${text}</p>
//         <button class="button">Delete</button>
//     </li> `;
//
// }

// // = 1 Обработаем удаление каждого элемента
//
// const noteEditor = document.querySelector('.js-note-editor');
// const input = noteEditor.querySelector('input');
// noteEditor.addEventListener('submit',handelSubmit);
//
//
// // Удаление эл
//
// const  noteList = document.querySelector('.note-list'); //  наш ul
// noteList.addEventListener('click', handlerNoteListClick);
// // event на ul - на весь лист , и нам не нужно отслеживать каждую кнопку, только один обработчик
//
// function handlerNoteListClick(evt) {
// // Будем искать что это за Target
//     console.log(evt);
//
//     const nodeName = evt.target.nodeName;
// // Пожалуйста мне у event target возми nodeName и покажи что это
//     console.log(nodeName);
// // Если я кликну на кнопку - BUTTON
// // Если я кликну на текст - p
//     if(nodeName === 'BUTTON'){
//         console.log('button click');
//
//         const parent = evt.target.parentNode; // parentNode - это li
//         parent.remove();
//     }
// }
// // Удалили эл
//
// function handelSubmit(event) {
//     event.preventDefault();
//
//     const text = input.value;
//
//     const markup = createNoteMark(text);
//
//     noteList.insertAdjacentHTML('afterbegin', markup);
//
//     this.reset();
// }
//
// function createNoteMark(text) {
//     return `
//     <li class="note">
//         <p>${text}</p>
//         <button class="button">Delete</button>
//     </li> `;
// }


// 2


// const noteEditor = document.querySelector('.js-note-editor');
// const input = noteEditor.querySelector('input');
// const  noteList = document.querySelector('.note-list');
//
// noteEditor.addEventListener('submit',handelSubmit);
// noteList.addEventListener('click', handlerNoteListClick);
//
// function handlerNoteListClick(evt) {
//     const nodeName = evt.target.nodeName;
//     const action = evt.target.dataset.action;
//
//     if(nodeName !== 'BUTTON' || action !== 'delete-note') return;
//
//     //const parent = evt.target.parentNode;
//     const parent = evt.target.closest('.note');
//
//     parent.remove();
//
// }
//
// function handelSubmit(event) {
//     event.preventDefault();
//
//     const text = input.value;
//
//     const markup = createNoteMark(text);
//
//     noteList.insertAdjacentHTML('afterbegin', markup);
//
//     this.reset();
// }
//
// function createNoteMark(text) {
//     return `
//     <li class="note">
//         <p>${text}</p>
//         <div class="actions">
//             <button class="button" data-action="edit-note">Edit</button>
//             <button class="button" data-action="delete-note">Delete</button>
//         </div>
//     </li> `;
// }






// 3


document.addEventListener('DOMContentLoaded', () => {
    const noteEditor = document.querySelector('.js-note-editor');
    const input = noteEditor.querySelector('input');
    const noteList = document.querySelector('.note-list');

    noteEditor.addEventListener('submit', handleSubmit);
    noteList.addEventListener('click', handleNoteListClick);

    function handleSubmit(evt) {
        evt.preventDefault();

        const text = input.value;

        const markup = createNoteMarkup(text);
        noteList.insertAdjacentHTML('afterbegin', markup);

        noteEditor.reset();
    }
});

function handleNoteListClick(evt) {

    const target = evt.target;
    const nodeName = target.nodeName;
    const action = target.dataset.action;

    if (nodeName !== 'BUTTON' || action !== 'delete-note') return;

    // const parent = evt.target.parentNode.parentNode;
    const parent = target.closest('.note');
    parent.remove();
}

function createNoteMarkup(text) {
    return `
    <li class="note">
      <p>${text}</p>
      <div class="actions">
        <button class="button" data-action="delete-note">Delete</button>
        <button class="button" data-action="edit-note">Edit</button>
      </div>
    </li>`;
}





