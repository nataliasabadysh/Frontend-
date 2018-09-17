// module-10/ part-2  40 min

//  У нас есть такакя разметка
// <form class="form">     <input .. class="input">     <button type=" submit " class="button"

// Можно кучей переменных  но они не связанны
// Патторн - создать  Обьект + ссылка на форму

// обращение теперь будет такое
// refs.form



// 1. при каждом нажатии на submit  мы получим Natasha

const refs = {
    form: document.querySelector('.form'),
};
// ==== повесим на форму слушателя
refs.form.addEventListener('submit', handlerFormSubmit); 


function handlerFormSubmit(event) {
    event.preventDefault(); // ?
    console.log('Natasha');
}

// 2. теперь внутри этой формы нужно вывести значение inputa


// внутри этой формы нужно вывести значение inputa
// input куда мы вводим query
// .form input - как в css форма а в ней есть input



const refs = {
    form: document.querySelector('.form'),
    queryInput: document.querySelector('.form .input'), //<form class="form"><input .. class="input">
};

refs.form.addEventListener('submit', handlerFormSubmit);

function handlerFormSubmit(event) {
    event.preventDefault();

    const query = refs.queryInput.value; // а вот наше значение в input
    console.log(query);  //выводим значение в input

    refs.form.reset(); // после сабмита Сбросит нашу Форму в исходное состояние
}

// 3.    -   наш fetch запихнем в отдельную фун-ю fetchImages

//   которая получает query - значение инпута


// Ключ вынесем в отдельную константу
const API_KEY = '10097641-3c5ffaf8d4b4933c9483acfd0';

function fetchImages(query) {

    const url = `https://pixabay.com/api/?image_type=photo&q=${query}&key=${API_KEY}&per_page=9&page=${page}`;

     fetch(url)
        .then(response => {
            if (response.ok) return response.json();

            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => {
            console.log(data);
            return data.hits;
        })
        .catch(error => {
            console.log('ERROR: ', error);
        });
}


//   const url = `https://pixabay.com/api/?image_type=photo&q=${query}&key=${API_KEY}&per_page=9&page=${page}`;

// https://pixabay.com/api/  -
// ?image_type=photo    - параметр
// &q=${query}          - то что мы будем передавать
// &key=${API_KEY}      - наш ключ

// &per_page=9 - сколько картинок покажет за один раз клика - или поиска на странице
// &page=${page} -

// &page=1- при нажатии на поиск будут одна и таже инфа, 2- то второй раз обновиться  поиск



// 5.  - Посмотрим что мы получим, что вернет нам  data



const API_KEY = '10097641-3c5ffaf8d4b4933c9483acfd0';

const refs = {
    form: document.querySelector('.form'),
    queryInput: document.querySelector('.form .input'),
};
refs.form.addEventListener('submit', handlerFormSubmit);

function handlerFormSubmit(event) {
    event.preventDefault();
    const query = refs.queryInput.value;

    //   fetchImages(query); - Вызваем  фун-ю   +  query - значение инпута
    fetchImages(query);             //====  Посмотрим что мы получим, что вернет нам  data

    refs.form.reset(query);
}
function fetchImages(query) {

    const url = `https://pixabay.com/api/?image_type=photo&q=${query}&key=${API_KEY}`;

     fetch(url)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => {             // data ===   Посмотрим что мы получим  от data
            console.log(data);
            return data.hits;
        })
        .catch(error => {
            console.log('ERROR: ', error);
        });
}

//* теперь вводим dog и в консоле получим
//* totalHits: 500, hits: Array(20), total: 10988}


// 6. ===   Отресуем на экране  полученные фото

// 1
// передадим в фун-ю handlerFormSubmit полученные данные от fetch

// + return fetch-   Нам нужно вернуть результат промиса
// из фун-и вернули fetch  а там промис
//  Первый then вернет результать response.json() и этот результат попадает в след then ;

//  в фу-и handlerFormSubmit   вызовим  второй then
// fetchImages и в then(data - полученных данных от fetch)



fetchImages(query).then(data =>{console.log(data); })


const API_KEY = '10097641-3c5ffaf8d4b4933c9483acfd0';

const refs = {
    form: document.querySelector('.form'),
    queryInput: document.querySelector('.form .input'),
};
refs.form.addEventListener('submit', handlerFormSubmit);

function handlerFormSubmit(event) {
    event.preventDefault();
    const query = refs.queryInput.value;

// 2-е выполняеться
//   внутри fetchImages(query) возвращаем значение fetch -вернет проммис
//   promis.then(data =>{

    fetchImages(query).then(data =>{  //data - это результат response.json()
        console.log(data);
    });
    refs.form.reset(query);
}

function fetchImages(query) {
    const url = `https://pixabay.com/api/?image_type=photo&q=${query}&key=${API_KEY}`;

// + return fetch
    return fetch(url)
// и нам вернется return promis


        .then(response => {
//1-е выполняеться
//   then вернет результать response.json() и этот результат попадает в след then

            if (response.ok) return response.json();
            throw new Error(`Error while fetching: ${response.statusText}`);
        })
            // ! этот нам не нужен мы его перенесов в фун-handlerFormSubmit
            // .then(data => {             // data ===   Посмотрим что мы получим  от data
            //     console.log(data);
            //     return data.hits;
            // })
// если будет ощибка то вызовиться catch

        .catch(error => {
            console.log('ERROR: ', error);
        });
}

// 2й then стоит выше по коду , потому что
// мы вызываем фун-ю fetchImages она из себя возвращает промис
// вызываем фун-ю  fetchImages(query)  а на ее место возвп промис
//


// 2


const API_KEY = '10097641-3c5ffaf8d4b4933c9483acfd0';
const refs = {
    form: document.querySelector('.form'),
    queryInput: document.querySelector('.form .input'),
};

refs.form.addEventListener('submit', handlerFormSubmit);

function handlerFormSubmit(event) {
    event.preventDefault();
    const query = refs.queryInput.value;

    fetchImages(query).then(data =>{

        // здесь нам доступные данные поэтому мы вызываем фун-ю createGridItems
        // data обьект с полями и нам нужен поле hits: Array(20)
        createGridItems(data);
    });

    refs.form.reset(query);
}

function fetchImages(query) {
    const url = `https://pixabay.com/api/?image_type=photo&q=${query}&key=${API_KEY}`;
    return fetch(url)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .catch(error => {
            console.log('ERROR: ', error);
        });
}


function createGridItems(items) {
    console.log('In createGridItems :', items)
    // In createGridItems : {totalHits: 500, hits: Array(20), total: 12069}
}

// НАм нужны сами данные  а они в hits: Array(20),
// In createGridItems : {totalHits: 500, hits: Array(20), total: 12069}


// 3 получим массив с обькта data.hits

const API_KEY = '10097641-3c5ffaf8d4b4933c9483acfd0';
const refs = {
    form: document.querySelector('.form'),
    queryInput: document.querySelector('.form .input'),
};

refs.form.addEventListener('submit', handlerFormSubmit);

function handlerFormSubmit(event) {
    event.preventDefault();
    const query = refs.queryInput.value;

    fetchImages(query).then(data =>{
        // 3м выполнется
        // дойдет только массив hits этого поля Array(20)
        createGridItems(data);
    });

    refs.form.reset(query);
}

function fetchImages(query) {
    const url = `https://pixabay.com/api/?image_type=photo&q=${query}&key=${API_KEY}`;
    return fetch(url)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => data.hits)
        // 2м выполнется и в return pronis дойдет только массив hits этого поля Array(20)

        //  data получает все поля  { totalHits: 500, hits: Array(20), total: 12069 }
        // а возврашает только поле hits

        .catch(error => {
            console.log('ERROR: ', error);
        });
}
function createGridItems(items) {
    console.log('In createGridItems :', items)
    // In createGridItems : (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
}

// 4.





const API_KEY = '10097641-3c5ffaf8d4b4933c9483acfd0';
const refs = {
    form: document.querySelector('.form'),
    queryInput: document.querySelector('.form .input'),
};

refs.form.addEventListener('submit', handlerFormSubmit);

function handlerFormSubmit(event) {
    event.preventDefault();
    const query = refs.queryInput.value;

// завернем в переменную   const markup, которая вернет разметку
    fetchImages(query).then(photos =>{
        const markup =  createGridItems(photos);   // на свое место возвращает разметку

        console.log(markup);
    });
    refs.form.reset(query);
}

function fetchImages(query) {
    const url = `https://pixabay.com/api/?image_type=photo&q=${query}&key=${API_KEY}`;
    return fetch(url)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => data.hits)
        .catch(error => {
            console.log('ERROR: ', error);
        });
}

function createGridItems(items) {


    // item.webformatURL с массива http://prntscr.com/ktk6g7
    //в обьксте находим  ссылки на фотки

    return items.reduce(  // по полученным данным мы пройдемся reduce
        (markup, item) =>
            markup +
            `<div class="grid-item"><img src="${item.webformatURL}" alt=""></div>`,
        '',
    );
}
// в createGridItems
// Добавим div.grid-item                + css style
// Добавим div.grid-item > img          + css style

//===== вывели в консоле а сейчас повесим на разметку

/*
У нас есть html

<!-- IMAGE GRID -->
<main class="main">
    <div class="grid"> </div>
    <button class="load-more button">Show more</button>
</main>
*/
 // ==================  Add ;))) <!-- LOADER -->

// вешаеться на сам -  <body class="page"> //  class = 'show-loader'


// === html
// <div class="loader-overlay">
//     <div class="loader">
//      <svg class="circular" viewBox="25 25 50 50">
//      <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"
//      />
//     </svg>
//     </div>
//     </div>

//  === css

//.loader-overlay {
// display: none;
// position: fixed;
// justify-content: center;
// align-items: center;
// top: 0;
// left: 0;
// right: 0;
// bottom: 0;
// background-color: rgba(0, 0, 0, 0.2);
// z-index: 999;
// }

//.page.show-loader .loader-overlay {display: flex;}

// .page.show-loader .loader-overlay {display: flex;}
// .loader {position: relative;width: 150px;}
//
// .loader::before {content: '';display: block;padding-top: 100%;}
//
// .loader .circular {
//     animation: rotate 2s linear infinite;
//     height: 100%;
//     transform-origin: center center;
//     width: 100%;
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     margin: auto;
// }
//
// .loader .path {
//     stroke-dasharray: 1, 200;
//     stroke-dashoffset: 0;
//     animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
//     stroke-linecap: round;
// }
// @keyframes rotate {100% {transform: rotate(360deg);}}
// @keyframes dash {0% {stroke-dasharray: 1, 200;stroke-dashoffset: 0;}50% {stroke-dasharray: 89, 200;stroke-dashoffset: -35px;}100% {stroke-dasharray: 89, 200;stroke-dashoffset: -124px;}}
// @keyframes color {100%, 0% {stroke: #d62d20;}40% {stroke: #0057e7;}66% {stroke: #008744;}80%, 90% {stroke: #ffa700;}}

const API_KEY = '10097641-3c5ffaf8d4b4933c9483acfd0';
const refs = {

//===== loader
    page: document.querySelector('.page'),
    loadMoreBtn: document.querySelector('.load-more'),

    form: document.querySelector('.form'),
    queryInput: document.querySelector('.form .input'),
    grid: document.querySelector('.grid'),  // будем вещать на него блоки с картинками

};

refs.form.addEventListener('submit', handlerFormSubmit);

function handlerFormSubmit(event) {
    event.preventDefault();

    const query = refs.queryInput.value;

// =======   перед http - запросом запрос + show-loader

    refs.page.classList.add('show-loader');
// <body class="page">  + class = "show-loader"
    fetchImages(query).then(photos =>{

// КАк только http - запрос ответил ,и мы получили наши кратинки Нужно отменить show-loader
        refs.page.classList.remove('show-loader');

        const markup =  createGridItems(photos);
        refs.grid.innerHTML = markup;

    });
    refs.form.reset(query);
}

function fetchImages(query) {
    const url = `https://pixabay.com/api/?image_type=photo&q=${query}&key=${API_KEY}`;
    return fetch(url)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => data.hits)
        .catch(error => {
            console.log('ERROR: ', error);
        });
}

function createGridItems(items) {
    return items.reduce(
        (markup, item) =>
            markup +
            `<div class="grid-item"><img src="${item.webformatURL}" alt=""></div>`,
        '',);
}

// пихать классами не хорошо, лучше вывести в отдельную фун-ю


const API_KEY = '10097641-3c5ffaf8d4b4933c9483acfd0';
const refs = {
    // loader
    page: document.querySelector('.page'),
    loadMoreBtn: document.querySelector('.load-more'),


    form: document.querySelector('.form'),
    queryInput: document.querySelector('.form .input'),
    grid: document.querySelector('.grid'),  // будем вещать на него блоки с картинками

};

refs.form.addEventListener('submit', handlerFormSubmit);

function handlerFormSubmit(event) {
    event.preventDefault();
    const query = refs.queryInput.value;
    toggleLoader();     //'show-loader' refs.page.classList.add('show-loader');

    fetchImages(query).then(photos =>{
        toggleLoader();  //'show-loader' refs.page.classList.remove('show-loader');

        const markup =  createGridItems(photos);
        refs.grid.innerHTML = markup;
    });
    refs.form.reset(query);
}

function fetchImages(query) {
    const url = `https://pixabay.com/api/?image_type=photo&q=${query}&key=${API_KEY}`;
    return fetch(url)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => data.hits)
        .catch(error => {
            console.log('ERROR: ', error);
        });
}

function createGridItems(items) {
    // item.webformatURL с массива http://prntscr.com/ktk6g7
    //в обьксте находим  ссылки на фотки

    return items.reduce(
        (markup, item) =>
            markup +
            `<div class="grid-item"><img src="${item.webformatURL}" alt=""></div>`,
        '',);
}
function toggleLoader() {
    refs.page.classList.toggle('show-loader');
}
//7. htttp -  запросы кэшируюю ответы , если что то искали + искать тоже самоее то
// концепция страницы - при обновленни поиска подгружаеться новая инфа а не та же самая



const API_KEY = '10097641-3c5ffaf8d4b4933c9483acfd0';
const refs = {
    // loader
    page: document.querySelector('.page'),
    //Добавим кнопку Show more
    loadMoreBtn: document.querySelector('.load-more'),// повесим на кнопку слушателя  на клик на эту кнопку

    form: document.querySelector('.form'),
    queryInput: document.querySelector('.form .input'),
    grid: document.querySelector('.grid'),  // будем вещать на него блоки с картинками

};

let currntPage = 1; // текущая страница 1
let currentQuery = ''; // текуший запрос

refs.form.addEventListener('submit', handlerFormSubmit);

// .load-more'),// повесим на кнопку слушателя  на клик на эту кнопку
// а можно через  scroll
refs.loadMoreBtn.addEventListener('click',handerLodeMoreBtnClick)




function handlerFormSubmit(event) {
    event.preventDefault();
    currentQuery = refs.queryInput.value;  //текуший запрос = то что ввели в инпут , мначе после нажатия на Показать больще инпут сброситься но 0
    toggleLoader();

    fetchImages({ guery:currentQuery, page:currntPage }).then(photos =>{
        toggleLoader();

        const markup =  createGridItems(photos);
        refs.grid.insertAdjacentHTML('beforeend', markup);
    });
    refs.form.reset(query);
}

function handerLodeMoreBtnClick() {
    // то же самое что в handlerFormSubmit
    toggleLoader();
    currntPage += 1;    // currntPage - нужно увеличивать

    fetchImages({ guery:currentQuery, page:currntPage }).then(photos =>{
        toggleLoader();
        const markup =  createGridItems(photos);
        //refs.grid.innerHTML = markup; - просто перезаписывать html
        // нам нужно добовлять в конец
        // refs.grid.innerHTML += markup = refs.grid.insertAdjacentHTML() = markup;
        refs.grid.insertAdjacentHTML('beforeend', markup);

    });
}

// передали как обькт и деструктуризировали {query = '', page=1}
function fetchImages({query = '', page = 1}) { // получает не только ввод инпута но и страницу
    const url = `https://pixabay.com/api/?image_type=photo&q=${query}&key=${API_KEY}&per_page=9&page=${page}`; // здесть станицу
    return fetch(url)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => data.hits)
        .catch(error => {
            console.log('ERROR: ', error);
        });
}

function createGridItems(items) {
    // item.webformatURL с массива http://prntscr.com/ktk6g7
    //в обьксте находим  ссылки на фотки

    return items.reduce(
        (markup, item) =>
            markup +
            `<div class="grid-item"><img src="${item.webformatURL}" alt=""></div>`,
        '',);
}
function toggleLoader() {
    refs.page.classList.toggle('show-loader');
}

// у нас две фун-и почти одиникавые и мы их можем вынести в отдельную  фун-ю


const API_KEY = '10097641-3c5ffaf8d4b4933c9483acfd0';
const refs = {
    // loader
    page: document.querySelector('.page'),
    //Добавим кнопку Show more
    loadMoreBtn: document.querySelector('.load-more'),// повесим на кнопку слушателя  на клик на эту кнопку

    form: document.querySelector('.form'),
    queryInput: document.querySelector('.form .input'),
    grid: document.querySelector('.grid'),  // будем вещать на него блоки с картинками

};

let currntPage = 1;
let currentQuery = '';

refs.form.addEventListener('submit', handlerFormSubmit);

// .load-more'),// повесим на кнопку слушателя  на клик на эту кнопку - а можно через  scroll
refs.loadMoreBtn.addEventListener('click',handerLodeMoreBtnClick)




function handlerFormSubmit(event) {
    event.preventDefault();
    currentQuery = refs.queryInput.value;

    handleFetch();// вызвали здесть
    refs.form.reset(query);
}

function handerLodeMoreBtnClick() {
    currntPage += 1;
    handleFetch(); // вызвали здесть

}

function handleFetch() {// все повторение вынесли и
    toggleLoader();

    fetchImages({ query: request.query, page: request.page }).then(items => {
        toggleLoader();

        const markup = createGridItems(items);
        refs.grid.insertAdjacentHTML('beforeend', markup);
    });
}

function fetchImages({query = '', page = 1}) {
    const url = `https://pixabay.com/api/?image_type=photo&q=${query}&key=${API_KEY}&per_page=9&page=${page}`; // здесть станицу
    return fetch(url)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => data.hits)
        .catch(error => {
            console.log('ERROR: ', error);
        });
}

function createGridItems(items) {
    // item.webformatURL с массива http://prntscr.com/ktk6g7
    //в обьксте находим  ссылки на фотки

    return items.reduce(
        (markup, item) =>
            markup +
            `<div class="grid-item"><img src="${item.webformatURL}" alt=""></div>`,
        '',);
}
function toggleLoader() {
    refs.page.classList.toggle('show-loader');
}


// теперь если мы изменим поиск нужно что бы обновить let currntPage = 1; let currentQuery = '';
// а также очистить текуший контейнер



const API_KEY = '10097641-3c5ffaf8d4b4933c9483acfd0';
const refs = {
    // loader
    page: document.querySelector('.page'),
    //Добавим кнопку Show more
    loadMoreBtn: document.querySelector('.load-more'),// повесим на кнопку слушателя  на клик на эту кнопку

    form: document.querySelector('.form'),
    queryInput: document.querySelector('.form .input'),
    grid: document.querySelector('.grid'),  // будем вещать на него блоки с картинками

};

// а также очистить текуший контейнер   вместо - refs.grid.innerHTML = '';

// если у нас есть какойто запрос и нам необходимо их изменять
// выносим сночала в обькт (ООП - модул 6)
const request = { // Храним все данные , обьект который описывает запрос и все параметры
    page: 1,  // Свойства
    query: '',
    //
    resetPage() {  //Методы для работы со свойчтвами
        this.page = 1;
    },
    //
    incrementPage() {
        this.page += 1;
    },
};


refs.form.addEventListener('submit', handlerFormSubmit);

// .load-more'),// повесим на кнопку слушателя  на клик на эту кнопку - а можно через  scroll
refs.loadMoreBtn.addEventListener('click',handerLodeMoreBtnClick)


function handlerFormSubmit(event) {
    event.preventDefault();
    request.query = refs.queryInput.value;

    //currntPage = 1; // обновляем данные
    request.resetPage();// обновляем данные


    handleFetch();
    refs.form.reset(query);


}

function handerLodeMoreBtnClick() {
    request.incrementPage();
    handleFetch();
}

function handleFetch() {
    toggleLoader();

    fetchImages({ query: request.query, page: request.page }).then(items => {
        toggleLoader();

        const markup = createGridItems(items);
        refs.grid.insertAdjacentHTML('beforeend', markup);
    });
}

function fetchImages({query = '', page = 1}) {
    const url = `https://pixabay.com/api/?image_type=photo&q=${query}&key=${API_KEY}&per_page=9&page=${page}`; // здесть станицу
    return fetch(url)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => data.hits)
        .catch(error => {
            console.log('ERROR: ', error);
        });
}

function createGridItems(items) {
    // item.webformatURL с массива http://prntscr.com/ktk6g7
    //в обьксте находим  ссылки на фотки

    return items.reduce(
        (markup, item) =>
            markup +
            `<div class="grid-item"><img src="${item.webformatURL}" alt=""></div>`,
        '',);
}
function toggleLoader() {
    refs.page.classList.toggle('show-loader');
}

