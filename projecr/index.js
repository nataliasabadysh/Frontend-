'use strict';

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
