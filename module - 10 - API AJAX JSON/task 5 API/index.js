'use strict'


//  API -

/*
Каждый API уникален (их тысячи), невозможно заучить
"код" для работы с одним API и использовать его для общения с другим.
Можно понять принцип и методы работы, после чего, все что нужно сделать,
это ознакомиться с документацией того сервиса который необходимо использовать.

Для примера был выбран API ПриватБанка api.privatbank.ua
*/


//
//
//





const API_KEY = '5837779-ac3ba737206b541ae294f1119';
const refs = {
    page: document.querySelector('.page'),
    loadMoreBtn: document.querySelector('.load-more'),
    form: document.querySelector('.form'),
    queryInput: document.querySelector('.form .input'),
    grid: document.querySelector('.grid'),
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