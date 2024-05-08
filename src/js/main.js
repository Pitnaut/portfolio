
import { openAccordion, closeAccordion } from './modules/accordions.js';

const accordions = Array.from(document.querySelectorAll('.accordion'));

accordions.forEach((accordion) => {
  const title = accordion.querySelector('.accordion-title');

  accordion.addEventListener('click', () => {
    if (accordion.classList.contains('h-open')) {
      closeAccordion(accordion, accordions, title);
    } else {
      openAccordion(accordion, accordions, title);
    }
  });
});


