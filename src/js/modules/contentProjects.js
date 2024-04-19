import { animateElement } from "./utils";

export const showProjectsContent = (accordion) => {
  const projectsContent = accordion.querySelector('.projects-content');
  const clickableElements = accordion.querySelectorAll('.lotto, .shinny, .todo, .sound, .birds');
  const images = accordion.querySelectorAll('.img-lotto, .img-shinny, .img-todo, .img-sound, .img-birds');

  clickableElements.forEach((element) => {
    element.addEventListener('click', function(event) {
      event.stopPropagation();

      images.forEach((img) => {
        img.classList.add('hidden');
      });

      const imgClass = `.img-${element.classList[0]}`;
      const img = accordion.querySelector(imgClass);
      img.classList.remove('hidden');
    });
  });

  animateElement(projectsContent, ['flex', 'opacity-100'], ['hidden', 'opacity-0']);
}


export const hideProjectsContent = (accordion) => {
  const projectsContent = accordion.querySelector('.projects-content');

  animateElement(projectsContent, ['hidden', 'opacity-0'], ['flex', 'opacity-100'], 400);

}