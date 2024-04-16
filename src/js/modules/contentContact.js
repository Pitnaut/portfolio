import { animateElement } from "./utils";

export const showContactContent = (accordion) => {
  const contactContent = accordion.querySelector('.contact-content');
  const contactForm = accordion.querySelector('.contact-form');

  animateElement(contactContent, ['flex', 'opacity-100'], ['hidden', 'opacity-0']);
  animateElement(contactForm, ['translate-y-0'], ['translate-y-full'], 300);
}

export const hideContactContent = (accordion) => {
  const contactContent = accordion.querySelector('.contact-content');
  const contactForm = accordion.querySelector('.contact-form');

  animateElement(contactContent, ['hidden', 'opacity-0'], ['flex', 'opacity-100'], 300);
  animateElement(contactForm, ['translate-y-full'], ['translate-y-0'], 0);
}