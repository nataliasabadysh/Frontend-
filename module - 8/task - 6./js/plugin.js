'use strict'

/*
  Создайте функцию createPostCard(), которая
  создает и возвращает DOM-узел карточки поста.

  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.

  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

// HTML

// <div class="post">
//     <img class="post__image" src="http://via.placeholder.com/400x150" alt="post image">
//     <h2 class="post__title">Lorem ipsum dolor</h2>
//      <p class="post__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!</p>
//      <a class="button" href="#">Read more</a>
// </div>


function createPostCard() {

// <div class="post">
    const post = document.createElement('div');
    post.classList.add('post');

//<img class="post__image" src="http://via.placeholder.com/400x150" alt="post image">
    const img = document.createElement('img');
    img.classList.add('post__image');
    img.setAttribute('src', "http://via.placeholder.com/400x150");
    img.setAttribute('alt', 'post image');


// <h2 class="post__title">Lorem ipsum dolor</h2>
    const titlePost = document.createElement('h2');
    titlePost.classList.add('post__title');
    titlePost.textContent('Lorem ipsum dolor');


// <p class="post__text">
    const textPost = document.createElement('p');
    textPost.classList.add('post__text');
    textPost.textContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus...');


// <a class="button" href="#">Read more</a>
    const buttonPost = document.createElement('button');
    buttonPost.classList.add('button');
    buttonPost.setAttribute('href', "#");
    buttonPost.textContent('Read more');

// Вложенность разметки
    post.append(img, titlePost, textPost, buttonPost);
    return post;
}

const postCard = document.querySelector('.post-wrapper');
postCard.append(post);