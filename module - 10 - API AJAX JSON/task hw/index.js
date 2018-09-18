'use strict';
const api = {
    baseUrl: 'https://test-users-api.herokuapp.com/users/',
    getAllUsers() { //  Вынесли отдельно логику запроса на БЭКЕНД
        return fetch(this.baseUrl) //  c этого метода возвращаем результат fetch (promis)+ return
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Error while fetching' + response.statusText);
            }).catch(errror => console.log(errror));
    },
    getUserById(id) {},
    addUser(name, age) {
        return fetch(this.baseUrl, {
            method: 'POST',
            body: JSON.stringify(name, age),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).catch(error => console.log(error));
    },
    removeUser(id) {
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE'
        }).then(response => {
            if (response.ok) throw new Error('неполучилось удалить !');
        }).catch(error => console.log(error))
    },
    updateUser(id, user) {
        return fetch(`${this.baseUrl}/${note.id}/${note.name}`, { // ------------ ????????
            method: 'PATCH',
            body: JSON.stringify(id, user),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            if (response.ok) return response.json();
            throw new Error('Error while fetching' + response.statusText);
        }).catch(er => console.log(er))
    },
};
document.addEventListener("DOMContentLoaded", () => {
    const refs = selectRefs();
    const state = { selectedId: null,};

    refs.noteEdotor.addEventListener('submit', handleUserEditorSubmit);
    refs.modal.addEventListener('click', handleModalClick);
    refs.userList.addEventListener('click', handleUserListClick);

    getUserFromDatabase();

    function getUserFromDatabase() {
        api.getAllUsers().then(users => {
            const markup = users.reduce(
                (acc, user) => acc + createUserMarkup(user), '', );
            refs.userList.insertAdjacentHTML('afterbegin', markup);
        });
    }

    function handleUserEditorSubmit(e) {
        e.preventDefault(); //Запрещаем перезагрузку страници при отправки
        const userName = refs.userEditorInput.value.trim();
        const userAge = refs.userEditorInput.value.trim();
        if (userName === '' || userName !== String) return alert('Нужно ввести имя !');
        if (userAge === '' || userAge !== Number) return alert('Нужно ввести возраст !');
        api.addUser({
            name,
            age
        }) // --------------??????????????????????
            .then(user => {
                const id = user.data.id;
                const markup = createUserMarkup({
                    id,
                    name,
                    age
                });
                refs.userList.insertAdjacentHTML('beforeend', markup);
            });
        refs.userEditorInput = reset(); // ---- ??
    }

    function handleUserListClick({ target }) {
        if (target.nodeName !== 'BUTTON') return;
        const action = target.dataset.action;
        switch (action) {
            case 'delete':
                removeUser(id);
                break;
            case 'edit':
                editUserStart(target);
                break;
            default:
                throw new Error('Unrecognized action type ' + action);
        }
    }

    function removeUser(id) {
        const user = target.closest('.user');
        const userIdToDelete = user.dataset.id;
        api.removeUser(userIdToDelete).then(() => {
            user.remove();
        });
    }

    function editUserStart(id, user) {
        const user = target.closest('.user');
        const userIdToEdit = user.dataset.id;
        state.selectedId = userIdToEdit;
        const userContentName = user.querySelector('.user-name').textContent;
        const userContentAge = user.querySelector('.user-age').textContent;
        refs.modalInput.value = userContentName;
        refs.modalInput.value = userContentAge;
        toggleModal();
    }

    function editUserCancel() {
        toggleModal();
        // очистеть поля
        state.selectedId = null;
        refs.modalInput.value = '';
        refs.modalInput.value = '';
    }

    function handleModalClick({ target }) {
        if (target.nodeName !== 'BUTTON') return;
        const action = target.dataset.action;
        switch (action) {
            case 'save':
                editUserSucces();
                break;
            case 'close':
                editUserCancel();
                break;
            default:
                throw new Error('Unrecognized action type ' + action);
        }
    }

    function toggleModal() {
        refs.modalBackdrop.classList.toggle('is-visible');
    }

    function editUserSucces() {
        const userToUpdate = {
            id: state.selectedId,
            name: refs.modalInput.value,  // --- ??  NAme
            age: refs.modalInput.value,   // --- age ??
        };
        api.updateUser(userToUpdate).then(updatedUser => {

            const userNameEl = refs.userList.querySelector(`.user[data-id='${updatedUser.id}'].user-name`, ); //li с id ?
            const userAgeEl = refs.userList.querySelector(`.user[data-id='${updatedUser.id}'].user-age`, ); //li с id ?

            userNameEl.textContent = updatedUser.user - name;
            userAgeEl.textContent = updatedUser.user - age;

            toggleModal();
        })
    }

    function createUserMarkup({ id, name, age }) {
        return `
     <li class="user" data-id="${id}">
      <div class="actions">
        <button class="button" data-action="edit">Редактировать</button>
        <button class="button" data-action="delete">Удалить</button>
      </div>
          <ul class="user-info">
              <img src="img/user.jpg">
              
              <li class="user-text">NAME: </li>
              <li class="user-name">${name}</li><br>
              <li class="user-text">AGE: </li>
              <li class="user-age">${age}</li><br>
          </ul>
      </li>
      `;
    }

    function selectRefs(obj) {
        const refs = {}; // Наполним обьект полями и венем его
        refs.userEditor = document.querySelector('.user-editor');
        refs.userEditorInput = document.querySelector('.user-editor input');
        refs.userList = document.querySelector('.user-list');
        refs.modalBackdrop = document.querySelector('.backdrop');
        refs.modal = document.querySelector('.modal');
        refs.modalInput = refs.modal.querySelector('.modal input');
        return refs;
    }
});