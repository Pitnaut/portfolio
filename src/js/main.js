const body = document.querySelector('body')
const accordions = Array.from(document.querySelectorAll('.accordion'));

body.classList.add('transition', 'ease-in-out', 'duration-300');

const resetBodyColor = () => {
  body.classList.remove('bg-green-200', 'bg-blue-200', 'bg-red-200', 'bg-yellow-200', 'bg-purple-200', 'bg-indigo-200');
  body.classList.add('bg-stone-200');
}

const changeBodyColor = (accordion) => {
  body.classList.remove('bg-green-200', 'bg-blue-200', 'bg-red-200', 'bg-yellow-200', 'bg-purple-200', 'bg-indigo-200', 'bg-stone-200');

  if (accordion.classList.contains('bio-main')) {
    body.classList.add('bg-green-200');
  } else if (accordion.classList.contains('studies-main')) {
    body.classList.add('bg-blue-200');
  } else if (accordion.classList.contains('work-main')) {
    body.classList.add('bg-red-200');
  } else if (accordion.classList.contains('projects-main')) {
    body.classList.add('bg-yellow-200');
  } else if (accordion.classList.contains('social-main')) {
    body.classList.add('bg-purple-200');
  } else if (accordion.classList.contains('contact-main')) {
    body.classList.add('bg-indigo-200');
  }
}

const openAccordion = (accordion, accordions, title) => {
  accordions.forEach((otherAccordion) => {
    if (otherAccordion !== accordion && otherAccordion.classList.contains('open')) {
      const otherTitle = otherAccordion.querySelector('.accordion-title');
      closeAccordion(otherAccordion, accordions, otherTitle);
    }
  });

  accordion.classList.add('open');
  accordion.classList.remove('shrink');
  changeBodyColor(accordion);

  title.style.opacity = '0';
  setTimeout(() => {
    title.style.display = 'none';
  }, 300);

  accordions.forEach((otherAccordion) => {
    if (otherAccordion !== accordion) {
      otherAccordion.classList.add('shrink');
      const otherTitle = otherAccordion.querySelector('.accordion-title');
      otherTitle.style.display = 'flex';
      setTimeout(() => {
        otherTitle.style.opacity = '1';
      }, 300);
    }
  });
}

const closeAccordion = (accordion, accordions, title) => {
  accordion.classList.remove('open');
  accordion.classList.remove('shrink');
  resetBodyColor();

  setTimeout(() => {
    title.style.display = 'flex';
    setTimeout(() => {
      title.style.opacity = '1';
    }, 300);
  }, 300);

  accordions.forEach((otherAccordion) => {
    otherAccordion.classList.remove('shrink');
  });
}

accordions.forEach((accordion) => {
  const title = accordion.querySelector('.accordion-title');

  accordion.addEventListener('click', () => {
    if (accordion.classList.contains('open')) {
      closeAccordion(accordion, accordions, title);
    } else {
      openAccordion(accordion, accordions, title);
    }
  });
});