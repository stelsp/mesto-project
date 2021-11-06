// PROFILE PHOTO EDIT

const profilePhotoEditForm = document.querySelector('.popup_type_photo');
const profilePhotoEditButton = document.querySelector('.profile__photo');
export const profilePhotoCloseButton = document.querySelector('.popup__close-button_type_photo');

const photoInput = document.querySelector('.popup__input_type_photo');

// PROFILE EDIT

const profileEditForm = document.querySelector('.popup_type_profile');
const profileEditButton = document.querySelector('.profile__edit-button');
export const profileCloseButton = document.querySelector('.popup__close-button_type_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const quoteInput = document.querySelector('.popup__input_type_quote');
const profileName = document.querySelector('.profile__name');
const profileQuote = document.querySelector('.profile__quote');

// ADD START 6 CARDS

const elementsTemplate = document.querySelector('#elements__template').content;
const elementsList = document.querySelector('.elements__list');

// ADD NEW CARDS

const elementsAddForm = document.querySelector('.popup_type_card-add');
const elementsAddButton = document.querySelector('.profile__add-button');
export const elementsCloseButton = document.querySelector('.popup__close-button_type_card-add');
const imageInput = document.querySelector('.popup__input_type_image');
const titleInput = document.querySelector('.popup__input_type_title');


// OPEN/CLOSE CARD IMAGE

const image = document.querySelector('.popup_type_picture');
export const imageCloseButton = document.querySelector('.popup__close-button_type_picture');


// VALIDATION CONFIG

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__submit-button',
  inputErrorClass: 'popup__input_error',
}

export {
  profilePhotoEditForm,
  profilePhotoEditButton,
  photoInput,
  profileEditForm,
  profileEditButton,
  nameInput,
  quoteInput,
  profileName,
  profileQuote,
  elementsTemplate,
  elementsList,
  elementsAddForm,
  elementsAddButton,
  imageInput,
  titleInput,
  image
 }