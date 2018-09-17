
console.log('before');
fetch('https://api.myjson.com/bins/k9i31')
    .then(response =>{
    if(response.ok) return response.json();

    throw new Error(`Error while fetching : ${response.statusText}`)

}).then(data => {
    console.log(data);     // {name: "Mango", age: 2, mood: "happy"}
}).catch(error =>{
    console.log('Error',error);
});
console.log('after');

// before
// after
// { name: "Mango", age: 2, mood: "happy" }

/*
console.log(response);

Response {type: "cors", url: "https://api.myjson.com/bins/k9i31", redirected: false, status: 200, ok: true, …}
body: (...)
bodyUsed: false
headers: Headers {}
ok: true
redirected:false
status: 200
statusText: "OK"
type: "cors"
url: "https://api.myjson.com/bins/k9i31"

*/

// ============  Ошибка при работе с асинхронным кодом

// Сначала вполняеться синхронный код
// Данные в не коллбэка не доступны
//  fetch - как только получить ответ от браузера тогда только выполнется - Ассинхронно
