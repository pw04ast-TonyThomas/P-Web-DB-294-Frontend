<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Service from '@/services/service.js'

const book = ref(null)

const rndBookId = Math.ceil(Math.random() * 3)

onMounted(() => {
  console.log(rndBookId)
  Service.getBook(rndBookId)
    .then((response) => {
      book.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <main v-if="book">
    <h1>L'0ctet littéraire</h1>
    <h2>Book name : {{ book.titre }}</h2>
    <p style="font-family: JetBrainsMono">test</p>
    <p style="font-family: JetBrainsMono-bold">test</p>
    <p style="font-family: JetBrainsMono-ExtraBold">test</p>
  </main>
</template>
