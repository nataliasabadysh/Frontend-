'use strict';

let set = setTimeout(()=>console.log('red'),10000)
let der = setTimeout(()=>console.log('red'),10000)



console.log(set)
console.log(der)
/*
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное
  значение из массива.
  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
*/

const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

let btnStart = document.querySelector('.js-start')
let btnStop= document.querySelector('.js-stop')
btnStart.addEventListener('click', handlerBtnstartClick)
let id ;
let clear = false;

function handlerBtnstartClick(ev){
    if(clear)return;
    id = setInterval(()=>{
        let color = colors[Math.floor(Math.random()*(colors.length))];
        document.querySelector('body').style.backgroundColor = color
    }, 1000)
    clear = true;

}
btnStop.addEventListener('click', handlerBtnStopClick)

function handlerBtnStopClick(){
    clearInterval(id)
    clear = false
}