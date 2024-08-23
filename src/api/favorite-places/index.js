import { clientFetch } from '../clientFetch'

const BASE_PLACES_URL = '/places'

export const getFavoritePlaces = () => {
  return clientFetch.get(BASE_PLACES_URL).then(({ data }) =>
    data.map((place) => ({
      ...place,
      id: place._id
    }))
  )
}

export const addFavoritePlaces = (body) => {
  return clientFetch.post(BASE_PLACES_URL, body)
}

export const updateFavoritePlaces = (body) => {
  Reflect.deleteProperty(body, '_id')
  Reflect.deleteProperty(body, 'owner')
  Reflect.deleteProperty(body, '__v')
  return clientFetch.put(BASE_PLACES_URL, body)
}

export const deleteFavoritePlaces = (id) => {
  return clientFetch.delete(`${BASE_PLACES_URL}/${id}`)
}
