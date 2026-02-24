<script setup>
import { ref, onMounted } from 'vue'
import Service from '@/services/service.js'

const book = ref(null)
const books = ref(null)

const rndBookId = Math.ceil(Math.random() * 3)

onMounted(() => {
  Service.getBook(rndBookId)
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
function GetFourBooks() {
  const bookIndex = Math.ceil(Math.random() * 5)
  return books.value.slice(bookIndex, bookIndex + 4)
}
</script>

<template>
  <main>
    <h1>L'0ctet littéraire</h1>
    <p class="title-desc" style="font-family: JetBrainsMono-bold">Littérature et numérique,</p>
    <p class="title-desc" style="font-family: JetBrainsMono-bold"><br />unis par la curiosité.</p>

    <div class="description">
      <div>
        <p>
          L’0ctet Littéraire est une bibliothèque moderne où les mots rencontrent les machines. À la
          croisée de la littérature et de l’informatique, nous proposons un espace chaleureux dédié
          aux passionnés de lecture, aux curieux du numérique et aux esprits créatifs.
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

    <div v-if="books" class="books">
      <div v-for="book in GetFourBooks()" class="book">
        <h2>{{ book.titre }}</h2>
      </div>
    </div>
  </main>
</template>

<style scoped>
.title-desc {
  position: absolute;
  top: 465px;
  text-align: center;
  font-style: italic;
  font-size: 20px;
  background: #c2e0e3;
  background: linear-gradient(180deg, rgba(194, 224, 227, 1) 0%, rgba(157, 181, 192, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.books {
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr 1fr;
  margin-top: 100px;
}
.book {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 500px;
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
</style>
