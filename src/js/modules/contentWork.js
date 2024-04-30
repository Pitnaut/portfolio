import { animateElement } from "./utils";

export const showWorkContent = (accordion) => {
  const workContent = accordion.querySelector('.work-content');
  const works = accordion.querySelectorAll('.work-timeline .work h2');
  const jobDescriptions = accordion.querySelectorAll('.work-timeline .work ul');
  
  animateElement(workContent, ['flex', 'opacity-100'], ['hidden', 'opacity-0']);
  
  works.forEach((h2, index) => {
    animateElement(h2, ['opacity-100'], ['opacity-0'], 300 + index * 300);
  });

  jobDescriptions.forEach((ul, index) => {
    animateElement(ul, ['translate-x-0'], ['translate-x-full'], 400 + index * 400);
  });
}

export const hideWorkContent = (accordion) => {
  const workContent = accordion.querySelector('.work-content');
  const works = accordion.querySelectorAll('.work-timeline .work h2');
  const jobDescriptions = accordion.querySelectorAll('.work-timeline .work ul');
  
  animateElement(workContent, ['hidden', 'opacity-0'], ['flex', 'opacity-100'], 300);
  
  works.forEach((h2, ) => {
    animateElement(h2, ['opacity-0'], ['opacity-100'], 0);
  });

  jobDescriptions.forEach((ul, index) => {
    animateElement(ul, ['translate-x-full'], ['translate-x-0'], 400 + index * 400);
  });
}