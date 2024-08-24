import { clientFetch } from '../clientFetch'

export const login = (body) => {
  return clientFetch.post('users/login', body)
}

export const register = (body) => {
  return clientFetch.post('users/register', body)
}

export const logout = () => {
  return clientFetch.post('users/logout')
}

export const refresh = () => {
  return clientFetch.get('users/me')
}
