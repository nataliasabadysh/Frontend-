'use strict';

const api = {
  baseUrl: 'http://localhost:3000/notes',
  getAllNotes() {
    return fetch(this.baseUrl)
      .then(response => {
        if (response.ok) return response.json();

        throw new Error('Error while fetching ' + response.statusText);
      })
      .catch(error => console.log(error));
  },
  addNote(note) {
    return fetch(this.baseUrl, {
      method: 'POST',
      body: JSON.stringify(note),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then(response => {
        if (response.ok) return response.json();

        throw new Error('Error while fetching ' + response.statusText);
      })
      .catch(error => console.log(error));
  },
  deleteNote(id) {
    return fetch(`${this.baseUrl}/${id}`, { method: 'DELETE' })
      .then(response => {
        if (!response.ok) throw new Error('Неполучилось удалить!!!');
      })
      .catch(error => console.log(error));
  },
  updateNote(note) {
    return fetch(`${this.baseUrl}/${note.id}`, {
      method: 'PATCH',
      body: JSON.stringify(note),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) return response.json();

        throw new Error('Error while fetching ' + response.statusText);
      })
      .catch(error => console.log(error));
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const refs = selectRefs();
  const state = { selectedId: null };

  refs.noteEditor.addEventListener('submit', handleNoteEditorSubmit);
  refs.noteList.addEventListener('click', handleNoteListClick);
  refs.modal.addEventListener('click', handleModalClick);

  init();

  /**
   * Helper functions
   */

  function init() {
    api.getAllNotes().then(notes => {
      const markup = notes.reduce(
        (acc, note) => acc + createNoteMarkup(note),
        '',
      );

      refs.noteList.insertAdjacentHTML('afterbegin', markup);
    });
  }

  function handleNoteEditorSubmit(e) {
    e.preventDefault();

    const text = refs.noteEditorInput.value.trim();

    if (text === '') return alert('Нельзя добавить пустую заметку!!!');

    api.addNote({ text }).then(note => {
      const markup = createNoteMarkup(note);
      refs.noteList.insertAdjacentHTML('beforeend', markup);
    });

    refs.noteEditor.reset();
  }

  function handleNoteListClick({ target }) {
    if (target.nodeName !== 'BUTTON') return;

    const action = target.dataset.action;

    switch (action) {
      case 'delete':
        deleteNote(target);
        break;

      case 'edit':
        editNoteStart(target);
        break;

      default:
        throw new Error('Unrecognized action type ' + action);
    }
  }

  function handleModalClick({ target }) {
    if (target.nodeName !== 'BUTTON') return;

    const action = target.dataset.action;

    switch (action) {
      case 'close':
        editNoteCancel();
        break;

      case 'save':
        editNoteSuccess();
        break;

      default:
        throw new Error('Unrecognized action type ' + action);
    }
  }

  function deleteNote(target) {
    const note = target.closest('.note');
    const noteIdToDelete = Number(note.dataset.id);

    api.deleteNote(noteIdToDelete).then(() => {
      note.remove();
    });
  }

  function editNoteStart(target) {
    const note = target.closest('.note');
    const noteIdToEdit = Number(note.dataset.id);
    state.selectedId = noteIdToEdit;

    const noteText = note.querySelector('.text').textContent;

    refs.modalInput.value = noteText;

    toggleModal();
  }

  function editNoteCancel() {
    state.selectedId = null;
    refs.modalInput.value = '';
    toggleModal();
  }

  function editNoteSuccess() {
    const noteToUpdate = {
      id: state.selectedId,
      text: refs.modalInput.value,
    };

    api.updateNote(noteToUpdate).then(updatedNote => {
      const noteTextEl = refs.noteList.querySelector(
        `.note[data-id="${updatedNote.id}"] .text`, // получили тег р
      );

      noteTextEl.textContent = updatedNote.text; //обновили наш текст

      toggleModal(); // pfrhsnm jryj
    });
  }

  function createNoteMarkup({ id, text }) {
    return `
    <li class="note" data-id="${id}">
      <div class="actions">
        <button class="button" data-action="edit">Редактировать</button>
        <button class="button" data-action="delete">Удалить</button>
      </div>
      <p class="text">${text}</p>
    </li>
  `;
  }

  function toggleModal() {
    refs.modalBackdrop.classList.toggle('is-visible');
  }

  function selectRefs() {
    const refs = {};

    refs.noteEditor = document.querySelector('.note-editor');
    refs.noteEditorInput = refs.noteEditor.querySelector('textarea');
    refs.noteList = document.querySelector('.note-list');
    refs.modal = document.querySelector('.modal');
    refs.modalInput = refs.modal.querySelector('textarea');
    refs.modalBackdrop = document.querySelector('.backdrop');

    return refs;
  }
});














// const API_URL = 'http://localhost:3000/notes'; // global vareble = url our backend
//
// const refs = {
//     noteEdotor : document.querySelector('.note-editor'),
//     noteEdotorInput :document.querySelector('.note-editor textarea'),
//     noteList: document.querySelector('.note-list'),
//
//     // Modal
//     modal: document.querySelector('.modal'), //добавим слушателя на модал окно
//     modalInput: document.querySelector('.modal textarea'), // ссылка на textarea
//     modalBackdrop : document.querySelector('.backdrop'),
//
// };
//
//
// // состояние нашего приложения
//
//
// const state  = {
//     selectedId: null, // пустота
// };
//
//
// init();
//
// // events
// refs.noteEdotor.addEventListener('submit',handelNoteEditorSubmit);
// refs.noteList.addEventListener('click',handelNoteListClick);
// refs.modal.addEventListener('click', handelModalClick);
//
// function init(){
//     fetch(API_URL)
//         .then(response => response.json()
//             .then(notes =>{
//                 const murcup = notes.reduce((acc, note) => acc + createNoteMarkup(note), '');
//                 refs.noteList.insertAdjacentHTML('afterbegin', murcup);
//
//
//             })
//         )}
// function createNoteMarkup({ id, text }) {
//     return `
//     <li class="note" data-id="${id}">
//       <div class="actions">
//         <button class="button" data-action="edit">Редактировать</button>
//         <button class="button" data-action="delete">Удалить</button>
//       </div>
//       <p class="text">${text}</p>
//     </li>
//   `;
//   }
// function handelNoteEditorSubmit(e) {
//   e.preventDefault();
//
//     const text = refs.noteEdotorInput.value.trim();
//
//     if(text === '')return alert("Нельзя добавить пустую заметку  ");
//       const noteToAdd = {text,};
//
//     refs.noteEdotor.reset();
//     fetch(API_URL,{
//       method:'POST',
//         body: JSON.stringify( noteToAdd ),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         },
//     })
//         .then(response => response.json())
//         .then(note => {
//           const murkup  = createNoteMarkup(note);
//             refs.noteList.insertAdjacentHTML('beforeend', murkup);
//         })
//         .catch(error => console.log(error))
// }
// function handelNoteListClick({ target }) {
//
//     if(target.nodeName !== 'BUTTON') return;
//
//     const action = target.dataset.action;
//     switch(action){
//         case  'edit':
//             updateNote(target);
//             break;
//         case  'delete' :
//             deleteNote(target);
//             break;
//         default: throw new Error ('Unrecognzed active type ' + action)
//     }
// }
// function updateNote(target) {
//     const note = target.closest('.note'); // li
//     const noteIdToUpdate = Number(note.dataset.id);
//
//     state.selectedId = noteIdToUpdate;
// // при клике редакттировать запишем id в обьет state с полем selectedId
//
//     const noteContent = note.querySelector('text').textContent; //возмем содержание тега
//
//     refs.modalInput.value = noteContent;  // записали туда value
//     // а потом открыли
//     toggleModel();
//
// }
// function deleteNote(target) {
//
//     const note = target.closest('.note'); // li
//     const noteIdToDelete = Number(note.dataset.id);
//
//     // Способ удаления
//     fetch(`${API_URL}/${noteIdToDelete}`, { method: 'DELETE'})
//         .then(response =>{
//             if(!response.ok){ throw new Error('Неполучилось удалить !')}
//             note.remove();
//         })
//         .catch(error => console.log(error))
// }
// // modal
// function handelModalClick({ target }) {
//     if(target.nodeName !== 'BUTTON') return;
//
//     const action = target.dataset.action;
//     switch(action){
//         case  'close':
//             toggleModel();
//             break;
//         case  'save' :// нужно получить доступ к id того (ли)note - которую мы редактируем
//             saveNote();
//             break;
//         default: throw new Error ('Unrecognzed active type ' + action)
//     }
// }
//
// function toggleModel() {
//     refs.modalBackdrop.classList.toggle('is-visible')
// }
// function saveNote () {
//     const updateNoteContend = refs.modalInput.value; // текушее значение
//     const NoteIdToUpdate = state.selectedId;
//
//
// }


// 15min














// <li class="note" data-id ='666'>
//
//     <div class="actions">
//     <button class="button" data-action="edit">Сохранить</button>
//     <button class="button" data-action="delete">Отмена</button>
//     </div>
//     <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eligendi excepturi, facere harum in nisi optio perspiciatis qui repellendus voluptatem.</p>
// </li>



// //Casha
// const api = {
//   baseUrl: 'http://localhost:3000/notes',
//   getAllNotes() {
//     return fetch(this.baseUrl)
//       .then(response => {
//         if (response.ok) return response.json();
//
//         throw new Error('Error while fetching ' + response.statusText);
//       })
//       .catch(error => console.log(error));
//   },
//   addNote(note) {
//     return fetch(this.baseUrl, {
//       method: 'POST',
//       body: JSON.stringify(note),
//       headers: { 'Content-type': 'application/json; charset=UTF-8' },
//     })
//       .then(response => {
//         if (response.ok) return response.json();
//
//         throw new Error('Error while fetching ' + response.statusText);
//       })
//       .catch(error => console.log(error));
//   },
//   deleteNote(id) {
//     return fetch(`${this.baseUrl}/${id}`, { method: 'DELETE' })
//       .then(response => {
//         if (!response.ok) throw new Error('Неполучилось удалить!!!');
//       })
//       .catch(error => console.log(error));
//   },
//   updateNote(note) {
//     return fetch(`${this.baseUrl}/${note.id}`, {
//       method: 'PATCH',
//       body: JSON.stringify(note),
//       headers: {
//         'Content-type': 'application/json',
//       },
//     })
//       .then(response => {
//         if (response.ok) return response.json();
//
//         throw new Error('Error while fetching ' + response.statusText);
//       })
//       .catch(error => console.log(error));
//   },
// };
//
// document.addEventListener('DOMContentLoaded', () => {
//   const refs = selectRefs();
//   const state = { selectedId: null };
//
//   refs.noteEditor.addEventListener('submit', handleNoteEditorSubmit);
//   refs.noteList.addEventListener('click', handleNoteListClick);
//   refs.modal.addEventListener('click', handleModalClick);
//
//   init();
//
//   /**
//    * Helper functions
//    */
//
//   function init() {
//     api.getAllNotes().then(notes => {
//       const markup = notes.reduce(
//         (acc, note) => acc + createNoteMarkup(note),
//         '',
//       );
//
//       refs.noteList.insertAdjacentHTML('afterbegin', markup);
//     });
//   }
//
//   function handleNoteEditorSubmit(e) {
//     e.preventDefault();
//
//     const text = refs.noteEditorInput.value.trim();
//
//     if (text === '') return alert('Нельзя добавить пустую заметку!!!');
//
//     api.addNote({ text }).then(note => {
//       const markup = createNoteMarkup(note);
//       refs.noteList.insertAdjacentHTML('beforeend', markup);
//     });
//
//     refs.noteEditor.reset();
//   }
//
//   function handleNoteListClick({ target }) {
//     if (target.nodeName !== 'BUTTON') return;
//
//     const action = target.dataset.action;
//
//     switch (action) {
//       case 'delete':
//         deleteNote(target);
//         break;
//
//       case 'edit':
//         editNoteStart(target);
//         break;
//
//       default:
//         throw new Error('Unrecognized action type ' + action);
//     }
//   }
//
//   function handleModalClick({ target }) {
//     if (target.nodeName !== 'BUTTON') return;
//
//     const action = target.dataset.action;
//
//     switch (action) {
//       case 'close':
//         editNoteCancel();
//         break;
//
//       case 'save':
//         editNoteSuccess();
//         break;
//
//       default:
//         throw new Error('Unrecognized action type ' + action);
//     }
//   }
//
//   function deleteNote(target) {
//     const note = target.closest('.note');
//     const noteIdToDelete = Number(note.dataset.id);
//
//     api.deleteNote(noteIdToDelete).then(() => {
//       note.remove();
//     });
//   }
//
//   function editNoteStart(target) {
//     const note = target.closest('.note');
//     const noteIdToEdit = Number(note.dataset.id);
//     state.selectedId = noteIdToEdit;
//
//     const noteText = note.querySelector('.text').textContent;
//
//     refs.modalInput.value = noteText;
//
//     toggleModal();
//   }
//
//   function editNoteCancel() {
//     state.selectedId = null;
//     refs.modalInput.value = '';
//     toggleModal();
//   }
//
//   function editNoteSuccess() {
//     const noteToUpdate = {
//       id: state.selectedId,
//       text: refs.modalInput.value,
//     };
//
//     api.updateNote(noteToUpdate).then(updatedNote => {
//       const noteTextEl = refs.noteList.querySelector(
//         `.note[data-id="${updatedNote.id}"] .text`,
//       );
//
//       noteTextEl.textContent = updatedNote.text;
//
//       toggleModal();
//     });
//   }
//
//   function createNoteMarkup({ id, text }) {
//     return `
//     <li class="note" data-id="${id}">
//       <div class="actions">
//         <button class="button" data-action="edit">Редактировать</button>
//         <button class="button" data-action="delete">Удалить</button>
//       </div>
//       <p class="text">${text}</p>
//     </li>
//   `;
//   }
//
//   function toggleModal() {
//     refs.modalBackdrop.classList.toggle('is-visible');
//   }
//
//   function selectRefs() {
//     const refs = {};
//
//     refs.noteEditor = document.querySelector('.note-editor');
//     refs.noteEditorInput = refs.noteEditor.querySelector('textarea');
//     refs.noteList = document.querySelector('.note-list');
//     refs.modal = document.querySelector('.modal');
//     refs.modalInput = refs.modal.querySelector('textarea');
//     refs.modalBackdrop = document.querySelector('.backdrop');
//
//     return refs;
//   }
// });
