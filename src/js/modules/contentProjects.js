import { animateElement } from "./utils";

export const showProjectsContent = (accordion) => {
  const projectsContent = accordion.querySelector('.projects-content');
  const clickableElements = accordion.querySelectorAll('.lotto, .shinny, .todo, .sound, .birds');
  const images = accordion.querySelectorAll('.img-lotto, .img-shinny, .img-todo, .img-sound, .img-birds');

  clickableElements.forEach((element, index) => {

    animateElement(element, ['opacity-100'], ['opacity-0'], 200 + index * 200);

    element.addEventListener('click', function (event) {
      event.stopPropagation();

      images.forEach((img) => {
        img.classList.add('hidden');
      });

      const imgClass = `.img-${element.classList[0]}`;
      const img = accordion.querySelector(imgClass);
      img.classList.remove('hidden');
    });
  });

  images.forEach((img) => {
    img.addEventListener('click', function (event) {
      event.stopPropagation();
    });
    animateElement(img, ['scale-100'], ['scale-0'], 1200)
  });
  animateElement(projectsContent, ['flex', 'opacity-100'], ['hidden', 'opacity-0']);
}

export const hideProjectsContent = (accordion) => {
  const projectsContent = accordion.querySelector('.projects-content');
  const clickableElements = accordion.querySelectorAll('.lotto, .shinny, .todo, .sound, .birds');
  const images = accordion.querySelectorAll('.img-lotto, .img-shinny, .img-todo, .img-sound, .img-birds');

  animateElement(projectsContent, ['hidden', 'opacity-0'], ['flex', 'opacity-100'], 400);

  clickableElements.forEach((element) => {
    animateElement(element, ['opacity-0'], ['opacity-100'], 0);
  });

  images.forEach((img) => {
    animateElement(img, ['scale-0'], ['scale-100'], 0);
  });

}