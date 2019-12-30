import config from '../config'

const TokenService = {
  saveAuthToken(token, id) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
    window.localStorage.setItem(config.USER_ID, id)
  },
  
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
    window.localStorage.removeItem(config.USER_ID)
    window.localStorage.removeItem(config.DECKS)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
}

export default TokenService