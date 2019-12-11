import config from '../config'
import TokenService from '../services/token-service'

const DeckApiService = {
  getDecks() {
    return fetch(`${config.API_ENDPOINT}/decks`, {
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
  
  postDeck(user_id, deckname) {
    return fetch(`${config.API_ENDPOINT}/decks`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        user_id: user_id,
        deck_name: deckname,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  deleteDeck(deck_id) {
    return fetch(`${config.API_ENDPOINT}/decks`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        deck_id: deck_id,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default DeckApiService
