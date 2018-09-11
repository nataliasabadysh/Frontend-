
const nav = document.querySelector(".nav");
const list = document.querySelector(".nav > ul");
const toTopLink = document.querySelector('.to-top-link');
const navCoords = nav.getBoundingClientRect();

window.addEventListener("scroll", function() {
    if (pageYOffset >= navCoords.top) {
        document.body.style.paddingTop = nav.offsetHeight + "px"; // or = navCoords
        nav.classList.add("nav-fixed");
    } else {
        document.body.style.paddingTop = "";
        nav.classList.remove("nav-fixed");
    }
});

list.addEventListener("click", function(evt) {
    const target = evt.target;

    if (target === this || target.nodeName === "LI") return;

    evt.preventDefault();

    const href = target.getAttribute("href");
    const el = document.querySelector(href);

    const top =
        el.getBoundingClientRect().top + window.pageYOffset - nav.offsetHeight;

    window.scrollTo({ top: top, behavior: "smooth" });
});

toTopLink.addEventListener('click', function(evt) {
    evt.preventDefault();

    window.scrollTo({ top: 0, behavior: "smooth" });
});



// const nav = document.querySelector(".nav");
// const list = document.querySelector(".nav > ul");
// const toTopLink = document.querySelector('.to-top-link');
// const navCoords = nav.getBoundingClientRect(); // кол px при загрузке страници от верха к эл
//
// window.addEventListener("scroll", function() {
//     if (pageYOffset >= navCoords.top) {       //  текушее величину в окне navCoords больше или = pageYOffset
//         document.body.style.paddingTop = nav.offsetHeight + "px";
//         nav.classList.add("nav-fixed");
//     } else {
// // как только (pageYOffset меньше  navCoords.top то убераем класс фикст nav-fixed
//         document.body.style.paddingTop = "";
//         nav.classList.remove("nav-fixed");
//     }
// });
//
// list.addEventListener("click", function(evt) {
//     const target = evt.target;
//
//     if (target === this || target.nodeName === "LI") return;
//
//     evt.preventDefault();
//
//     const href = target.getAttribute("href");
//     const el = document.querySelector(href);
//
//     const top =
//         el.getBoundingClientRect().top + window.pageYOffset - nav.offsetHeight;
//
//     window.scrollTo({ top: top, behavior: "smooth" });
// });
//
// toTopLink.addEventListener('click', function(evt) {
//     evt.preventDefault();
//
//     window.scrollTo({ top: 0, behavior: "smooth" });
// });
//


