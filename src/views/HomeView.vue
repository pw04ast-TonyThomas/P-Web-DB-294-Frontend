<script setup>
import { ref, onMounted } from 'vue'
import Service from '@/services/service.js'
import CardItem from '@/components/CardItem.vue'

const book = ref(null)
const books = ref([])
const latestBooks = ref(null)
const ratings = ref(null)

onMounted(() => {
  Service.getBooks()
    .then((response) => (books.value = response.data))
    .catch((error) => console.error(error))
  Service.getRatings()
    .then((response) => (ratings.value = response.data))
    .catch((error) => console.error(error))
  Service.getLatestBooks(5)
    .then((response) => (latestBooks.value = response.data))
    .catch((error) => console.error(error))
})

// returns the rating of a book, Takes the book's id.
function GetBookRating(bookId) {
  if (!ratings.value) return 1

  const rating = ratings.value.find((rating) => rating.ouvrageId == bookId)

  return rating ? rating.note : 1
}
</script>

<template>
  <main>
    <h1>L'0ctet littéraire</h1>
    <div class="title-desc-div">
      <p class="title-desc" style="font-family: JetBrainsMono-bold">Littérature et numérique,</p>
      <p class="title-desc" style="font-family: JetBrainsMono-bold">unis par la curiosité.</p>
    </div>

    <div class="description">
      <div>
        <p>
          L&CloseCurlyQuote;0ctet Littéraire est une bibliothèque moderne où les mots rencontrent
          les machines. À la croisée de la littérature et de l&CloseCurlyQuote;informatique, nous
          proposons un espace chaleureux dédié aux passionnés de lecture, aux curieux du numérique
          et aux esprits créatifs.
        </p>
        <img src="../assets/learn 2.svg" alt="" />
      </div>
      <div>
        <img src="../assets/task 2.svg" alt="" />
        <p>
          Romans, essais, science-fiction, programmation, culture digitale : ici, les histoires
          s’écrivent autant sur papier que sur écran. Venez explorer, apprendre et imaginer le monde
          de demain, un octet à la fois.
        </p>
      </div>
    </div>
    <div>
      <h2>Best sellers</h2>
    </div>
    <div v-if="books && ratings" class="books">
      <CardItem
        v-for="book in latestBooks"
        :key="book.id"
        :id="book.id"
        :src="book.imageCouverture"
        :title="book.titre"
        :rating="GetBookRating(book.id)"
      ></CardItem>
    </div>
  </main>
</template>

<style scoped>
.title-desc-div {
  margin-top: 1rem;
}
.title-desc {
  text-align: center;
  font-style: italic;
  font-size: 1.5rem;
  background: #c2e0e3;
  background: linear-gradient(180deg, rgba(194, 224, 227, 1) 0%, rgba(157, 181, 192, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.books {
  display: grid;
  gap: 3vw;
  grid-template: '. .' '. .' '. .'/ 1fr 1fr 1fr;
  margin: auto;
}

.book {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  height: 100%;
  text-align: center;
  background: #c2e0e3;
  background: linear-gradient(180deg, rgba(194, 224, 227, 1) 0%, rgba(157, 181, 192, 1) 100%);
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
}

.book h3 {
  margin: 2rem;
  font-size: 1.6rem;
}

.book img {
  width: 75%;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
}

.description {
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 100px;
}

.description > div {
  width: 60vw;
  display: flex;
  gap: 100px;
  place-items: center;
}

h2 {
  margin-top: 80px;
  margin-bottom: 50px;
}
</style>
