// ------------Пример ------  button -----

const btn = document.querySelector('.btn');

// document - обьект
// .querySelector('.btn'); - метод єтого обьекта
// ('.btn'); аргумент
// результат заісиваеться в переменную


btn.addEventListener('click', function (e){
    alert('Oh yeah !')
});
// btn - обьект
// addEventListener  - метод визиваеться
// Он получает арумент( 'click', function (e)  - фун-ю обратного визова
// когда проізойдет клік ? виполнется фун-я
