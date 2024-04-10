export const animateElement = (element, addClasses, removeClasses, delay = 0) => {
  if (element) {
    setTimeout(() => {
      element.classList.remove(...removeClasses);
      element.classList.add(...addClasses);
    }, delay);
  }
}