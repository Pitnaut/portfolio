import { animateElement } from "./utils";

export const showProjectsContent = (accordion) => {
  const projectsContent = accordion.querySelector('.projects-content');

  animateElement(projectsContent, ['flex', 'opacity-100'], ['hidden', 'opacity-0']);
}


export const hideProjectsContent = (accordion) => {
  const projectsContent = accordion.querySelector('.projects-content');

  animateElement(projectsContent, ['hidden', 'opacity-0'], ['flex', 'opacity-100'], 400);

}