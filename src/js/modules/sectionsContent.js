export const showContent = (contentElement) => {
  contentElement.classList.remove('hidden');
  contentElement.classList.add('flex');
}

export const hideContent = (contentElement) => {
  setTimeout(() => {
    contentElement.classList.add('hidden');
    contentElement.classList.remove('flex');
  }, 400);
}