const body = document.querySelector('body')

export const resetBodyColor = () => {
  body.classList.remove('bg-bio-color', 'bg-studies-color', 'bg-work-color', 'bg-projects-color', 'bg-social-color', 'bg-contact-color');
  body.classList.add('bg-body-color');
}

export const changeBodyColor = (accordion) => {
  body.classList.remove('bg-bio-color', 'bg-studies-color', 'bg-work-color', 'bg-projects-color', 'bg-social-color', 'bg-contact-color', 'bg-body-color');

  if (accordion.classList.contains('bio-main')) {
    body.classList.add('bg-bio-color');
  } else if (accordion.classList.contains('studies-main')) {
    body.classList.add('bg-studies-color');
  } else if (accordion.classList.contains('work-main')) {
    body.classList.add('bg-work-color');
  } else if (accordion.classList.contains('projects-main')) {
    body.classList.add('bg-projects-color');
  } else if (accordion.classList.contains('social-main')) {
    body.classList.add('bg-social-color');
  } else if (accordion.classList.contains('contact-main')) {
    body.classList.add('bg-contact-color');
  }
}