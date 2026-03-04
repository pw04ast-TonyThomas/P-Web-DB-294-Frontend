<script setup lang="ts">
// @ts-nocheck
import { onMounted, ref } from 'vue'
import Service from '@/services/service.js'
import starIcon from '../assets/icons/star.svg'
import starEmptyIcon from '../assets/icons/starEmpty.svg'
import { GetBookRating, getComments } from '@/composable/functions'

const book = ref(null)
const ratings = ref(null)
const comments = ref(null)

const props = defineProps(['id'])
console.log(props.id)

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
      <p>Note: {{ GetBookRating(id, ratings) }} / 5</p>
    </div>
    <h2 class="summary-header">Summary</h2>
    <p class="summary-text">{{ book.resume }}</p>
    <h2 class="comment-header">Comment</h2>

    <a class="edit_book" :href="/modify/ + id"><img src="../assets/icons/edit.svg" /></a>

    <div class="comment-box">
      <div
        v-for="comment in getComments(props.id, comments)"
        :key="comment.id"
        class="comment-item"
      >
        <p>&OpenCurlyDoubleQuote;{{ comment.contenu }}&CloseCurlyDoubleQuote;</p>
        <div class="rating">
          <img v-for="s in Math.round(comment.rating)" :key="s" :src="starIcon" />
          <img v-for="s in 5 - Math.round(comment.rating)" :key="s" :src="starEmptyIcon" />
        </div>
      </div>

      <p v-if="getComments(props.id, comments).length === 0">No comments yet.</p>
    </div>
  </main>
</template>

<style scoped>
.main {
  gap: 1rem;

  display: grid;
  place-items: start;
  grid-template:
    'img title' auto
    'img subtitle' 1fr
    'summary-title .' auto
    'summary summary' auto
    'comment-title .' auto
    'comment comment' auto
    'comment comment' auto
    'comment comment' auto
    / 1fr 2fr;

  width: 70vw;
}

.book-image {
  grid-area: img;
  place-self: center;
  width: 50%;
  max-height: 100%;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: subgrid;
  gap: 1rem;
}

.comment-item {
  text-align: center;
  background: var(--main);
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 2px 4px 4px var(--third);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.edit_book > img {
  width: 30px;
  height: 30px;
}
</style>
