'use strict';

/*
  Создайте компонент галлереи изображений следующего вида.

    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>

    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2


    Реализуйте функционал:

      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.

      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.

      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются
        динамически, при загрузке страницы.

      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.

      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.

      - Изображений может быть произвольное количество.

      - Используйте делегирование для элементов preview.

      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.

      - CSS-оформление и имена классов на свой вкус.


    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
    { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
    { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
    { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];


/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так,
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина
  аналогичный заданию выше.

  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию

  Тогда создание экземпляра будет выглядеть следующим образом.
*/

new Gallery({
    items: galleryItems,
    parentNode: document.querySelector('.image-gallery'),
    defaultActiveItem: 1
});



// ========= My project  ====== ///










// Реализуйте функционал:
//
//     - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
//
// - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
// создается динамически при загрузке страницы.
//
// - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
//     он содержит ссылку на большое изображение. preview и его элементы, также создаются
// динамически, при загрузке страницы.
//
// - При клике в элемент preview, необходимо подменить src тега img внутри fullview
// на url из data-атрибута выбраного элемента.
//
// - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
//
// - Изображений может быть произвольное количество.
//
// - Используйте делегирование для элементов preview.
//
// - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
//
// - CSS-оформление и имена классов на свой вкус.

//
// 🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
//     размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
//     Подберите изображения одинаковых пропорций.
// */

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.

*/

class Gallery {
    constructor({items, parent, defaultActiveItem = 1}){
        if(!parent || !items || items.length === 0){
            throw new Error('Invalid gallery initial data');
        }

        defaultActiveItem = Math.min(1, items.length - 1);
        const galleryMarkup =
            `<div class="fullview">
      <img src="${items[defaultActiveItem].fullview}" alt="${items[defaultActiveItem].alt}">
    </div>
    <ul class="preview">${Gallery.makePreviewItems(items, defaultActiveItem)}</ul>`;
        parent.innerHTML = galleryMarkup;
        parent.classList.add('js-image-gallery');

        Gallery.addEventHandlers(parent);
    }

    static makePreviewItems(items, activeIndex){
        return items
            .map((item, i) => `<li ${i === activeIndex ? 'class="preview-active"' : ''}><img src="${item.preview}" data-fullview="${item.fullview}" alt="${item.alt}"></li>`)
            .join('');
    }

    static addEventHandlers(parent) {
        const fullViewTop = parent.getBoundingClientRect().top;
        const fullview = document.querySelector('.fullview img');

        parent.querySelector('.preview').addEventListener('click', e => {
            const target = e.target;
            if(target.tagName === 'IMG'){
                if(!fullview.src.includes(target.dataset.fullview)){
                    Gallery.view(parent, target);
                }
                e.stopPropagation();
                window.scrollTo({top: fullViewTop, behavior: 'smooth'});
            }
        });
    }

    static view(parent, preview) {
        let img = parent.querySelector('.fullview img');
        img.src = preview.dataset.fullview;
        img.alt = preview.alt;

        const activeClass = 'preview-active';
        parent.querySelector('.' + activeClass).classList.remove(activeClass);
        preview.parentElement.classList.add(activeClass);
    }
}


const galleryItems = [
    { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
    { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
    { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" }
];

new Gallery({
    items: galleryItems,
    parent: document.querySelector('.image-gallery'),
    defaultActiveItem: 1
});



/* Далее плагин работает в автономном режиме */












// 2
//
// const galleryItems = [
//     { preview: './img/preview-1.png', fullview: './img/image-1.jpg', alt: "alt text 1" },
//     { preview: './img/preview-2.png', fullview: './img/image-2.jpg', alt: "alt text 2" },
//     { preview: './img/preview-3.png', fullview: './img/image-3.jpg', alt: "alt text 3" },
//     { preview: './img/preview-4.png', fullview: './img/image-4.jpg', alt: "alt text 4" },
//     { preview: './img/preview-5.png', fullview: './img/image-5.jpg', alt: "alt text 5" },
//     { preview: './img/preview-6.png', fullview: './img/image-6.jpg', alt: "alt text 6" },
// ];
//
// class GalleryImages {
//     constructor(items, parentNode){
//         this.items = items;
//         this.parentNode = parentNode;
//
//     }
//
//     addItems({preview, fullview, alt}){
//         let items = `<li class="preview__items"><img src=${preview} data-fullview=${fullview} alt=${alt} width='350'></li>`
//         return items
//     }
//
//     addImage(){
//         let div = `<div class="fullview"><img src=${this.items[0].fullview} data-fullview=${this.items[0].fullview} alt=${this.items[0].alt} width='1280'></div>`
//         let ul =`<ul class = "preview__list"></ul>`
//         this.parentNode.insertAdjacentHTML('beforeend', div);
//         this.parentNode.insertAdjacentHTML('beforeend', ul);
//         let fullImg = this.parentNode.firstElementChild
//         let li = this.items.reduce((acc,val)=> acc + this.addItems(val),'')
//         let list = this.parentNode.lastElementChild
//         let img = list.querySelectorAll('img')
//         list.insertAdjacentHTML('beforeend', li)
//
//         list.addEventListener('click', this.handlerPreviewClick);
//
//
//
//
//     }
//     handlerPreviewClick(ev){
//         let evn = ev.target
//         let fullImg = this.parentNode.querySelector('.fullview');
//         let items = this.parentNode.lastElementChild.children
//         if(evn.nodeName !=='IMG')return;
//         fullImg.firstElementChild.setAttribute('src', evn.dataset.fullview )
//
//         if(fullImg.firstElementChild.getAttribute('src') === evn.dataset.fullview){
//             evn.parentNode.classList.add('add')
//         }
//         for(let res of items){
//             if (evn.dataset.fullview  !== res.firstElementChild.dataset.fullview) res.classList.remove('add')
//         }
//     }
//
// }
//
// let gallary = document.querySelector('.image-gallery');
// let img = document.querySelector('.img')
//
// const red = new GalleryImages(  galleryItems, img);
// const der = new GalleryImages( galleryItems, gallary)
// red.addImage()
// der.addImage()
//
//









// === 3


// const galleryItems = [
//     { preview: 'img/preview-1.jpeg', fullview: 'img/fullwiew-1.jpeg', alt: "alt text 1" },
//     { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
//     { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
//     { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
//     { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
//     { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
// ];
//
// const gallery = document.querySelector('.js-image-gallery');
// const createElement = elem => document.createElement(elem);
//
// const createImage = (src, alt) => {
//     const image = createElement('img');
//
//     image.src = src;
//     image.alt = alt;
//
//     return image;
// }
//
// const createImageFullview = ({ fullview, alt }) => {
//     const fullviewDiv = createElement('div');
//     const imageFullview = createImage(fullview, alt);
//
//     fullviewDiv.append(imageFullview);
//
//     return fullviewDiv;
// }
//
// const createImagePreview = ({ preview, fullview, alt }) => {
//     const imagePreview = createImage(preview, alt);
//
//     imagePreview.dataset.fullview = fullview;
//
//     return imagePreview;
// }
//
// const createPreviewItem = obj => {
//     const itemPreview = createElement('li');
//     const imagePreview = createImagePreview(obj);
//
//     itemPreview.classList.add('image-wrapper')
//     itemPreview.append(imagePreview);
//
//     return itemPreview;
// };
//
// const paintPreviwItem = images => {
//     const addImages = images.map(image => createPreviewItem(image));
//
//     return addImages;
// };
//
// const randColor = () => {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     const color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
//
//     return color;
// };
//
// const hoverDiv = () => {
//     const imageWrapper = document.querySelectorAll('.image-wrapper');
//
//     imageWrapper.forEach(val => {
//
//         val.addEventListener('mouseover', () => {
//             val.style.border = `10px solid ${randColor()}`;
//         });
//
//         val.addEventListener('mouseout', () => {
//             val.style.border = '10px solid #fff';
//         });
//     });
// };
//
//
// const onLoad = () => {
//     const fullview = createImageFullview(galleryItems[0]);
//     const list = createElement('ul');
//     const images = paintPreviwItem(galleryItems);
//     const fullImage = fullview.querySelector('img');
//
//     const onClickImage = event => {
//         const dataSrc = event.target.dataset.fullview;
//         const imgAlt = event.target.alt;
//
//         if (event.target !== event.currentTarget) {
//             fullImage.src = dataSrc;
//             fullImage.alt = imgAlt;
//         }
//     };
//
//     fullview.classList.add('fullview');
//     list.classList.add('preview');
//     list.append(...images);
//     gallery.append(fullview, list);
//
//     list.addEventListener('click', onClickImage);
//     hoverDiv();
// };
//
// document.addEventListener('DOMContentLoaded', onLoad);
//

// ====== + class


new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.image-gallery'),
  defaultActiveItem: 1
});

const galleryItems = [
    { preview: 'img/preview-1.jpeg', fullview: 'img/fullwiew-1.jpg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
    { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
    { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];


class Gallery {
    constructor({ items, parentNode, defaultActiveItem }) {
        this.items = items,
            this.parentNode = parentNode,
            this.defaultActiveItem = defaultActiveItem

        document.addEventListener("DOMContentLoaded", this.onLoad.bind(this));
    }

    static createElement(elem) {
        return document.createElement(elem);
    }


    static createImage(src, alt) {
        const image = Gallery.createElement('img');

        image.src = src;
        image.alt = alt;

        return image;
    }

    static createImageFullview({ fullview, alt }) {
        const fullviewDiv = Gallery.createElement('div');
        const imageFullview = Gallery.createImage(fullview, alt);

        fullviewDiv.append(imageFullview);

        return fullviewDiv;
    }


    static createImagePreview({ preview, fullview, alt }) {
        const imagePreview = Gallery.createImage(preview, alt);

        imagePreview.dataset.fullview = fullview;

        return imagePreview;
    }

    static createPreviewItem(obj) {
        const itemPreview = Gallery.createElement('li');
        const imagePreview = Gallery.createImagePreview(obj);

        itemPreview.classList.add('image-wrapper');
        itemPreview.append(imagePreview);

        return itemPreview;
    }

    static paintPreviwItem(images) {
        const addImages = images.map(image => Gallery.createPreviewItem(image));

        return addImages;
    }

    static randColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = "#" + r.toString(16) + g.toString(16) + b.toString(16);

        return color;
    }

    static hoverDiv() {
        const imageWrapper = document.querySelectorAll('.image-wrapper');

        imageWrapper.forEach(val => {

            val.addEventListener('mouseover', () => {
                val.style.border = `10px solid ${Gallery.randColor()}`;
            });

            val.addEventListener('mouseout', () => {
                val.style.border = '10px solid #fff';
            });
        });
    }
    onClickImage(fullImage){
        return event => {
            const dataSrc = event.target.dataset.fullview;
            const imgAlt = event.target.alt;

            if(event.target.classList.contains('image-wrapper')) return;

            if (event.target !== event.currentTarget) {
                fullImage.src = dataSrc;
                fullImage.alt = imgAlt;
            }
        }
    }

    onLoad() {
        const fullview = Gallery.createImageFullview(this.items[this.defaultActiveItem]);
        const list = Gallery.createElement('ul');
        const images = Gallery.paintPreviwItem(this.items);
        const fullImage = fullview.querySelector('img');
        console.log(fullImage)

        fullview.classList.add('fullview');
        list.classList.add('preview');
        list.append(...images);
        this.parentNode.append(fullview, list);

        list.addEventListener('click', this.onClickImage(fullImage));
        Gallery.hoverDiv();
    }
}

new Gallery({
    items: galleryItems,
    parentNode: document.querySelector('.image-gallery'),
    defaultActiveItem: 2
})