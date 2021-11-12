const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort-3',
  headers: {
    authorization: 'bb5f0ee9-ef64-4836-93fe-6fc2439d86be',
    'Content-Type': 'application/json'
  }
}

const checkRes = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status + " - " + res.statusText}`);
}

// GET USER DATA
export const getProfileInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  })
  .then(checkRes)
}

// GET CARDS DATA
export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  })
  .then(checkRes)
}

// PATCH USER DATA
export const patchProfileInfo = (name, quote) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name.value,
      about: quote.value
    }),
  })
  .then(checkRes)
}

// POST NEW CARD
export const postNewCards = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name.value,
      link: link.value
    }),
  })
  .then(checkRes)
}

// PUT LIKE
export const putLike = (likes) => {
  return fetch(`${config.baseUrl}/cards/likes/cardId`, {
    method: 'PUT',
    headers: config.headers,
  })
  .then(checkRes)
}



