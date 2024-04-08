export const showBioContent = (accordion) => {
  const bioContent = accordion.querySelector('.bio-content');
  if (bioContent) {
    bioContent.classList.remove('hidden', 'opacity-0'); 
    bioContent.classList.add('flex', 'opacity-100'); 
  }
}

export const hideBioContent = (accordion) => {
  const bioContent = accordion.querySelector('.bio-content');
  if (bioContent) {
    bioContent.classList.remove('opacity-100');
    bioContent.classList.add('transition-opacity', 'duration-500', 'ease-in-out', 'opacity-0');

    setTimeout(() => {
      bioContent.classList.add('hidden');
    }, 400); 
  }
}