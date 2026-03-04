<script setup lang="ts">
// @ts-check
import CardItem from '@/components/CardItem.vue'
import { ref, onMounted } from 'vue'
import Service from '@/services/service.js'
import BookCategory from '@/seeder/seeder.js'
import { GetBookRating, GetNBooks, books, ratings } from '@/composable/functions'

// const books = ref(null)
// const ratings = ref(null)

const handleWheel = (e: WheelEvent) => {
  // target is the specific list being hovered
  const container = e.currentTarget as HTMLElement

  if (container) {
    e.preventDefault()
    // Speed multiplier of 4 for a very snappy feel
    container.scrollLeft += e.deltaY * 4
  }
}
</script>

<template>
  <main v-if="BookCategory && books && ratings">
    <h1>Ouvrages</h1>
    <ul class="nav">
      <li>
        <a href="">Ajouter un ouvrage</a>
      </li>
      <li>
        <a href="">Modifier un ouvrage</a>
      </li>
      <li>
        <a href="">Supprimer un ouvrage</a>
      </li>
    </ul>
    <div class="category" v-for="categorie in BookCategory" :key="categorie">
      <legend>{{ categorie }}</legend>
      <div class="category-list" @wheel.prevent="handleWheel" v-if="books && categorie">
        <CardItem
          v-for="book in GetNBooks(10, categorie)"
          :key="book.id"
          :id="book.id"
          :src="book.imageCouverture"
          :title="book.titre"
          :rating="GetBookRating(book.id)"
        ></CardItem>
      </div>
    </div>
  </main>
</template>

<style scoped>
.category-list {
  display: flex;
  gap: 1rem;
  padding-right: 6rem;
  -webkit-mask-image: linear-gradient(to right, black 80%, transparent 100%);
  mask-image: linear-gradient(to right, black 80%, transparent 100%);

  overflow-x: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
}

.category {
  width: 70vw;
}
.nav {
  display: flex;
  gap: 1rem;
  li,
  a {
    color: var(--third);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
}

legend {
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  font-family: 'JetBrainsMono', sans-serif;
  color: #333;
  gap: 1rem;
  margin-bottom: 1rem;
}

legend::before,
legend::after {
  content: '';
  flex: 1;
  height: 0.5rem;
  background-color: var(--secondary);
  border-radius: 10px;
}

legend::before {
  flex: 0 0 50px;
}
.nav > li:not(:first-child)::before {
  content: '○';
  margin-right: 1rem;
  font-weight: bold;
}

.nav > li::marker {
  content: none;
}

main {
  gap: 3rem;
}
</style>
