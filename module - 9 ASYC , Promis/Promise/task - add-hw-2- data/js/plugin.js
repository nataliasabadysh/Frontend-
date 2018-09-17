'use strict';
/*
  Напишите функцию getFormattedTime(time), которая
  получает time - кол-во миллисекунд и возвращает
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.

  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/


function getFormattedTime(time) {
    let red = new Date(time);
    let mili = red.getMilliseconds();
    return ( `${red.getMinutes()}:${red.getSeconds()}.${mili.toString().slice(0,1)}`);
}

console.log(
    getFormattedTime(1523621052858)
); // 04:12.8

console.log(
    getFormattedTime(1523621161159)
); // 06:01.1

console.log(
    getFormattedTime(1523621244239)
); // 07:24.2

