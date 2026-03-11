<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Service from '@/services/service.js'

const router = useRouter()
const route = useRoute()

// get the id of the current book
const bookId = ref(route.params.id)

function DeleteBook() {
  // delete the book in the db
  Service.deleteBook(bookId.value).then()

  // return the view
  router.push('/books')
}
</script>

<template>
  <button type="submit" style="visibility: hidden" @click="DeleteBook">
    <img src="../assets/icons/delete.svg" class="delete-icone" />
  </button>
</template>

<style scoped>
button:hover {
  cursor: pointer;
}

.delete-icone {
  visibility: visible;
  width: 30px;
  height: 30px;
}
</style>
