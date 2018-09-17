// слушатели на Локал Сторидж не вешаються
// Локал Сторидж  - для место для хранения


// localStorage.setItem('name', 'Natalia');
// localStorage.setItem('title', 'Home Work');

// =* проблема То что он хранит только строки

localStorage.setItem('my-app', 'Home Work');// ('key', 'value');

const userSetting = {
    theme : 'light',
    fontSize: 24,
};
// запишем в тот же ключ
// значение перезапишеться

localStorage.setItem('my-app', userSetting);
//   [object Object]   - обьек приобразовываеться к строке
// значение перезапишеться
localStorage.setItem('my-app', JSON.stringify(userSetting)); // {theme: "light", fontSize: 24}  - строка



// 2  Получим данные- если там есть что то то он вернет строку если не найдет такого ключа  то вернет null

localStorage.setItem('my-app', 'Home Work');// ('key', 'value');
const fromLS  = localStorage.getItem('my-app');

console.log(fromLS);  // Home Work



// 3 Выведем  обькт -  но мы получим строку Нужно строку распарсить
const userSetting = {
    theme : 'light',
    fontSize: 24,
};
localStorage.setItem('my-app', JSON.stringify(userSetting));
const fromLS  = JSON.parse(localStorage.getItem('my-app'));// + JSON.parse(.. = js обьект

console.log(fromLS);  // Home Work


// Очистеть Локал сторыдж


const userSetting = {
    theme : 'light',
    fontSize: 24,
};
localStorage.setItem('my-app', JSON.stringify(userSetting));
const fromLS  = JSON.parse(localStorage.getItem('my-app'));// + JSON.parse(.. = js обьект
console.log(fromLS);  // Home Work

localStorage.removeItem('my-app');// Очистеть Локал сторыдж

localStorage.clear(); // все удаляет


// 4  ==========   Отловим Ошибки try catch в операциях parse


// от json - мы можем получить  ошибки    во времени выполнения (не синтаксическая )
// выполнется catch
// если нет ошибок то он JSON.parse(serializedState);

// == try

const LOCALSTORAGE = (w => {
    if (!w) return;

    const isActive = "localStorage" in w;

    const get = key => {
        try {    // try - рпопробуй сделать это                                                  // если гдето будет ошибка тоо
            const serializedState = localStorage.getItem(key);  // localStorage.getItem(key) -тут

            return serializedState === null                     // проверит если нет ключа
                ? undefined
                : JSON.parse(serializedState);                  // serializedState - или тут
        } catch (err) {
            console.error("Get state error: ", err);
        }
    };
// try - не упадет разметка


//===   то же самое с set -
    const set = (key, value) => {
        try {
            const serializedState = JSON.stringify(value);
            localStorage.setItem(key, serializedState);
        } catch (err) {
            console.error("Set state error: ", err);
        }
    };
    const publicAPI = { isActive, get, set ,};
    return publicAPI;
})(window);
console.log(LOCALSTORAGE);

// слушатели на Локал Сторидж не вешаються
// Локал Сторидж  - для место для хранения