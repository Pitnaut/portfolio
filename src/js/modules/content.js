export const showBioContent = (accordion) => {
  const bioContent = accordion.querySelector('.bio-content');
  if (bioContent) {
    bioContent.classList.remove('hidden'); 
    bioContent.classList.add('flex'); 
  }
}

export const hideBioContent = (accordion) => {
  const bioContent = accordion.querySelector('.bio-content');
  if (bioContent) {
    bioContent.classList.remove('flex');
    bioContent.classList.add('hidden');
  }
}