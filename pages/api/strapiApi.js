import axios from 'axios'

const strapiApi = axios.create({
  baseURL: 'https://strapi-jeanpierre.up.railway.app/api'
})

export default strapiApi
