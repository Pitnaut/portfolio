import { animateElement } from "./utils.js";

export const showContactContent = (accordion) => {
  const contactContent = accordion.querySelector('.contact-content');
  const contactIntro = accordion.querySelector('.contact-intro');
  const contactIntroSocial = accordion.querySelector('.contact-intro-social');
  const contactIntroGithub = accordion.querySelector('.contact-intro-github');
  const contactCV = accordion.querySelector('.contact-intro-cv');
  const clickableElements = accordion.querySelectorAll('.contact-tel, .contact-mail, .contact-whatsapp, .contact-telegram, .contact-linkedin, .contact-instagram, .contact-bluesky, .contact-github, .contact-cv');
  const contactImgs = accordion.querySelectorAll('svg');

  clickableElements.forEach((element) => {
    element.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });

  animateElement(contactContent, ['flex', 'opacity-100'], ['hidden', 'opacity-0']);
  animateElement(contactIntro, ['opacity-100'], ['opacity-0'], 100);
  animateElement(contactIntroSocial, ['opacity-100'], ['opacity-0'], 100);
  animateElement(contactIntroGithub, ['opacity-100'], ['opacity-0'], 100);
  animateElement(contactCV, ['opacity-100'], ['opacity-0'], 100);

  contactImgs.forEach((svg, index) => {
    animateElement(svg, ['scale-100'], ['scale-0'], 300 + index * 100)
  })
}

export const hideContactContent = (accordion) => {
  const contactContent = accordion.querySelector('.contact-content');
  const contactIntro = accordion.querySelector('.contact-intro');
  const contactIntroSocial = accordion.querySelector('.contact-intro-social');
  const contactIntroGithub = accordion.querySelector('.contact-intro-github');
  const contactCV = accordion.querySelector('.contact-intro-cv');
  const contactImgs = accordion.querySelectorAll('svg')

  animateElement(contactContent, ['hidden', 'opacity-0'], ['flex', 'opacity-100'], 400);
  animateElement(contactIntro, ['opacity-0'], ['opacity-100'], 400);
  animateElement(contactIntroSocial, ['opacity-0'], ['opacity-100'], 400);
  animateElement(contactIntroGithub, ['opacity-0'], ['opacity-100'], 400);
  animateElement(contactCV, ['opacity-0'], ['opacity-100'], 400);

  contactImgs.forEach((svg, index) => {
    animateElement(svg, ['scale-0'], ['scale-100'], 300 + index * 100)
  })
}