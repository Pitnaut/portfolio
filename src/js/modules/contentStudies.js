import { animateElement } from "./utils.js";

export const showStudyContent = (accordion) => {
  const studiesContent = accordion.querySelector('.studies-content');
  const studies = accordion.querySelectorAll('.studies-timeline .study h2');
  const paragraphs = accordion.querySelectorAll('.studies-timeline .study p');
  
  animateElement(studiesContent, ['flex', 'opacity-100'], ['hidden', 'opacity-0']);
  
  studies.forEach((h2, index) => {
    animateElement(h2, ['opacity-100'], ['opacity-0'], 300 + index * 300);
  });

  paragraphs.forEach((p, index) => {
    animateElement(p, ['translate-x-0'], ['translate-x-full'], 400 + index * 400);
  });
}

export const hideStudyContent = (accordion) => {
  const studiesContent = accordion.querySelector('.studies-content');
  const studies = accordion.querySelectorAll('.studies-timeline .study h2');
  const paragraphs = accordion.querySelectorAll('.studies-timeline .study p');
  
  animateElement(studiesContent, ['hidden', 'opacity-0'], ['flex', 'opacity-100'], 300);
  
  studies.forEach((h2, ) => {
    animateElement(h2, ['opacity-0'], ['opacity-100'], 0);
  });

  paragraphs.forEach((p, index) => {
    animateElement(p, ['translate-x-full'], ['translate-x-0'], 400 + index * 400);
  });
}