((w, d) => {
  const chattyValue = d.querySelector('.chatty-container');
  let counter = 0;  // Счетчик

  w.addEventListener('mousemove', throttle(handleMouseMove, 100));  // слушаем движение мышки

  function handleMouseMove(event) { // При каждом срабатывании события движении мышки
    counter += 1; // увеличиваем счетчик на 1
    chattyValue.textContent = counter; // и его текушее значение выводим в дом узел counter
  }

  function throttle(fn, delay) { // фун-я которая выполнит event
      // fn -та фун -я которую нужнно приостановить исполнение
      //delay - задержка

    let lastCall = 0;

    // наш callback .
    return function(...args) {
      const now = new Date().getTime();  // текушее время или милисек просшедших

      if (now - lastCall < delay) {  // текушее время - время последненго вызова < и она меньше чем задержка
        return;       // то мы просто выходим с фун-и
      }

      lastCall = now; //если прошло больше времени то  записую текушее время

      return fn(...args);// возращаю передавая аргументы
    };
  }

  function throttleWithRAF(fn) {
    let isFiring = false;

    return function(...args) {


      //выполнется не чаше чем брайзер можеит отресовать
      if (!isFiring) {                  // если это действие не происходит сейчас то мы
        requestAnimationFrame(() => {   // то мы вызываем функцию requestAnimationFrame передаем 2ю фун-ю
          fn(...args);                  // все аргументы
          isFiring = false;
        });
      }

      isFiring = true;
    };
  }
})(window, document);
