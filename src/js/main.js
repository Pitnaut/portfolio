const accordions = Array.from(document.querySelectorAll('.accordion'));

accordions.forEach((accordion) => {
  const title = accordion.querySelector('.accordion-title');

  accordion.addEventListener('click', () => {
    if (accordion.classList.contains('open')) {
      // Si el acordeón ya está abierto, quitarle la clase 'open'
      accordion.classList.remove('open');

      // Hacer que el título reaparezca
      setTimeout(() => {
        title.style.display = 'flex';
        setTimeout(() => {
          title.style.opacity = '1';
        }, 100); // Este tiempo puede ser ajustado para controlar la velocidad de la transición de opacidad
      }, 300); // Este tiempo debe coincidir con la duración de la transición

      // A cada acordeón, quitarle la clase 'shrink'
      accordions.forEach((otherAccordion) => {
        otherAccordion.classList.remove('shrink');
      });
    } else {
      // Si el acordeón no está abierto o tiene la clase 'shrink', añadirle la clase 'open' y quitarle la clase 'shrink'
      accordion.classList.add('open');
      accordion.classList.remove('shrink');

      // Hacer que el título se desvanezca y luego se oculte
      title.style.opacity = '0';
      setTimeout(() => {
        title.style.display = 'none';
      }, 300); // Este tiempo debe coincidir con la duración de la transición

      // A cada acordeón que no sea el clicado, añadirle la clase 'shrink' y quitarle la clase 'open'
      accordions.forEach((otherAccordion) => {
        if (otherAccordion !== accordion) {
          otherAccordion.classList.add('shrink');
          otherAccordion.classList.remove('open');

          // Hacer que el título del acordeón anteriormente abierto reaparezca
          const otherTitle = otherAccordion.querySelector('.accordion-title');
          setTimeout(() => {
            otherTitle.style.display = 'flex';
            setTimeout(() => {
              otherTitle.style.opacity = '1';
            }, 100); // Este tiempo puede ser ajustado para controlar la velocidad de la transición de opacidad
          }, 300); // Este tiempo debe coincidir con la duración de la transición
        }
      });
    }
  });
});