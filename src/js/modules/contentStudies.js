import { animateElement } from "./utils";

export const showStudyContent = (accordion) => {
  const studiesContent = accordion.querySelector('.studies-content');
  const paragraphs = accordion.querySelector('.studies-timeline').querySelectorAll('p');
  
  animateElement(studiesContent, ['flex', 'opacity-100'], ['hidden', 'opacity-0']);
  
  paragraphs.forEach((p, index) => {
    animateElement(p, ['translate-x-0', 'opacity-100'], ['-translate-x-full', 'opacity-0'], 0);
  });
}

export const hideStudyContent = (accordion) => {
  const studiesContent = accordion.querySelector('.studies-content');
  const paragraphs = accordion.querySelector('.studies-timeline').querySelectorAll('p');
  
  animateElement(studiesContent, ['hidden', 'opacity-0'], ['flex', 'opacity-100'], 400);
  
  paragraphs.forEach((p, index) => {
    animateElement(p, ['-translate-x-full', 'opacity-0'], ['translate-x-0', 'opacity-100'], 0);
  });
}