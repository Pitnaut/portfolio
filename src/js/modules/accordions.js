import { changeBodyColor, resetBodyColor } from './colorHandler';
import { showBioContent, hideBioContent } from './contentBio';
import { showStudyContent, hideStudyContent} from './contentStudies';
import { showWorkContent, hideWorkContent } from './contentWork';

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
      otherAccordion.classList.add('h-shrink', 'text-slate-600');
      const otherTitle = otherAccordion.querySelector('.accordion-title');   
      setTimeout(() => {
        otherTitle.style.opacity = '1';
      }, 600);
    }
  });

  setTimeout(() => {
    if (accordion.classList.contains('bio-main')){
      showBioContent(accordion);
    }
    if (accordion.classList.contains('studies-main')){
      showStudyContent(accordion);
    }
    if (accordion.classList.contains('work-main')){
      showWorkContent(accordion);
    }
  }, 600);

}

export const closeAccordion = (accordion, accordions, title) => {
  accordion.classList.remove('h-open');
  accordion.classList.remove('h-shrink', 'text-slate-600');
  resetBodyColor();

  if (accordion.classList.contains('bio-main')){
    hideBioContent(accordion);
  }
  if (accordion.classList.contains('studies-main')){
    hideStudyContent(accordion);
  }
  if (accordion.classList.contains('work-main')){
    hideWorkContent(accordion);
  }

  setTimeout(() => {
    title.style.display = 'flex';
    accordion.classList.add('items-center');
    accordion.classList.remove('items-start');
    setTimeout(() => {
      title.style.opacity = '1';
    }, 400);
  }, 400);

  accordions.forEach((otherAccordion) => {
    otherAccordion.classList.remove('h-shrink', 'text-slate-600');
  });
  
}