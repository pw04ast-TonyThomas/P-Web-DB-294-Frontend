import axios from 'axios'

// File for api calls and stuff
const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
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
  getBooks() {
    return apiClient.get(`/ouvrages/`)
  },
  getRatings() {
    return apiClient.get(`/appreciations/`)
  },
  getComments() {
    return apiClient.get(`/commentaires/`)
  },
  addBookToDB(newBook) {
    return apiClient.post('/ouvrages/', newBook)
  },

  searchBook(query) {
    return apiClient.get(`/ouvrages/?titre_like=${query}`)
  },
  updateBook(id, modifiedBook) {
    return apiClient.put(`/ouvrages/${id}`, modifiedBook)
  },
  deleteBook(id) {
    return apiClient.delete(`/ouvrages/${id}`)
  },
  addCommentary(commentary) {
    return apiClient.post(`/commentaires/`, commentary)
  },
  getLatestBooks(nb) {
    return apiClient.get(`/ouvrages?_sort=id&_order=desc&_limit=${nb}`)
  },
}
