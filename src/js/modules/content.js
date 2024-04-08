export const showBioContent = (accordion) => {
  const bioContent = accordion.querySelector('.bio-content');
  if (bioContent) {
    bioContent.style.display = 'flex'; 
  }
}

export const hideBioContent = (accordion) => {
  const bioContent = accordion.querySelector('.bio-content');
  if (bioContent) {
    bioContent.style.display = 'none'; 
  }
}