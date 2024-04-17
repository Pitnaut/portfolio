import { animateElement } from "./utils";

export const showContactContent = (accordion) => {
  const contactContent = accordion.querySelector('.contact-content');
  const contactIntro = accordion.querySelector('.contact-intro');
  const contactTel = accordion.querySelector('.contact-tel');
  const contactEmail = accordion.querySelector('.contact-mail');
  const contactWhatsapp = accordion.querySelector('.contact-whatsapp');

  if (contactTel) {
    contactTel.addEventListener('click', function(event) {
        event.stopPropagation();
    });
  }

  if (contactEmail) {
    contactEmail.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  }

  if (contactWhatsapp) {
    contactWhatsapp.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  }

  animateElement(contactContent, ['flex', 'opacity-100'], ['hidden', 'opacity-0']);
  animateElement(contactIntro, ['opacity-100'], ['opacity-0'], 400);
}

export const hideContactContent = (accordion) => {
  const contactContent = accordion.querySelector('.contact-content');
  const contactIntro = accordion.querySelector('.contact-intro');

  animateElement(contactContent, ['hidden', 'opacity-0'], ['flex', 'opacity-100'], 400);
  animateElement(contactIntro, ['opacity-0'], ['opacity-100'], 400);
}