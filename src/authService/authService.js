import { clientFetch } from '@/api/clientFetch'

export const TOKEN_KEY = 'token'

class AuthServiceClass {
  #token = null

  isLoggedIn() {
    return Boolean(this.#token)
  }

  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
    clientFetch.defaults.headers.common = { Authorization: `Bearer ${token}` }

    this.#token = token
  }

  clearToken() {
    this.#token = ''
    localStorage.removeItem(TOKEN_KEY)
    clientFetch.defaults.headers.common = {}
  }

  async login(body) {
    const { data } = await clientFetch.post('users/login', body)
    const { token } = data

    this.setToken(token)
  }

  async register(body) {
    const { data } = await clientFetch.post('users/register', body)
    const { accessToken } = data

    this.setToken(accessToken)
  }

  async logout() {
    await clientFetch.get('users/logout')

    this.clearToken()
  }

  async refresh() {
    return clientFetch.get('users/refresh')
  }
}

export const authService = new AuthServiceClass()
