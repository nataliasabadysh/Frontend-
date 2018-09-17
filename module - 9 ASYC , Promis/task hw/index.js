/*
  Создайте скрипт секундомера.
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/

  Изначально в HTML есть разметка:

  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>

  Добавьте следующий функционал:

  - При нажатии на кнопку button.js-start, запускается таймер, который считает время
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).

    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.

  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause',
    а функционал при клике превращается в оставновку секундомера без сброса
    значений времени.

    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.

  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени,
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени
    с 6 секунд, а не с 16.

    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.

  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.

  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

  Выполните домашнее задание используя класс с полями и методами.

  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет
  динамически создана вся разметка для секундомера.

  Должна быть возможность создать сколько угодно экземпляров секундоментов
  на странице и все они будут работать независимо.

  К примеру:

  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);

  Где parent* это существующий DOM-узел.
*/

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const clockFace = document.querySelector('.clockface');

const timer = {
    id: null,
    startTime: null,
    delteTime : 0,
    isActive: false,

    start(){
        if(this.isActive)return;
        this.isActive = true;
        this.startTime = Date.now() - this.delteTime;

        this.id = setInterval(()=>{
            const currentTime = Date.now();
            this.delteTime = currentTime - this.startTime;
            updateClockFace(this.delteTime);
        }, 100);
    },

    stop(){
        clearInterval(this.id);
        this.isActive = false;
    },

    reset(){
        this.stop();
        this.delteTime = 0;
        updateClockFace(this.delteTime);
    },
};

startBtn.addEventListener('click', handleStartBtnClick); s
stopBtn.addEventListener('click',timer.stop.bind(timer));

function handleStartBtnClick() {
    if (!timer.isActive) {
        timer.start();
        this.textContent = 'Pause';
    } else {
        timer.stop();
        this.textContent = 'Continue';
    }
}


function updateClockFace(time) {
    const formateredTime =  formatTime(time);
    clockFace.textContent = formateredTime;
}

function formatTime(ms) {
    const date = new Date(ms);

    let minutes = date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let seconds = date.getSeconds();
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    let mseconds = String(date.getMilliseconds()).slice(0,1);
    return `${minutes}:${seconds}.${mseconds}`;
}



// 2 + class
// const watches = document.querySelector('.asd');
//
// class Stopwatch {
//     constructor({ watches }) {
//         this.watches = watches;
//         this.startTime = null;
//         this.deltaTime = null;
//         this.id = null;
//         this.isActive = false;
//         this.createTimer();
//         this.startBtn = this.watches.querySelector('.js-start');
//         this.lapBtn = this.watches.querySelector('.js-take-lap');
//         this.resetBtn = this.watches.querySelector('.js-reset');
//         this.timerContent = this.watches.querySelector('.js-time');
//         this.listLaps = this.watches.querySelector('.js-laps');
//     }
//
//     createTimer() {
//         const section = document.createElement('section');
//         section.classList.add('watches');
//
//         const div = document.createElement('div');
//         div.classList.add('stopwatch');
//
//         const p = document.createElement('p');
//         p.classList.add('time');
//         p.classList.add('js-time');
//         p.textContent = '00:00.0';
//
//         const startBtn = document.createElement('button');
//         startBtn.classList.add('btn');
//         startBtn.classList.add('js-start');
//         startBtn.textContent = 'Start';
//         startBtn.addEventListener('click', this.handleStartTimer.bind(this));
//
//         const lapBtn = document.createElement('button');
//         lapBtn.classList.add('btn');
//         lapBtn.classList.add('js-take-lap');
//         lapBtn.textContent = 'Lap';
//         lapBtn.addEventListener('click', this.hadleLapTimer.bind(this));
//
//         const resetBtn = document.createElement('button');
//         resetBtn.classList.add('btn');
//         resetBtn.classList.add('js-reset');
//         resetBtn.textContent = 'Reset';
//         resetBtn.addEventListener('click', this.hadleResetTimer.bind(this));
//
//         div.append(p, startBtn, lapBtn, resetBtn);
//
//         const list = document.createElement('ul');
//         list.classList.add('laps');
//         list.classList.add('js-laps');
//
//         section.append(div, list);
//         this.watches.append(section);
//     }
//     handleStartTimer({ target }) {
//         if (!this.isActive) {
//             this.setActiveBtn(target);
//             this.startTick(target);
//             this.startBtn.textContent = 'Pause';
//         } else {
//             this.pauseTick(target);
//             this.startBtn.textContent = 'Continue';
//         }
//     }
//     startTick(target) {
//         if (this.isActive) return;
//         this.isActive = true;
//         this.startTime = Date.now() - this.deltaTime;
//         this.id = setInterval(() => {
//             const currentTime = Date.now();
//             this.deltaTime = currentTime - this.startTime;
//             this.updateClockface(this.deltaTime);
//         }, 100);
//     }
//     pauseTick(target) {
//         clearInterval(this.id);
//         this.isActive = false;
//     }
//
//     hadleResetTimer({ target }) {
//         clearInterval(this.id);
//         this.isActive = false;
//         this.setActiveBtn(target);
//         this.deltaTime = 0;
//         this.updateClockface(this.deltaTime);
//         this.startBtn.textContent = 'Start';
//         this.listLaps.innerHTML = null;
//         this.startTime = null;
//     }
//
//     hadleLapTimer(time) {
//         if (!this.isActive) return;
//         const item = document.createElement('li');
//         item.textContent = this.timerContent.textContent;
//         this.listLaps.append(item);
//     }
//     updateClockface(time) {
//         const formattedTime = this.getFormatedTime(time);
//         this.timerContent.textContent = formattedTime;
//     }
//     getFormatedTime(mls) {
//         const date = new Date(mls);
//         let min = date.getMinutes();
//         let sec = date.getSeconds();
//         let ms = parseInt(date.getMilliseconds() / 100);
//         if (min < 10) {
//             min = `0${min}`;
//         }
//         if (sec < 10) {
//             sec = `0${sec}`;
//         }
//         return `${min}:${sec}.${ms}`;
//     }
//
//     setActiveBtn(target) {
//         if (target.classList.contains('active')) {
//             return;
//         }
//         this.startBtn.classList.remove('active');
//         this.resetBtn.classList.remove('active');
//
//         target.classList.add('active');
//     }
// }
//
// const firstTimer = new Stopwatch({
//     watches: watches,
// });
// const SecondTimer = new Stopwatch({
//     watches: watches,
// });



// **
// * 1. При нажатии на старт запускать таймер
// * 2. при нажатии на стоп останавливать таймер
// * 3. нужен обект для хранения полей и методов таймера
// * 4. метод start, stop и поле timerId
// * 5. xx:xx.x
// */

//  НАШ - html синтаксис

// <p class="clockface">00:00.0</p>
// <button class="button" data-action="start">Start</button>
// <button class="button" data-action="stop">Stop</button>

//1. При нажатии СТОП СТАРТ

// const startBtn = document.querySelector('button[data-action="start"]');
// const stopBtn = document.querySelector('button[data-action="stop"]');
//
// const timer = {
//     start(){ // Запускаем
//         console.log('start');
//     },
//     stop(){  // Останавливаем
//         console.log('stop');
//     }
// }; //
// startBtn.addEventListener('click', timer.start);
// stopBtn.addEventListener('click',timer.stop);

// 2. При нажатии СТОП СТАРТ


// const startBtn = document.querySelector('button[data-action="start"]');
// const stopBtn = document.querySelector('button[data-action="stop"]');
//
// const timer = {
//     id: null,
//     start(){
//         this.id = setInterval(()=>{
//             console.log('interval');
//         }, 100);
//         //console.log('start');
//         //console.log(this);  // <button class="button" data-action="start">Start</button>
//     },
//     stop(){
//         //console.log('stop');
//
//         clearInterval(this.id);
//     }
// };
// startBtn.addEventListener('click', timer.start.bind(timer));
// stopBtn.addEventListener('click',timer.stop.bind(timer));

// 3    считаем при старт и оттанавливаем при стоп

// При нажатии СТАРТ - получим кол мсекунд которые прошли с1970 г
// до момента нажатия кнопочки СТАРТ

// 1536479734440
//75 interval


// const startBtn = document.querySelector('button[data-action="start"]');
// const stopBtn = document.querySelector('button[data-action="stop"]');
//
// const timer = {
//     id: null,
//     startTime: null,
//     start(){
//         this.startTime = Date.now(); // как мы узнаем текушее время в мсекунд
//         console.log(this.startTime);
//         this.id = setInterval(()=>{
//             console.log('interval');
//         }, 100);
//         //console.log('start');
//         //console.log(this);  // <button class="button" data-action="start">Start</button>
//     },
//     stop(){
//         //console.log('stop');
//
//         clearInterval(this.id);
//     }
// };
// получаем ссылку bind
// startBtn.addEventListener('click', timer.start.bind(timer));
// stopBtn.addEventListener('click',timer.stop.bind(timer));

// 4 свяжем с времинем
// При каждом выполнении фун-и интервала
// отнять от того времени на начальное



// const startBtn = document.querySelector('button[data-action="start"]');
// const stopBtn = document.querySelector('button[data-action="stop"]');
// const clockFace = document.querySelector('.clockface');
//
// const timer = {
//
//     id: null,
//     startTime: null,
//
//     // метод
//     start(){
// // перед тем как запускать интервал мы запишем текушее системное время
//
//         this.startTime = Date.now();
//
//         this.id = setInterval(()=>{
// // получили текушее время
//             const currentTime = Date.now();
// // посчитаем разницу во времени
//
//             const delteTime = currentTime - this.startTime;
//
// // разница во времени
//             updateClockFace(delteTime);
//         }, 100);
//
//            },
//     // метод
//     stop(){
//         clearInterval(this.id);
//     }
// };
// startBtn.addEventListener('click', timer.start.bind(timer));
// stopBtn.addEventListener('click',timer.stop.bind(timer));
//
// function updateClockFace(time) {
//    const formatteredTime =  formatTime(time);
//     clockFace.textContent = formatteredTime;     // записали в html textContent
// }
// function formatTime(ms) {
//     const date = new Date(ms);
//
//     let minutes = date.getMinutes();
//     minutes = minutes < 10 ? `0${minutes}` : minutes;  //  Добавили 0 перед циф до 10
//
//     let seconds = date.getSeconds();
//     seconds = seconds < 10 ? `0${seconds}` : seconds; //
//
//
// // приобразуем число в строку- и получим только первые цифры .slice(0,1)
//     let mseconds = String(date.getMilliseconds()).slice(0,1);
//     return `${minutes}:${seconds}.${mseconds}`;
// }

// 5. -  каждый раз при нажатии на кнопку будет запускаться новый интервал
// проверим запущен ли наш счетчик или нет

//
// const startBtn = document.querySelector('button[data-action="start"]');
// const stopBtn = document.querySelector('button[data-action="stop"]');
// const clockFace = document.querySelector('.clockface');
//
// const timer = {
//     id: null,
//     startTime: null,
//     isActive: false,// флажок на проверку запушен или НЕт
//
//     start(){
//         if(this.isActive)return; // если он уже запущен нечего не делай и выходи из фун-и
//         // иначе Выполняй весь код
//         this.isActive = true;
//
//         this.startTime = Date.now();
//
//         this.id = setInterval(()=>{
//             const currentTime = Date.now();
//
//             const delteTime = currentTime - this.startTime;
//
//             updateClockFace(delteTime);
//         }, 100);
//
//     },
//     stop(){
//         clearInterval(this.id);
//     }
// };
// startBtn.addEventListener('click', timer.start.bind(timer));
// stopBtn.addEventListener('click',timer.stop.bind(timer));
//
// function updateClockFace(time) {
//     const formatteredTime =  formatTime(time);
//     clockFace.textContent = formatteredTime;
// }
// function formatTime(ms) {
//     const date = new Date(ms);
//
//     let minutes = date.getMinutes();
//     minutes = minutes < 10 ? `0${minutes}` : minutes;
//
//     let seconds = date.getSeconds();
//     seconds = seconds < 10 ? `0${seconds}` : seconds;
//
//     let mseconds = String(date.getMilliseconds()).slice(0,1);
//     return `${minutes}:${seconds}.${mseconds}`;
// }

// 6.  на STOP обновить интерфейс
// Нужно обновить текушее значение времени
// delteTime - сбросить в  0
// -  делаем свойством обьекта     delteTime : 0,

// const startBtn = document.querySelector('button[data-action="start"]');
// const stopBtn = document.querySelector('button[data-action="stop"]');
// const clockFace = document.querySelector('.clockface');
//
// const timer = {
//     id: null,
//     startTime: null,
//     delteTime : 0,
//     isActive: false,// флажок на проверку запушен или НЕт
//
//     // методы  Старт Стоп
//     start(){
//         if(this.isActive)return; // если он уже запущен нечего не делай и выходи из фун-и
//         // иначе Выполняй весь код
//         this.isActive = true;
//         this.startTime = Date.now();
//
//         this.id = setInterval(()=>{
//             const currentTime = Date.now();
//
//             this.delteTime = currentTime - this.startTime;
//             updateClockFace(this.delteTime);
//         }, 100);
//     },
//     stop(){
//         clearInterval(this.id);
//         this.delteTime = 0;
//         updateClockFace(this.delteTime);
//         this.isActive = false;
//     }
// };
// // две кнопки Старт Стоп
// startBtn.addEventListener('click', timer.start.bind(timer));
// stopBtn.addEventListener('click',timer.stop.bind(timer));
//
// function updateClockFace(time) {
//     const formatteredTime =  formatTime(time);
//     clockFace.textContent = formatteredTime;
// } // обновляет интерфейс
//
// function formatTime(ms) {
//     const date = new Date(ms);
//
//     let minutes = date.getMinutes();
//     minutes = minutes < 10 ? `0${minutes}` : minutes;
//
//     let seconds = date.getSeconds();
//     seconds = seconds < 10 ? `0${seconds}` : seconds;
//
//     let mseconds = String(date.getMilliseconds()).slice(0,1);
//     return `${minutes}:${seconds}.${mseconds}`;
// }  // форматируем вид

// 7. ========    теперь добывим поузу


// const startBtn = document.querySelector('button[data-action="start"]');
// const stopBtn = document.querySelector('button[data-action="stop"]');
// const clockFace = document.querySelector('.clockface');
//
// const timer = {
//     id: null,
//     startTime: null,
//     delteTime : 0,
//     isActive: false,// флажок на проверку запушен или НЕт
//
//     // методы  Старт Стоп
//     start(){
//         if(this.isActive)return; // если он уже запущен нечего не делай и выходи из фун-и
//         // иначе Выполняй весь код
//         this.isActive = true;
//         this.startTime = Date.now() - this.delteTime; // = времени паузы
//
//
//         this.id = setInterval(()=>{
//             const currentTime = Date.now();
//
//             this.delteTime = currentTime - this.startTime;
//             updateClockFace(this.delteTime);
//         }, 100);
//     },
//
//     stop(){ // теперь работает как поузва
//         clearInterval(this.id); // останавливает интервал
//         this.isActive = false;
//     },
//     reset(){
//         this.stop();
//         this.delteTime = 0;
//         updateClockFace(this.delteTime);
//     }
// };
// // две кнопки Старт Стоп
//
// startBtn.addEventListener('click', timer.start.bind(timer));
// stopBtn.addEventListener('click',timer.stop.bind(timer));
//
// function updateClockFace(time) {
//     const formatteredTime =  formatTime(time);
//     clockFace.textContent = formatteredTime;
// } // обновляет интерфейс
//
// function formatTime(ms) {
//     const date = new Date(ms);
//
//     let minutes = date.getMinutes();
//     minutes = minutes < 10 ? `0${minutes}` : minutes;
//
//     let seconds = date.getSeconds();
//     seconds = seconds < 10 ? `0${seconds}` : seconds;
//
//     let mseconds = String(date.getMilliseconds()).slice(0,1);
//     return `${minutes}:${seconds}.${mseconds}`;
// }  // форматируем вид
