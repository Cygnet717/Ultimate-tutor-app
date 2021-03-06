import config from '../config';
import TokenService from '../services/token-service';

const SingleDeckApiService = {
  getDeckList(deckId) {
    return fetch(`${config.API_ENDPOINT}/decks/${deckId}`, {
      method: 'GET',
      headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
 
  postNewCard(card_name, image_url, multiverseid, deck_id, type) {
     return fetch(`${config.API_ENDPOINT}/decks/${deck_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        card_name,
        image_url,
        multiverseid,
        deck_id,
        type,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .catch(res => console.log(res))
  },

  deleteCard(card_id, deck_id) {
    return fetch(`${config.API_ENDPOINT}/decks/${deck_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        card_id
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
};

export default SingleDeckApiService