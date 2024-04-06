const body = document.querySelector('body')

export const resetBodyColor = () => {
  body.classList.remove('bg-green-200', 'bg-blue-200', 'bg-red-200', 'bg-yellow-200', 'bg-purple-200', 'bg-indigo-200');
  body.classList.add('bg-stone-200');
}

export const changeBodyColor = (accordion) => {
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