<script setup lang="ts">
// @ts-nocheck
import { onMounted, ref } from 'vue'
import Service from '@/services/service.js'

const book = ref(null)
const ratings = ref(null)
const comments = ref(null)

const props = defineProps(['id'])
console.log(props.id)

function GetBookRating(bookId) {
  return ratings.value[ratings.value.find((rating) => rating.ouvrageId == bookId).id - 1].note
}

function getComment(bookId) {
  return comments.value[comments.value.find((comment) => comment.ouvrageId == bookId).id - 1]
}

onMounted(() => {
  Service.getBook(props.id)
    .then((response) => {
      book.value = response.data
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
  Service.getComments()
    .then((response) => {
      comments.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <main v-if="book && id" class="main">
    <img class="book-image" :src="book.imageCouverture" />
    <h2 class="book-title">{{ book.titre }}</h2>
    <div class="book-subtitle">
      <p>Catégorie: {{ book.categorie }}</p>
      <p>Nombre de pages: {{ book.nbPages }}</p>
      <p>Extrait: <a :href="book.extrait">lien</a></p>
      <p>Auteur: {{ book.auteur.prenom }} {{ book.auteur.nom }}</p>
      <p>Edition: {{ book.editeur }} {{ book.anneeEdition }}</p>
      <p>Note: {{ GetBookRating(id) }} / 5</p>
    </div>
    <h2 class="summary-header">Summary</h2>
    <p class="summary-text">{{ book.resume }}</p>
    <h2 class="comment-header">Comment</h2>
    <p class="comment-box">{{ getComment(book.id).contenu }}</p>
  </main>
</template>

<style scoped>
.main {
  gap: 1rem;

  display: grid;
  place-items: start;
  grid-template:
    'img img title'
    'img img subtitle'
    'summary-title . .'
    'summary summary summary'
    'comment-title . .'
    'comment comment comment';

  width: 70vw;
}

.book-image {
  grid-area: img;
  place-self: center;
  width: 50%;
  max-heigth: 100%;
}
.book-title {
  grid-area: title;
  color: var(--third-2);
  font-size: 3rem;
  font-family: 'JetBrainsMono-Bold';
}
.book-subtitle {
  grid-area: subtitle;
}
.summary-header {
  grid-area: summary-title;
}
.summary-text {
  grid-area: summary;
}
.comment-header {
  grid-area: comment-title;
}
.comment-box {
  grid-area: comment;
}
</style>
