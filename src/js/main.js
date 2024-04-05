const body = document.querySelector('body')
const accordions = Array.from(document.querySelectorAll('.accordion'));

body.classList.add('transition', 'ease-in-out', 'duration-300');

function resetBodyColor() {
  body.classList.remove('bg-green-200', 'bg-blue-200', 'bg-red-200', 'bg-yellow-200', 'bg-purple-200', 'bg-indigo-200');
  body.classList.add('bg-stone-200');
}

function changeBodyColor(accordion) {
  body.classList.remove('bg-green-200', 'bg-blue-200', 'bg-red-200', 'bg-yellow-200', 'bg-purple-200', 'bg-indigo-200', 'bg-stone-200');

  if (accordion.classList.contains('bio-main')) {
    body.classList.add('bg-green-200');
  } else if (accordion.classList.contains('studies-main')) {
    body.classList.add('bg-blue-200');
  } else if (accordion.classList.contains('work-main')) {
    body.classList.add('bg-red-200');
  } else if (accordion.classList.contains('projects-main')) {
    body.classList.add('bg-yellow-200');
  } else if (accordion.classList.contains('social-main')) {
    body.classList.add('bg-purple-200');
  } else if (accordion.classList.contains('contact-main')) {
    body.classList.add('bg-indigo-200');
  }
}

accordions.forEach((accordion) => {
  const title = accordion.querySelector('.accordion-title');

  accordion.addEventListener('click', () => {
    if (accordion.classList.contains('open')) {
      // Si el acordeón ya está abierto, quitarle la clase 'open'
      accordion.classList.remove('open');

       // Restablecer el color de fondo del cuerpo a stone-200
       resetBodyColor();

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
      changeBodyColor(accordion);


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