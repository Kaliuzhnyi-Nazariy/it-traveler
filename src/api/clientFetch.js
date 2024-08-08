import axios from 'axios'

export const clientFetch = axios.create({
  baseURL: 'https://back-for-vue-js.onrender.com/',
  mode: 'cors',
  Origin: '*',
  headers: {
    'Content-Type': 'application/json'
  }
})
