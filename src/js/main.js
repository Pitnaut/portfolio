const accordions = Array.from(document.querySelectorAll('.accordion'));

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    if (accordion.classList.contains('open')) {
      // Si el acordeón ya está abierto, quitarle la clase 'open'
      accordion.classList.remove('open');

      // A cada acordeón, quitarle la clase 'shrink'
      accordions.forEach((otherAccordion) => {
        otherAccordion.classList.remove('shrink');
      });
    } else {
      // Si el acordeón no está abierto o tiene la clase 'shrink', añadirle la clase 'open' y quitarle la clase 'shrink'
      accordion.classList.add('open');
      accordion.classList.remove('shrink');

      // A cada acordeón que no sea el clicado, añadirle la clase 'shrink' y quitarle la clase 'open'
      accordions.forEach((otherAccordion) => {
        if (otherAccordion !== accordion) {
          otherAccordion.classList.add('shrink');
          otherAccordion.classList.remove('open');
        }
      });
    }
  });
});