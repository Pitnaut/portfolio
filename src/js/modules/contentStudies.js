import { animateElement } from "./utils";

export const showStudyContent = (accordion) => {
  const studiesContent = accordion.querySelector('.studies-content');
  const paragraphs = accordion.querySelector('.studies-timeline').querySelectorAll('p');
  
  animateElement(studiesContent, ['flex', 'opacity-100'], ['hidden', 'opacity-0']);
  
  paragraphs.forEach((p, index) => {
    animateElement(p, ['opacity-100'], ['opacity-0'], 300 + index * 300);
  });
}

export const hideStudyContent = (accordion) => {
  const studiesContent = accordion.querySelector('.studies-content');
  const paragraphs = accordion.querySelector('.studies-timeline').querySelectorAll('p');
  
  animateElement(studiesContent, ['hidden', 'opacity-0'], ['flex', 'opacity-100'], 300);
  
  paragraphs.forEach((p, index) => {
    animateElement(p, ['opacity-0'], ['opacity-100'], 0);
  });
}