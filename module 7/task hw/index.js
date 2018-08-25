'use strict';

/*
  1. Модифицируйте готовую функцию createPostCard() из задания
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так,
    чтобы она принимала объект post с данными для заполнения полей
    в карточке.

  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает
    массив DOM-элементов всех постов.

  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
        img: "https://loremflickr.com/640/360",
        title: "Post title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-1.com'
    },
    {
        img: "https://loremflickr.com/640/360",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-2.com'
    },
    {
        img: "https://loremflickr.com/640/360",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-3.com'
    }
];


function createPost() {


    const card = document.createElement('div');
    card.classList.add('postCard');                     // <div class = "postCard">

    const postImage = document.createElement('img');    // <img class="post__image" src="img" alt="post image">
    postImage.classList.add('post__image');
    postImage.setAttribute('src', 'img');
    postImage.setAttribute('alt', 'post image');
    card.appendChild(postImage);                        // div =>+  <img >


    const postTitle = document.createElement('h2');     //<h2 class="post__title">title</h2>
    postTitle.classList.add('post__title');
    postTitle.textContent = 'title';
    card.appendChild(postTitle);                        // div =>+  < h2 >

    const postText = document.createElement('p');       // <p class="post__text">title</p>
    postText.classList.add('post__text');
    postText.textContent = 'text';
    card.appendChild(postText);                         // div =>+  < p >


    const button = document.createElement('a');         // <a class="button" href="link"></a>
    button.classList.add('button');
    button.setAttribute('href', 'link');
    card.appendChild(button);                           // div =>+  < a >

    const postItem = document.querySelector('wrapper');  // in html div + то что мы создали
    postItem.appendChild(card);                         // Динамисески создали
    console.log(card);

    return card;
}


// ==== ///
// const createPostCard = ({img, title, text, link}) => {
//     return `
//           <div class="post">
//             <img src="${img}" class="post__image" alt="post image">
//             <h2 class ="post__title">${title}</h2>
//             <p class="post__text">${text}</p>>
//             <a class="button" href="${link}">Read more</a>
//          </div>
//        `;
// };

