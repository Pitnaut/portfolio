import { changeBodyColor, resetBodyColor } from './colorHandler';
import { showContent, hideContent } from './sectionsContent';

export const openAccordion = (accordion, accordions, title) => {
  accordions.forEach((otherAccordion) => {
    if (otherAccordion !== accordion && otherAccordion.classList.contains('h-open')) {
      const otherTitle = otherAccordion.querySelector('.accordion-title');
      closeAccordion(otherAccordion, accordions, otherTitle);
    }
  });

  accordion.classList.add('h-open');
  accordion.classList.remove('h-shrink');
  changeBodyColor(accordion);
  
  

  title.style.opacity = '0';
  setTimeout(() => {
    title.style.display = 'none';
    accordion.classList.remove('items-center');
    accordion.classList.add('items-start');
  }, 400);

  accordions.forEach((otherAccordion) => {
    if (otherAccordion !== accordion) {
      otherAccordion.classList.add('h-shrink');
      const otherTitle = otherAccordion.querySelector('.accordion-title');
      otherTitle.style.display = 'flex';
      setTimeout(() => {
        otherTitle.style.opacity = '1';
      }, 600);
    }
  });

  setTimeout(() => {
    const bioContent = accordion.querySelector('.bio-content');
    showContent(bioContent);
  }, 1000)

}

export const closeAccordion = (accordion, accordions, title) => {
  accordion.classList.remove('h-open');
  accordion.classList.remove('h-shrink');
  resetBodyColor();

  const bioContent = accordion.querySelector('.bio-content');
  hideContent(bioContent);

  setTimeout(() => {
    title.style.display = 'flex';
    accordion.classList.add('items-center');
    accordion.classList.remove('items-start');
    setTimeout(() => {
      title.style.opacity = '1';
    }, 600);
  }, 600);

  accordions.forEach((otherAccordion) => {
    otherAccordion.classList.remove('h-shrink');
  });

  
  
}