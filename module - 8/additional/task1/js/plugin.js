'use strict'

let btn = document.querySelector('.button');

btn.addEventListener('click', handleBtnClick);

function handleBtnClick(){
  btn.textContent = +btn.textContent + 1
}

