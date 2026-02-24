<script lang="ts" setup>
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
</script>

<template>
  <main>
    <h1>L'0ctet littéraire</h1>
    <p class="title-desc" style="font-family: JetBrainsMono-bold">Littérature et numérique,</p>
    <p class="title-desc" style="font-family: JetBrainsMono-bold"><br />unis par la curiosité.</p>
    <div v-if="books" class="books">
      <div v-for="book in books" class="book">
        <h2>Book name : {{ book.titre }}</h2>
        <p style="font-family: JetBrainsMono">test</p>
        <p style="font-family: JetBrainsMono-bold">test</p>
        <p style="font-family: JetBrainsMono-ExtraBold">test</p>
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
  -webkit-background-clip: text; /* clip background to text (WebKit browsers) */
  -webkit-text-fill-color: transparent; /* make text fill transparent to show the background */
  background-clip: text; /* for Firefox */
  color: transparent; /* fallback */
}

.books {
  display: flex;
  gap: 50px;
}
.book {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
