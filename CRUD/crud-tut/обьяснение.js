'use strict';
const API_URL = 'http://localhost:3000/notes'; // global vareble = url our backend

const refs = {
    noteEdotor : document.querySelector('.note-editor'),
    noteEdotorInput :document.querySelector('.note-editor textarea'),
    noteList: document.querySelector('.note-list'),

    // Modal
    modalBackdrop : document.querySelector('.backdrop'),
};
init();
refs.noteEdotor.addEventListener('submit',handelNodeEditorSubmit);

// выведем все заметки - полученные от пользователя на разметку
// =====
//получили эл - обьект


// function init() {
//   fetch(API_URL)
//       .then(response => response.json()     // API_URL - передали get - запрос
//       .then(notes => console.log(notes)));  // доступны el - notes - это массив обьктов
//                                              // и мыжем с получееных данных отрисовать на странице пройдя
// по всем note reduse - наш массив
// }
// вывели в разметку , При загрузке стриници что то сразу забераем
// function init() {
//     fetch(API_URL)
//         .then(response => response.json()  // API_URL - передали get - запрос
//             .then(notes =>{
//                 const murcup = notes.reduce((acc, note) => acc + createNoteMarkup(note), ''); //note - это один обькт в массиве
//
//
//                 //console.log(murcup);  получим обьекты в разметке с подставленными значениями с  Бэкенда
//                 // вставим его в тег .note-list
//                 refs.noteList.insertAdjacentHTML('afterbegin', murcup);
//             })
//         )
// }

function init() {
    fetch(API_URL)
        .then(response => response.json()
            .then(notes =>{
                const murcup = notes.reduce((acc, note) => acc + createNoteMarkup(note), '');
                refs.noteList.insertAdjacentHTML('afterbegin', murcup);


            })
        )}
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

//Теперь будем nodeEditor слушать события
function handelNodeEditorSubmit(e) {
    e.preventDefault(); // Запрещаем события по умолчинию

    const text = refs.noteEdotorInput.value.trim(); // value в нашей textarea , trim() - значение слево и право

    // проверим на пустую строку

    if(text === '')return alert("Нельзя добавить пустую заметку  ");  // то просто выходим
    const noteToAdd = {text,};   // id мы на клиенте не добовляем

    refs.noteEdotor.reset(); // сбросим все поля в исходное состояние

    // GET - reques - сначала нужнет ответ от сервера
    fetch(API_URL,{
        method:'POST', // Created POST
        body: JSON.stringify( noteToAdd ), // Добовляем Что бы он работал нужен  headers
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    })
    // и теперь мы ждем ответа от сервера , как только аполучили мы можем рисовать в разметке
        .then(response => response.json())
        .then(notes => {
            const murkup  = createNoteMarkup(note); // note -которая пришла
            refs.noteList.insertAdjacentHTML('beforeend', murkup);
        })
        .catch(error => console.log(error))
    // body -толе нашего POST - запросса  что нашему серверу  нужно добавить

}
/*
.=====  Теперь сделаем Удаление .

    Для того что бы что то удалить нам нужет на запросе delete on fetch
У нас все наши ЛИ лежать внутли ЛИСТА _ тоесть работа с колекцией
-  Нам нужно Делегирование на note-list и будем слушать клики

 */

'use strict';
const API_URL = 'http://localhost:3000/notes'; // global vareble = url our backend

const refs = {
    noteEdotor : document.querySelector('.note-editor'),
    noteEdotorInput :document.querySelector('.note-editor textarea'),
    noteList: document.querySelector('.note-list'),

    // Modal
    modalBackdrop : document.querySelector('.backdrop'),
};
init();
refs.noteEdotor.addEventListener('submit',handelNodeEditorSubmit);
refs.noteList.addEventListener('click',handelNodeListClick); // для удаления - делегирование

function init() {
    fetch(API_URL)
        .then(response => response.json()
            .then(notes =>{
                const murcup = notes.reduce((acc, note) => acc + createNoteMarkup(note), '');
                refs.noteList.insertAdjacentHTML('afterbegin', murcup);


            })
        )}
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
function handelNodeEditorSubmit(e) {
    e.preventDefault();

    const text = refs.noteEdotorInput.value.trim();

    if(text === '')return alert("Нельзя добавить пустую заметку  ");
    const noteToAdd = {text,};

    refs.noteEdotor.reset();
    fetch(API_URL,{
        method:'POST',
        body: JSON.stringify( noteToAdd ),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    })
        .then(response => response.json())
        .then(note => {
            const murkup  = createNoteMarkup(note);
            refs.noteList.insertAdjacentHTML('beforeend', murkup);
        })
        .catch(error => console.log(error))
}  // метод обычно не Деструктуризируют а только свойства

// function handelNodeListClick(e) {
// }

function handelNodeListClick({ target }) {  //  Деструктуризирование  свойства
    // возмет свойства - таргет  с нашего ивента handelNodeListClick -фуни
    // и выкенет его локаально

    if(target.nodeName !== 'BUTTON') return;
    //Убедимся что не кликают ни на какие другие кнопки
    // nodeName - это свойство
    // return -мы нечего не делаем выходим с фун-я

    // а в противном случаии
    //  console.log(target); // <button ... удалить или редактировать


    // КАк отлечить кнопку от Редактирования и Удалить data-set artibute помогут

    const action = target.dataset.action;
    //console.log(action); //получим строку -  delete / edit

// Подойдет на СВИЧ -
    switch(action){
        case  'edit':
            //console.log('watch edit');
            break;
        case  'delete' :
            // console.log('watch delete');
            deleteNote(target);// target  = button тоесть // button .actions
            break;


// если это у нас ощибка или у клиента то можно выбросить ошибку
        default: throw new Error ('Unrecognzed active type ' + action)
    }

}

// сделаем логику для удаления
function deleteNote(target) {
    // console.log(target.parentNode);// button .actions
    // console.log(target.parentNode.parentNode);// button .actions + li

    // Лучше использовать closest + по селектору
    // происходит клик на удалить и closest - идет на уровень вверх , родителя с таким селектором находит

    const note = target.closest('.note'); // li
    console.log(note);

    // теперь нам нужен запрос на удаление

    // уродителя нужно получить запрос на индефикатор в data-id =по номеру айдишника

    // id-string а на бэкЭнде как числа поетому нужно приоброзовать в Число
    const noteIdToDelete = Number(note.dataset.id);

    // Способ удаления
    fetch(`${API_URL}/${noteIdToDelete}`, { method: 'DELETE'})
        .then(response =>{
            if(!response.ok) throw new Error('Неполучилось удалить !');

            note.remove();
        })
    // .then() если выполнется первый then то значит все хорошо а если нет то поудет к catch
}
// Мы сделали стандартный паторн -
// сначала просим БЭКэнд что то сделать
// ждем ответа и только потом что то удаляем


// результат удаления

function deleteNote(target) {
    const note = target.closest('.note'); // li
    const noteIdToDelete = Number(note.dataset.id);
    fetch(`${API_URL}/${noteIdToDelete}`, { method: 'DELETE'})
        .then(response =>{
            if(!response.ok){ throw new Error('Неполучилось удалить !')};
            note.remove();
        }).catch(error => console.log(error))
}

// ===== Добавили   modal window (закривается ооткрываеться )  при нажатии на редактирование


'use strict';
const API_URL = 'http://localhost:3000/notes'; // global vareble = url our backend

const refs = {
    noteEdotor : document.querySelector('.note-editor'),
    noteEdotorInput :document.querySelector('.note-editor textarea'),
    noteList: document.querySelector('.note-list'),

    // Modal
    modalBackdrop : document.querySelector('.backdrop'),
    modal: document.querySelector('.modal'), //добавим слушателя на модал окно
};
init();

// events
refs.noteEdotor.addEventListener('submit',handelNoteEditorSubmit);
refs.noteList.addEventListener('click',handelNoteListClick);
refs.modal.addEventListener('click', habdelModalClick); // add event

function init(){
    fetch(API_URL)
        .then(response => response.json()
            .then(notes =>{
                const murcup = notes.reduce((acc, note) => acc + createNoteMarkup(note), '');
                refs.noteList.insertAdjacentHTML('afterbegin', murcup);


            })
        )}
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
function handelNoteEditorSubmit(e) {
    e.preventDefault();

    const text = refs.noteEdotorInput.value.trim();

    if(text === '')return alert("Нельзя добавить пустую заметку  ");
    const noteToAdd = {text,};

    refs.noteEdotor.reset();
    fetch(API_URL,{
        method:'POST',
        body: JSON.stringify( noteToAdd ),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    })
        .then(response => response.json())
        .then(note => {
            const murkup  = createNoteMarkup(note);
            refs.noteList.insertAdjacentHTML('beforeend', murkup);
        })
        .catch(error => console.log(error))
}
function handelNoteListClick({ target }) {

    if(target.nodeName !== 'BUTTON') return;

    const action = target.dataset.action;
    switch(action){
        case  'edit':
            updateNote(target); // при клике сюда мы откроем модал окно
            break;
        case  'delete' :
            deleteNote(target);
            break;
        default: throw new Error ('Unrecognzed active type ' + action)
    }
}
function updateNote(target) {
    const note = target.closest('.note'); // li
    const noteIdToUpdate = Number(note.dataset.id);

    refs.modalBackdrop.classList.add('is-visible');

}
function deleteNote(target) {

    const note = target.closest('.note'); // li
    const noteIdToDelete = Number(note.dataset.id);

    // Способ удаления
    fetch(`${API_URL}/${noteIdToDelete}`, { method: 'DELETE'})
        .then(response =>{
            if(!response.ok){ throw new Error('Неполучилось удалить !')};
            note.remove();
        })
        .catch(error => console.log(error))
}
// modal
function habdelModalClick({ target }) {
    if(target.nodeName !== 'BUTTON') return;
    toggleModel();
    const action = target.dataset.action;
    switch(action){
        case  'close':
            toggleModel(); // open or close
            break;
        case  'save' :
            console.log('Save !!!!');
            break;
        default: throw new Error ('Unrecognzed active type ' + action)
    }
}

function toggleModel() { // toggle-  если он там есть Он уберет и закроет Если нет То добавит
    refs.modalBackdrop.classList.toggle('is-visible')
}


// Есть текстовое поле -Излучим текст  в модальное окно