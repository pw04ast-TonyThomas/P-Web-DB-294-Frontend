// @ts-nocheck
// Returns a random book of a category, Takes a category

import { ref, onMounted } from 'vue'
import Service from '@/services/service.js'

export const books = ref(null)
export const ratings = ref(null)

onMounted(() => {
  Service.getBooks()
    .then((response) => {
      books.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
  Service.getRatings()
    .then((response) => {
      ratings.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})

function GetRandomBook(categorie = null) {
  // if (!books || !books.value) return null

  let allCategoryBooks = []
  if (categorie) {
    allCategoryBooks = books.value.filter((book) => {
      console.log('Checking book:', book.categorie, 'against', categorie)
      return book.categorie == categorie
    })

    if (allCategoryBooks.length === 0) {
      console.warn(`No books found for category: ${categorie}`)
      return null
    }

    console.log('categorie : ' + categorie + ', nb of books : ' + allCategoryBooks.length)
    const randomIndex = Math.floor(Math.random() * allCategoryBooks.length)
    return allCategoryBooks[randomIndex]
  }
  return null
}

// Returns a given number of books of a certain category, Takes the amount and the category
export function GetNBooks(nb, categorie = null) {
  const booksToBeReturned = []
  for (let index = 0; index < nb; index++) {
    const book = GetRandomBook(categorie, books)

    // Only push if a book exist
    if (book) {
      booksToBeReturned.push(book)
    }
  }
  console.log('books to be returned : ' + booksToBeReturned)
  return booksToBeReturned
}

// returns the rating of a book, Takes the book's id.
export function GetBookRating(bookId) {
  if (!ratings.value) return 1

  const rating = ratings.value.find((rating) => rating.ouvrageId == bookId)

  return rating ? rating.note : 1
}

// Returns the comments, takes the id of the book to get comments for
export function getComments(bookId) {
  if (!comments.value) return []
  return comments.value.filter((c) => c.ouvrageId == bookId)
}

// export { GetRandomBook, GetNBooks, GetBookRating, getComments }
