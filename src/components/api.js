// GET USER DATA
import { profileName, profileQuote, profilePhotoEditButton } from './var.js'

export function addProfileInfo() {
  fetch('https://mesto.nomoreparties.co/v1/plus-cohort-3/users/me', {
  headers: {
    authorization: 'bb5f0ee9-ef64-4836-93fe-6fc2439d86be',
    'Content-Type': 'application/json; charset=UTF-8'
    }
})
  .then(res => res.json())
  .then((res) => {
    profileName.textContent = res.name;
    profileQuote.textContent = res.about;
    profilePhotoEditButton.src = res.avatar;
  });
}


// GET CARDS DATA
import { elementsList } from "./var";
import { createCard } from "./cards";
export function createInitialCards() {
  fetch('https://mesto.nomoreparties.co/v1/plus-cohort-3/cards', {
  headers: {
    authorization: 'bb5f0ee9-ef64-4836-93fe-6fc2439d86be',
    'Content-Type': 'application/json; charset=UTF-8'
  }
})
  .then(res => res.json())
  .then((res) => {
    console.log(res);
    res.forEach(function(item) {
      elementsList.prepend(createCard(item));
    });
  });
}



