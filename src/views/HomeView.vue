<script setup>
import { ref, onMounted } from 'vue'
import Service from '@/services/service.js'

const book = ref(null)
const books = ref(null)

function GetRandomBook() {
  return Math.round(Math.random() * 1000)
}

onMounted(() => {
  Service.getBook(GetRandomBook())
    .then((response) => {
      book.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
  Service.getBooks()
    .then((response) => {
      books.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})

function GetNBooks(nb) {
  let bookIndex = GetRandomBook()
  return books.value.slice(bookIndex, bookIndex + Math.round(nb))
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
    <div v-if="books" class="books">
      <div v-for="book in GetNBooks(6)" class="book">
        <h3>{{ book.titre }}</h3>
        <img :src="book.imageCouverture" alt="" />
      </div>
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
  gap: 100px;
  grid-template: '. .' '. .' '. .'/ 1fr 1fr 1fr;
}
.book {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  height: 35rem;
  border: solid 3px black;
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
