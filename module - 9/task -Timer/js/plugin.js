'use strict';

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

startBtn.addEventListener('click', handleStartBtnClick); // bind убрали
stopBtn.addEventListener('click',timer.stop.bind(timer));

function handleStartBtnClick() {
    if (!timer.isActive) {
        timer.start();      // Первый раз запустили
        this.textContent = 'Pause';
    } else {                // А если он активный
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
