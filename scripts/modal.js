// PROFILE PHOTO EDIT FORM

import { profilePhotoEditForm, profilePhotoEditButton, profilePhotoCloseButton, photoInput} from './variables.js';
import { openPopup, closePopup } from './utils.js'

profilePhotoEditButton.addEventListener('click', () => {
  openPopup(profilePhotoEditForm);
});

profilePhotoCloseButton.addEventListener('click', () => {
  closePopup(profilePhotoEditForm);
});

profilePhotoEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
    closePopup(profilePhotoEditForm);
    profilePhotoEditButton.src = photoInput.value;
    document.querySelector('#popup__form_type_photo').reset();
});

// PROFILE EDIT FROM

import { profileEditForm, profileEditButton, profileCloseButton, nameInput, quoteInput, profileName, profileQuote} from './variables.js';

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  quoteInput.value = profileQuote.textContent;
  openPopup(profileEditForm);
});

profileCloseButton.addEventListener('click', () => {
  closePopup(profileEditForm);
});

profileEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
    closePopup(profileEditForm);
    profileName.textContent = nameInput.value;
    profileQuote.textContent = quoteInput.value;
});

// ADD NEW CARDS FROM

import { elementsAddForm, elementsAddButton, elementsCloseButton, imageInput, titleInput} from './variables.js';

elementsAddButton.addEventListener('click', () => {
  openPopup(elementsAddForm);
});

elementsCloseButton.addEventListener('click', () => {
  closePopup(elementsAddForm);
});

elementsAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
    closePopup(elementsAddForm);
    elementsList.prepend(createCard({
      name: titleInput.value,
      link: imageInput.value
    }));
  document.querySelector('#popup__form_type_card-add').reset();
});




