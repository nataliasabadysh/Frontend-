'use strict'



//  ====  NAVIGATOR
//
// Документация на MDN
// window.navigator.onLine браузер в online ? true : false
// window.navigator.userAgent тип и версия браузера
// window.navigator.cookieEnabled
// window.navigator.geolocation определение getCurrentPosition и отслеживание изменений watchPosition
// Отобразить свое положение на карте гугл
// Отобразить свой адрес с помощью сервиса гугл
// База данных по названию городов с геокоординатами здесь
// window.navigator.language как правило это язык интерфейса браузера
// window.navigator.oscpu || window.navigator.platform текущая ОС
// window.navigator.mediaDevices Возващает Promise, который будет изучаться позднее.
//
//     В случае, если Promise вернет ответ без ошибки, то будет предоставлен доступ к микрофону,
//     веб-камере и т.п. мультимедийным устройствам


// ============ geolocation


navigator.geolocation
    .getCurrentPosition(success, error);

function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    return [latitude, longitude]
}

function error() {
    return "Error";
}

// Latitude is 50 °
//
// Longitude is 36 °

// ---  Show my location  -- //

// <p>
// <button id="btn">Show my location</button>
// </p>
// <div id="out"></div>

const btn = document.getElementById("btn");
const output = document.getElementById("out");

btn.addEventListener('click', geoShowMyPosition);

function geoShowMyPosition() {
    // Feature detection
    if (!navigator.geolocation){
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    function error() {
        output.innerHTML = "Unable to retrieve your location";
    };

    output.innerHTML = "<p>Locating…</p>";

    navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    output.innerHTML = `<p>Latitude   is ${latitude} </p> 
<p>Longitude is ${longitude} °</p>`;

    const img = new Image();
    img.src = `http://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=13&size=300x300&sensor=false`;

    output.appendChild(img);
};