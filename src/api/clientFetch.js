import axios from 'axios'

export const clientFetch = axios.create({
  baseURL: 'https://back-for-it-traveler.onrender.com/api/',
  mode: 'cors',
  Origin: '*',
  headers: {
    'Content-Type': 'application/json'
  }
})
