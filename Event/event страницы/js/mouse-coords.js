((doc, win) => { // обьевление фун-и, Анонимная самовызавающаясь фун-я передаем как параметр (document, window)

  const winCoordsEl = doc.querySelector('.js-win-coords');  // 1й обзац выбераем в отдельную переменную
  const docCoordsEl = doc.querySelector('.js-doc-coords');  // 2й обзац выбераем в отдельную переменную

  updateCoords(0, 0, 0, 0);

  insertSpacer();// вызываем фун-ю которая добавить высоту body

  win.addEventListener('mousemove', handleMouseMove); //  вешаем слушатеь передвижения мишки + callback

  function handleMouseMove({ clientX, clientY, pageX, pageY }) {// callback- деструктуризирует , получает event события с  MouseEvent default обьектов
    updateCoords(clientX, clientY, pageX, pageY);
  }

  function updateCoords(cx, cy, px, py) { //
    winCoordsEl.textContent = `Относительно окна: (clientX: ${cx}, clientY: ${cy})`;
    docCoordsEl.textContent = `Относительно документа: (pageX: ${px}, pageY: ${py})`;
  }

  function insertSpacer() { // Фун-я добовляет место to body
    const spacer = doc.createElement('div');
    spacer.style.height = '2000px';
    doc.body.appendChild(spacer);
  }
})(document, window); // фун-я самовызываеться (document, window)
