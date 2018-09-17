'use strict';

const API_URL = 'https://test-users-api.herokuapp.com/users/';

const refs = {
    userEditor : document.querySelector('.user-editor'),
    userEditorInput : document.querySelector('.user-editor input'),
    userList : document.querySelector('.user-list'),
    modalBackdrop: document.querySelector('.backdrop'),
    modal: document.querySelector('.modal'),
    modalInput: document.querySelector('.modal input')
};

const state = { selectedId : null, };

// GET  ==  - запрос - Виведем наш список при загрузке

init();
function init() {
    fetch(API_URL)
        .then(response => response.json())
        .then(users => {
        const markup = users.reduce(
            (acc, user) => acc + createUserMarkup(user),
            '',);
        refs.userList.insertAdjacentHTML('afterbegin', markup);
    });
}

// POST   ==  CREATE - Edit USER

refs.noteEdotor.addEventListener('submit', handleUserEditorSubmit);

function handleUserEditorSubmit(e) {
    e.preventDefault();  //Запрещаем перезагрузку страници при отправки

    const userName = refs.userEditorInput.value.trim();
    const userAge = refs.userEditorInput.value.trim();
    if(userName === '' || userName !== String) return alert('Нужно ввести имя !');
    if(userAge === '' || userAge !== Number ) return alert('Нужно ввести возраст !');

    const userToAdd = { name, age };
    refs.userEditor.reset();

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(postToUpdate),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())

        .then(user => {
            const id = user.data.id;
            const markup = createUserMarkup({ id, name, age });
            refs.userList.insertAdjacentHTML('beforeend', markup);
        })
        .catch(error => console.log(error));
    }

// DELETE

refs.userList.addEventListener('click', handleUserListClick);

function handleUserListClick({ target }) {
    if (target.nodeName !== 'BUTTON') return;

    const action = target.dataset.action; // кнопки отслеживаем по атребуту data-set
    switch (action) {
        case 'delete':
            deleteUser(id);
            break;

        case 'edit':
            updateUserInfo(target);
            break;

        default:
            throw new Error('Unrecognized action type ' + action);
    }
}
function deleteUser(id) {

        const user = target.closest('.user');
        const userIdToDelete = user.dataset.id;

        fetch(`${API_URL}/${userIdToDelete}`, {method:'DELETE'})
            .then( response => {
            if(response.ok) throw new Error('неполучилось удалить !');
            user.remove();
        }).catch(error => console.log(error))
}

//  == EDIT UPDATE_USER

refs.modal.addEventListener('click', handleModalClick);

function updateUserInfo( id, user ) {
    const user = target.closest('.user');
    const userIdToUpdate = user.dataset.id;
    state.selectedId = userIdToUpdate;

    const userContentName = user.querySelector('.user-name').textContent;
    const userContentAge = user.querySelector('.user-age').textContent;

    refs.modalInput.value = userContentName;
    refs.modalInput.value = userContentAge;

    toggleModal();

}
function handleModalClick({ target }) {
    if (target.nodeName !== 'BUTTON') return;
    const action = target.dataset.action;

    switch(action){
        case 'save':
            saveUserEdit();
            break;
        case 'close':
            toggleModal();
            break;
        default:
            throw new Error('Unrecognized action type ' + action);
    }
}
function toggleModal() {
    refs.modalBackdrop.classList.toggle('is-visible');
}
function saveUserEdit() {
    const updatedUserContent = refs.modalInput.value;
    const userIdUpdate = state.selectedId;

    const userToUpdate = {
        name : updatedUserConten,
        age : updatedUserContent,
    };

    fetch(`${API_URL}/${userIdUpdate}`, {
        method:'PATCH',
        body:JSON.stringify(userToUpdate),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(updatedUser => {
            const userNameEl = refs.userList.querySelector(`.user[data-id='${updatedUser.id}'].user-name`,);
            const userAgeEl = refs.userList.querySelector(`.user[data-id='${updatedUser.id}'].user-age`,);

            userNameEl.textContent = updatedUser.user-name;
            userAgeEl.textContent = updatedUser.user-age;

            toggleModal();
        })
        .catch(er => console.log(er))
}
function createUserMarkup({ id, name, age}) {
    return `
     <li class="user" data-id="${id}">
      <div class="actions">
        <button class="button" data-action="edit">Редактировать</button>
        <button class="button" data-action="delete">Удалить</button>
      </div>
          <ul class="user-info">
              <li class="user-text">NAME: </li>
              <li class="user-name">${name}</li><br>
              <li class="user-text">AGE: </li>
              <li class="user-age">${age}</li><br>
          </ul>
      </li>
      `;
}

