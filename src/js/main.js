document.addEventListener('DOMContentLoaded', (event) => {
  const accordions = Array.from(document.querySelectorAll('.accordion'));

  accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
      const currentlyOpen = document.querySelector('.accordion.open');

      // If there is an open accordion, close it
      if (currentlyOpen) {
        currentlyOpen.classList.remove('open');
        currentlyOpen.classList.add('shrink');
        currentlyOpen.style.height = '16.67vh';
      }

      // If the clicked accordion was not the one that was open, open it
      if (accordion !== currentlyOpen) {
        accordion.classList.remove('shrink');
        accordion.classList.add('open');
        accordion.style.height = '50vh';
      } else {
        // If the clicked accordion was the one that was open, close it
        accordion.classList.remove('open');
        accordion.classList.add('shrink');
        accordion.style.height = '16.67vh';
      }

      // Set the height of all other accordions to 10vh if one is open, or 16.67vh if none are open
      accordions.forEach((otherAccordion) => {
        if (otherAccordion !== accordion) {
          otherAccordion.classList.remove('open');
          otherAccordion.classList.add('shrink');
          otherAccordion.style.height = accordion.classList.contains('open') ? '10vh' : '16.67vh';
        }
      });
    });
  });
});