<script setup>
import { ref, onMounted } from 'vue'
import Service from '@/services/service.js'

const book = ref(null)

onMounted(() => {
  Service.getBook(1)
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
  </main>
</template>
