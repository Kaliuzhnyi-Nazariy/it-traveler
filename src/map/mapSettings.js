// import { token } from './token'

// import dotenv from 'dotenv'
// dotenv.config()

const token = import.meta.env.VITE_TOKEN
// const token = process.env.TOKEN

export const mapSettings = {
  style: 'mapbox://styles/mapbox/streets-v12',
  apiToken: token
}
