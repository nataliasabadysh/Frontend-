// module-10/ part-2  40 min
// по умолчанию этот сервер возврашает за один раз 20 items , так он настроин


const API_KEY = '10097641-3c5ffaf8d4b4933c9483acfd0';

const refs = {
    page: document.querySelector('.page'),
    loadMoreBtn: document.querySelector('.load-more'),
    form: document.querySelector('.form'),
    queryInput: document.querySelector('.form .input'),
    grid: document.querySelector('.grid'),  // будем вещать на него блоки с картинками
};
const request = {
    page: 1,
    query: '',
    resetPage() {
        this.page = 1;
    },
    incrementPage() {
        this.page += 1;
    },
};

refs.form.addEventListener('submit', handleFormSubmit);
refs.loadMoreBtn.addEventListener('click', handleLoadMoreBtnClick);

// =====================================================
function handleFormSubmit(e) {
    e.preventDefault();

    request.query = refs.queryInput.value;
    request.resetPage();

    refs.grid.innerHTML = ''; //  refs.grid.innerHTML = markup;
    handleFetch();

    refs.form.reset(); // после сабмита сбрасиваем форму
}

function handleLoadMoreBtnClick() {
    request.incrementPage();

    handleFetch();
}

function handleFetch() {
    toggleLoader();

// fetchImages - вернется  Promis и данный this получит доступ к data
    fetchImages({ query: request.query, page: request.page }).then(items => {
        toggleLoader();
// query - при каждом самити формы -мы забераем определенный набот данных

        const markup = createGridItems(items);
        refs.grid.insertAdjacentHTML('beforeend', markup);
    });
}

// fetch fun
// API_KEY - в отдельной константе
//
function fetchImages({ query = '', page = 1 }) {
  // const url = fetch  url

    const url = `https://pixabay.com/api/?image_type=photo&q=${query}&key=${API_KEY}&per_page=9&page=${page}`;

    return fetch(url) // return возвращаем fetch - Promis - вернется data

        .then(response => {
            if (response.ok) return response.json(); // вернется response.json()

            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        // data return data.hits;
        // hits- массив фоток
        .then(data => {
             console.log(data); // мы получим массив http://prntscr.com/ktk6g7
            return data.hits;
        })
        .catch(error => {
            console.log('ERROR: ', error);
        });
}

//  теперь завернем полученные картинки в div + css

function createGridItems(items) {


    // item.webformatURL с массива http://prntscr.com/ktk6g7

    return items.reduce(  // по полученным данным мы пройдемся  reduce
        (markup, item) =>
            markup +
            `<div class="grid-item"><img src="${item.webformatURL}" alt=""></div>`, //в обьксте находим  ссылки на фотки
        '',
    );
}

function toggleLoader() {
    refs.page.classList.toggle('show-loader');
}








// https://pixabay.com/api/docs/
// Your API key: 10097641-3c5ffaf8d4b4933c9483acfd0

// https://pixabay.com/api/?key=10097641-3c5ffaf8d4b4933c9483acfd0&q=sun


// переменная

// fetch('https://pixabay.com/api/?key=10097641-3c5ffaf8d4b4933c9483acfd0&q=sun')
//     .then(response =>{
//         if(response.ok) return response.json();
//
//         throw new Error(`Error while fetching : ${response.statusText}`)
//
//     }).then(data => {
//
//     console.log(data); // location
//
// }).catch(error =>{
//     console.log('Error',error);
// });
