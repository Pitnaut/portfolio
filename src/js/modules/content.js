const animateElement = (element, addClasses, removeClasses, delay = 0) => {
  if (element) {
    setTimeout(() => {
      element.classList.remove(...removeClasses);
      element.classList.add(...addClasses);
    }, delay);
  }
}

export const showBioContent = (accordion) => {
  const bioContent = accordion.querySelector('.bio-content');
  const image = accordion.querySelector('.bio-content img');
  const name = accordion.querySelector('h2');
  const profession = accordion.querySelector('h3');
  const paragraphs = accordion.querySelectorAll('p');
  
  animateElement(bioContent, ['flex', 'opacity-100'], ['hidden', 'opacity-0']);
  animateElement(image, ['scale-100'], ['scale-0'], 300);
  animateElement(name, ['translate-x-0'], ['translate-x-full'], 500);
  animateElement(profession, ['translate-x-0'], ['translate-x-full'], 500);
  
  paragraphs.forEach((p, index) => {
    animateElement(p, ['translate-x-0', 'opacity-100'], ['-translate-x-full', 'opacity-0'], 1000 + index * 500);
  });
}

export const hideBioContent = (accordion) => {
  const bioContent = accordion.querySelector('.bio-content');
  const image = accordion.querySelector('.bio-content img');
  const name = accordion.querySelector('h2');
  const profession = accordion.querySelector('h3');
  const paragraphs = accordion.querySelectorAll('p');
  
  animateElement(bioContent, ['hidden', 'opacity-0'], ['flex', 'opacity-100'], 400);
  animateElement(image, ['scale-0'], ['scale-100']);
  animateElement(name, ['translate-x-full'], ['translate-x-0']);
  animateElement(profession, ['translate-x-full'], ['translate-x-0']);
  
  paragraphs.forEach((p, index) => {
    animateElement(p, ['-translate-x-full', 'opacity-0'], ['translate-x-0', 'opacity-100'], 500 + index * 500);
  });
}