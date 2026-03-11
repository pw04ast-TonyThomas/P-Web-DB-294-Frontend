<script setup lang="ts">
// @ts-nocheck
import CardItem from '@/components/CardItem.vue'
import { ref, onMounted } from 'vue'
import Service from '@/services/service.js'
import BookCategory from '@/seeder/seeder.js'

const books = ref(null)
const ratings = ref(null)

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

// Returns a random book of a category, Takes a category
function GetRandomBook(categorie = null) {
  let allCategoryBooks = []
  if (categorie) {
    allCategoryBooks = books.value.filter((book) => {
      return book.categorie == categorie
    })
    console.log('categorie : ' + categorie + ', nb of books : ' + allCategoryBooks.length)
    const randomIndex = Math.floor(Math.random() * allCategoryBooks.length)
    return allCategoryBooks[randomIndex]
  }
  return 0
}

// Returns a given number of books of a certain category, Takes the amount and the category
function GetNBooks(nb, categorie = null) {
  const booksToBeReturned = []
  for (let index = 0; index < nb; index++) {
    booksToBeReturned.push(GetRandomBook(categorie))
  }
  console.log('books to be returned : ' + booksToBeReturned)
  return booksToBeReturned
}

// returns the rating of a book, Takes the book's id.
function GetBookRating(bookId) {
  if (!ratings.value) return 1

  const rating = ratings.value.find((rating) => rating.ouvrageId == bookId)

  return rating ? rating.note : 1
}

const handleWheel = (e: WheelEvent) => {
  // target is the specific list being hovered
  const container = e.currentTarget as HTMLElement

  if (container) {
    e.preventDefault()
    // Speed multiplier of 4 for a very snappy feel
    container.scrollLeft += e.deltaY * 4
  }
}
</script>

<template>
  <main v-if="BookCategory && books && ratings">
    <h1>Ouvrages</h1>
    <ul class="nav">
      <li>
        <a href="/add-book">Ajouter un ouvrage</a>
      </li>
    </ul>
    <div class="category" v-for="categorie in BookCategory" :key="categorie">
      <legend>{{ categorie }}</legend>
      <div class="category-list" @wheel.prevent="handleWheel">
        <CardItem
          v-for="book in GetNBooks(10, categorie)"
          :key="book.id"
          :id="book.id"
          :src="book.imageCouverture"
          :title="book.titre"
          :rating="GetBookRating(book.id)"
        ></CardItem>
      </div>
    </div>
  </main>
</template>

<style scoped>
.category-list {
  display: flex;
  gap: 1rem;
  padding-right: 6rem;
  -webkit-mask-image: linear-gradient(to right, black 80%, transparent 100%);
  mask-image: linear-gradient(to right, black 80%, transparent 100%);

  overflow-x: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
}

.category {
  width: 70vw;
}
.nav {
  display: flex;
  gap: 1rem;
  li,
  a {
    color: var(--third);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
}

legend {
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  font-family: 'JetBrainsMono', sans-serif;
  color: #333;
  gap: 1rem;
  margin-bottom: 1rem;
}

legend::before,
legend::after {
  content: '';
  flex: 1;
  height: 0.5rem;
  background-color: var(--secondary);
  border-radius: 10px;
}

legend::before {
  flex: 0 0 50px;
}
.nav > li:not(:first-child)::before {
  content: '○';
  margin-right: 1rem;
  font-weight: bold;
}

.nav > li::marker {
  content: none;
}

main {
  gap: 3rem;
}
</style>
