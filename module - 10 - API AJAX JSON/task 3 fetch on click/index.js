const btn = document.querySelector("#js-btn");
const output = document.querySelector("#js-output");

const onClick = () => {
    // по клику сделаем fetch к сервису хранения простых JSON конструкций.
    // По указаному URL лежит JSON с данными о пользователе
    fetch("https://api.myjson.com/bins/k9i31")
    // fetch вернет промис, у которого есть метод then
        .then(response => {
            // в первом then всегда проверяется состояния ответа,
            // если поле ok обьекта response правдиво (truthy) то возвращаем response.json() - сами данные,
            // которые можно будет использовать в следующем then
            if (response.ok) return response.json();

            // если if не выполнился то "кидаем" ошибку
            throw new Error("Error fetching data");
        })
        .then(data => {
            // во втором then доступны данные которые мы вернули из первого then, результат responce.json()
            console.log("data inside then: ", data); // {name: "Mango", age: 2, mood: "happy"}

            // используем JSON.stringify для преобразования обьекта в строку,
            // чтобы повесить результат как текстовый контент в абзац
            output.textContent = JSON.stringify(data);
        })
        .catch(error => {
            // catch обрабатывает возможную ошибку запроса
            console.error("Error: ", error);
        });
};

btn.addEventListener("click", onClick);
