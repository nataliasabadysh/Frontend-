 'use strict'

//   ====  fetch(url- строка, options-обькт )
// возвращает ПРОМИС значит мы можем + then
//



 fetch("https://test-website.name/some/url") // по  умолчинию делает ГЕТ запрст
     // ответ получим промис

     .then(response => {   // обрабатываем ответ от сервера (статус , код ответа , заголовки)
 // response - это имя параметра (callback)
 // Но в этот параметр будет переданна экземплят Класса Response

         //response handling
     })
     .then(data => {       // данные от сервера
         // data handling
     })
     .catch(error => {
         // error handling
     });



 // ==== Fetch API — предоставляет интерфейс,
 // набор методов и объектов запроса и ответа, для получения ресурсов от сервера.




 // ==== fetch + class response

 /*
 Response — в первый then после вызова fetch передается экземпляр класса Response,
  который снабжает екземпляр различными методами и свойствами.
 В нем содержится служебная информация о состоянии ответа сервера.
  */


 fetch("https://test-website.name/some/url")
     .then(response => {
         if(response.ok) return response.json();
                                    // .ok - поле  true/false и мы возвращаем Json-> js обькт

         throw new Error(`Error while fetching: ${response.statusText}`);
     })
     .then(data => {                // Здесть будет результат response.json();
         // data handling
     })
     .catch(error => {
         // error handling
     });
// =================  Если нам нужно указать дополнительные заголовки то есть класс Headers


 /*
Headers — позволяет выполнять различные действия в заголовках HTTP-запроса и ответа.
Эти действия включают в себя извлечение, настройку,
добавление и удаление заголовков (методы append, has, get, set, delete).
 */
 // Headers - это обьект


 const headers = new Headers();

 headers.append("Content-Type", "text/plain"); //=>  "key":"value"  "Content-Type":"text/plain"
 // Добовляет ключ сначение обькта
 /*
 Для составления заголовков запроса,
 если необходимы методы заголовков,
 можно использовать объект настроек
 при вызове new Headers, с парами ключ:значение.
 */
const headers = new Headers({  // headr можем передавать в виде обьекта
    'Content-Type': 'application/json',
    'X-Custom-Header': 'custom value'
 });

// Тогда наш fatch - запрос выглядит так
 fetch('my-cool-website.net/data', { //  - это url

     //- это options
     method: 'GET',
     headers: {
         'Content-Type': 'application/json',
         'X-Custom-Header': 'custom value'
     }
 }).then(() => {  });







 headers.append("X-Custom-Header", "custom value");
 headers.has("Content-Type"); // true
 headers.get("Content-Type"); // "text/plain"
 headers.set("Content-Type", "application/json");
 headers.delete("X-Custom-Header");
//
//
