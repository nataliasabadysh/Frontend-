const sections = document.querySelectorAll(".section");
// ---------
const offsets = collectVerticalOffsets(sections);
// Берем все наши секции с разметки  с классом sections
// Передаем их в collectVerticalOffsets - возвращает такой же обькт

function collectVerticalOffsets(elements) {
    const obj = {};

    elements.forEach(el => {   // we can use reduse
        obj[el.id] = el.offsetTop;
    });

    return obj; //
}
console.log(offsets); // {home: 0, portfolio: 800, about: 1600, contact: 2400} - наши id
// ---------
const navContainerHeight = document.querySelector(".page-header").offsetHeight; // page-header - берем его высоту-offsetHeight
//const navContainerHeight = document.querySelector(".page-header").getBoundingClientRect.hight;  - или getBoundingClientRect.hight

setTopBodyPadding(navContainerHeight); // сверху нашего боди делаем паддинг в размер нашего  page-header

/* Helper functions */
function setTopBodyPadding(val) {
    document.body.style.paddingTop = val + "px"; //
}

window.addEventListener(
    "scroll",
    handleWindowScroll
);


// берем Текущая позиция скролла

function handleWindowScroll() {
    const scrollPos = pageYOffset;

//  const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;  - эта запись для всех браузеров

    Object.keys(offsets).forEach(key => {   //  из -pageYOffset выбраем все ключи

 // При прокрутки будет выполнятся if (offsets[key] <= scrollPos)
            if (offsets[key] <= scrollPos) {    // проверяем если текущая значение ключа  меньще чем скрал пост значит
            setActiveItem(key);             // сделаем новый АКТИВ
        }
    });
}
function setActiveItem(id) {                    // выбераем  какойто a.active - который уже есть у меня
    const prevActiveItem = document.querySelector(".site-nav a.active");
    prevActiveItem.classList.remove("active");  // уберает с предедушего  , у которого уже есть класс active

    const curActiveItem = document.querySelector(`.site-nav a[href*="${id}"]`);  // потом ищет ссылку *-это квключая
    curActiveItem.classList.add("active");      // и туда вставляет active
}
