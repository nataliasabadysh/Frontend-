'use strict'

const form = document.querySelector(".form");
const loginInput = form.querySelector('input[type="text"]');

const passInput = form.querySelector('input[type="password"]');

form.addEventListener("submit", handleSubmit);

// Сначала обработчик addEventListener а потом метод , иначе метод не вспливает
loginInput.focus(); // В активном состоянии при загрузке страници   метод -focus();


function handleSubmit(event) {
    // Предотвращаем поведение по умолчанию
    event.preventDefault();

    const login = loginInput.value.trim();
    const password = passInput.value.trim();

    if(login === '' || password === '') {
        return alert('Пожалуйста введите валидную информацию!')
    }

    form.reset();
    alert(`
    Спасибо за регистрацию!
    Логин: ${login} 
    Пароль: ${password}
  `);
}