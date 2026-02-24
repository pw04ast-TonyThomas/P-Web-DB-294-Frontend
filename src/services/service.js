import axios from 'axios'

// File for api calls and stuff
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/pw04ast-TonyThomas/P-Web-DB-294-Frontend',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getBook(id) {
    return apiClient.get(`/ouvrages/${id}`)
  },
}
