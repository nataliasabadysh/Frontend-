((win, doc) => {
  const offsetEl = doc.querySelector('.js-page-y-offset');

  const paragraphs = Array.from(doc.querySelectorAll('.js-text'));
  //выбераем все параграфи в псевдо- колекцию js-text -> делаем Array.from массив всех

  const offsets = collectVerticalOffsets(paragraphs);
  // соберет вертикальные Offsets моих эл и передаем paragraphs

  updateOffsetValue(0);

  win.addEventListener('scroll', handleScroll);

  function handleScroll(event) {
    updateOffsetValue(pageYOffset);
    setActiveParagraph(pageYOffset);
  }

  //  получаем текущую прокрутку в окне
  function setActiveParagraph(currentWindowScroll) {
    Object.keys(offsets).forEach(key => { // Object.keys(offsets) - состовляем массив клюей. forEach -Для каждого ключа
      if (offsets[key] <= currentWindowScroll) { // if (offsets[key] -  если значение этого ключа <=текушему текушее прокрутка в одкне
        setActiveItem(paragraphs, key);
      }
    });
  }

  function setActiveItem(items, idx) {
    const prevActiveItem = doc.querySelector('.js-text.current');  // ищу '.js-text.current

    if (prevActiveItem) {
      prevActiveItem.classList.remove('current');  //  если нахожк то его снимаю
    }

    const currActiveItem = items[idx];// во всех моих араграфам по ключу выбераю эл со вторым индексом
    currActiveItem.classList.add('current');
  }

  function collectVerticalOffsets(elements) {  // берет эл проходиться reduce соберает offsets- наш обьект
    return elements.reduce((offsets, el, idx) => {  // .белет el - текуший параграф и индех
      offsets[idx] = el.offsetTop;                  // с таким ключем за
      return offsets;
    }, {});
  }

  function updateOffsetValue(val) {
    offsetEl.textContent = `pageYOffset: ${val}`;
  }
})(window, document);
