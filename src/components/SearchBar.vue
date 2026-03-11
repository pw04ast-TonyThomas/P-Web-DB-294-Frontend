<script setup lang="ts">
import { onMounted, ref } from 'vue'
//@ts-expect-error c'est du js !
import Service from '@/services/service.js'
import type { AxiosResponse } from 'axios'
import router from '@/router'

const query = ref('')
const books = ref()
function search() {
  console.log(books.value)
  Service.searchBook(query.value).then((response: AxiosResponse) => {
    books.value = response.data
    router.push({
      name: 'books',
      query: {
        data: JSON.stringify(books.value),
      },
    })
  })
}
</script>

<template>
  <form @submit.prevent="search()">
    <input
      v-model="query"
      type="search"
      name="search"
      id="search"
      class="search"
      placeholder="search"
    />
  </form>
</template>

<style scoped>
input {
  width: 20rem;
  padding: 0.5rem;

  border: 1px solid var(--secondary-2);
  border-radius: 5px;
  box-sizing: content-box;

  background: url('../assets/icons/search.svg') center right 0.5rem no-repeat;
  background-color: var(--main);

  transition: all 200ms;
}

input:focus {
  border: 2px solid var(--third);
  outline: none;
}
</style>
