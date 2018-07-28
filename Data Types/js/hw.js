 "use strict";

 /*
   Напишите скрипт, для авторизации администратора в панели управления.

   При загрузке страницы у посетителя запрашивается логин через prompt:

     - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
     - Если было введено что либо другое, что не совпадает со значением константы adminLogin,
        показывать alert с текстом 'Доступ запрещен!'
     - Если был введен логин совпадающий со значением константы adminLogin, спрашивать пароль через prompt.

   При вводе пароля:

       - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
       - Если введен пароль который не совпадает со значением константы adminPassword,
         показывать alert с текстом 'Доступ запрещен!'
       - Если введён пароль который совпадает со значением константы adminPassword,
         показывать alert с текстом 'Добро пожаловать!'

   🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
 */

 // const adminLogin = 'admin';
 // const adminPassword = 'm4ngo1zh4ackz0r';


 /*
   ⚠️ ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

   Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
   Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах):
     * sharm - 15
     * hurgada - 25
     * taba - 6.
   Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
   результат сохранить в переменную.
   Необходимо проверить являются ли введенные данные целым положительным числом.

     - В случае неверного ввода от пользователя, скрипт показывает alert с текстом
       "Ошибка ввода" и больше ничего не делает.
     - В случае верного ввода, последовательно проверить кол-во мест в группах,
       и кол-во необходимых мест введенных пользователем.
   Если была найдена группа в которой количество мест больше либо равно необходимому,
   вывести сообщение через confirm, что есть место в группе такой-то, согласен ли
   пользоваетель быть в этой группе?
     * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
     * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'

   Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
 */

 const groupSharm = "sharm".toUpperCase();
 const groupHurgada = "hurgada".toUpperCase();
 const groupTaba = "taba".toUpperCase();

 let customerGroup;

 let availabilitySharm = 15;
 let availabilityHurgada = 25;
 let availabilityTaba = 6;

 let customerReply;
 let orderAmount = Number(prompt("Уведіть кількість бажаних місць", 0));

 if(Number.isInteger(orderAmount) && orderAmount > 0) {
     if(orderAmount <= availabilityTaba){
         customerReply = confirm(`Група "${groupTaba}" має ${orderAmount} вільних місць. Оформити замовлення?`)
         if (customerReply) {
             customerGroup = groupTaba;
         }
     }
     if(!customerReply && orderAmount <= availabilitySharm){
         customerReply = confirm(`Група "${groupSharm}" має ${orderAmount} вільних місць. Оформити замовлення?`)
         if (customerReply) {
             customerGroup = groupSharm;
         }
     }
     if(!customerReply && orderAmount <= availabilityHurgada){
         customerReply = confirm(`Група "${groupHurgada}" має ${orderAmount} вільних місць. Оформити замовлення?`)
         if (customerReply) {
             customerGroup = groupHurgada;
         }
     }

     if(customerReply === undefined){
         alert("Вибачте, але вільних місць немає.");
     }else{
         if(customerGroup){
             switch(customerGroup){
                 case groupHurgada:
                     availabilityHurgada -= orderAmount;
                     break;
                 case groupSharm:
                     availabilitySharm -= orderAmount;
                     break;
                 case groupTaba:
                     availabilityTaba -= orderAmount;
                     break;
             }
             alert(`Приємної подорожі у групі "${customerGroup}"!`)
         }else{
             alert("Нам дуже шкода. Приходьте ще.");
         }
     }
 }else{
     alert("Помилка уведення кількості місць.");
 }