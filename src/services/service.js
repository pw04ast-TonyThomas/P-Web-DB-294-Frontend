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
  updateBook(id, updatedBook) {
    return apiClient.put(`/ouvrages/${id}`, updatedBook)
  },
  deleteBook(id) {
    return apiClient.delete(`/ouvrages/${id}`)
  },
}
