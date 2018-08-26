
'use strict';

// --

//  //<button id="single" class="btn">SINGLE CALLBACK</button>
//  // Добавили  и после первого раза убрали слушатель
//
// const singleBtn = document.querySelector('#single');
// const handleClick = () => {
//     alert('CLICK!');
//     singleBtn.removeEventListener('click', handleClick);
// };
// singleBtn.addEventListener('click', handleClick);


// ====  Object User


// const btn = document.querySelector('.btn');
//
// const user = {
//     name: 'Mango',
//
//     showName() {
//         console.log(this);                          // <button class="btn">SINGLE CALLBACK</button>
//
//         // this будет ссылаться на button
//         // если использовать showName как callback
//
//         console.log(`My name is: ${this.name}`);    // My name is:
//         // тут undefined так как поля name нету у button
//     }
// };
// btn.addEventListener('click', user.showName);
//
//
// // передали ссылку на метод - user.showName
// // this ссылаеться на сам ДОМ узел - btn
// // {this.name}- не что
//
// btn.addEventListener('click', function (params){
//     console.log(this);                           // <button class="btn">SINGLE CALLBACK</button>
// });


// === Если мы хотим передать метод класс , обькта , -> ! user.showName.bind(user)
// = Тоесть мы передаем новую версию showName - но в привязанном контексте

// const btn = document.querySelector('.btn');
//
// const user = {
//     name: 'Mango',
//     showName() {
//         console.log(this);                       // {name: "Mango", showName: ƒ}
//         console.log(`My name is: ${this.name}`); // My name is: Mango
//     }
// };
// btn.addEventListener('click', user.showName.bind(user));



// // ====  Object-Event    + event - аргумент -
//
//  //<button class="btn">SINGLE CALLBACK</button>
//
// const btn = document.querySelector('.btn');
//
// btn.addEventListener('click', handleClick);
//
// function handleClick(event){
//    console.log(event);              //  MouseEvent {isTrusted: true, screenX: 911, screenY: 407, clientX: 610, clientY: 407, …}
//
// // event - это обькт с множеством полей type:'click'
// }

// ====  Если мы не хотим использовать this - что бы получить ссылку на эл где произошло событие
// enent.target; - ФАЗА ВСПЛЫТИЯ - ссылка на ДОМ узел  на то где событие сработало


// const btn = document.querySelector('.btn');
//
// btn.addEventListener('click', handleClick);
//
// function handleClick(event){
//     const target = event.target;// <button class="btn">Event</button>
//     console.log(target);
// }

// ==============  - ФАЗА ВСПЛЫТИЯ -  bubbling  - btn

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', handleClick);
//
// function handleClick(event){
//
//     console.log('handleClick');  // Обработчик события на - handleClick
//     // - ФАЗА ВСПЛЫТИЯ -  handleClick
//
//     const target = event.target;// <button class="btn">Event</button>
//     console.log(target);
// }


// // ==============  - ФАЗА ВСПЛЫТИЯ -  bubbling  - btn + body
//
// const btn = document.querySelector('.btn');
//
// // Если мы кликним на body -то событие сработает - тоесть в любом мет в окне
// document.body.addEventListener('click', handlerBodyClick);
//
// function handlerBodyClick() {
//     console.log('handlerBodyClick');  //  кликнули и получили - handlerBodyClick
// }
//
// // Если мы кликним на btn -то событие сработает
// // - Срработает только на этой кнопке + Сработает наше body - Кнопла расположенна в body- же
// btn.addEventListener('click', handleClick);
//
// function handleClick(event){
//     console.log('handleClick'); //  кликнули на кнопку  и получили - handleClick
//
//     const target = event.target;// <button class="btn">Event</button>
//     console.log(target);
// }
//
// // Срабатывает по пути всплытию , и срабатывают события с низу в верх
// // Кликним на  bnt -  handleClick , <button class=​"btn">​Event​</button>​ , handlerBodyClick
// // Кликним на  body -  handlerBodyClick


// ==============  - event.target

// - до которого дотонуло наше событие , сыпый глубокий
// самый глубоко вложенный эл нашего интерфейса(на клик)


// const btn = document.querySelector('.btn');
// btn.addEventListener('click', handleClick);
//
// function handleClick(event){
//     const target = event.target;  // - event.target - btn
//     console.log(target);
// }

// ==============  - event.currentTarget - где оно находиться

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', handleClick);
//
// function handleClick(event){
//     const target = event.target;  // - event.target - -целевой
//     console.log('event target', target);
//
//     const currentTarget = event.currentTarget; // - event.currentTarget  - текущий
//     console.log('currentTarget', currentTarget);
// }

//====================   Прекращение всплытия

// event.stopPropagation()
// event.stopImmediatePropagation()

