
/*

Создадим поле для вывода и кнопку
для сохранения введенного в localStorage.

Изначально такой пары в хранилище нету поэтому
будет выведена пустая строка.

Попробуйте позаполнять input и нажмите Save.
Текст в поле вывода изменится на тот что ввели.
Перезагрузите страницу, все тот же текст, хотя вы ничего еще не вводили.
Мы берем его из localStorage, последнее веденное значение.



*/

const output = document.querySelector('#js-output');
const input = document.querySelector('#js-input');
const btn = document.querySelector('#js-btn');


const updateView = () => {
    output.textContent = localStorage.getItem('fe-adv-module-12') || '';
};

const handleClick = () => {
    localStorage.setItem('fe-adv-module-12', input.value);
    updateView();
};

updateView(); // что бы посмотреть если есть в локал-стор что то А если нету то пустую строку

btn.addEventListener('click', handleClick);