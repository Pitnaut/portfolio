import { animateElement } from "./utils";

export const showWorkContent = (accordion) => {
  const workContent = accordion.querySelector('.work-content');
  const works = accordion.querySelectorAll('.work-timeline .work h2');
  const paragraphs = accordion.querySelectorAll('.work-timeline .work p');
  
  animateElement(workContent, ['flex', 'opacity-100'], ['hidden', 'opacity-0']);
  
  works.forEach((h2, index) => {
    animateElement(h2, ['opacity-100'], ['opacity-0'], 300 + index * 300);
  });

  paragraphs.forEach((p, index) => {
    animateElement(p, ['translate-x-0'], ['translate-x-full'], 400 + index * 400);
  });
}

export const hideWorkContent = (accordion) => {
  const workContent = accordion.querySelector('.work-content');
  const works = accordion.querySelectorAll('.work-timeline .work h2');
  const paragraphs = accordion.querySelectorAll('.work-timeline .work p');
  
  animateElement(workContent, ['hidden', 'opacity-0'], ['flex', 'opacity-100'], 300);
  
  works.forEach((h2, ) => {
    animateElement(h2, ['opacity-0'], ['opacity-100'], 0);
  });

  paragraphs.forEach((p, index) => {
    animateElement(p, ['translate-x-full'], ['translate-x-0'], 400 + index * 400);
  });
}