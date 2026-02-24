<script lang="ts" setup>
defineProps(['src', 'title', 'rating'])
const getStars = (rating: number) => {
  const max = 5
  const fullStars = Math.round(Math.min(Math.max(rating, 0), max))
  const emptyStars = max - fullStars

  return '★'.repeat(fullStars) + '☆'.repeat(emptyStars)
}
</script>

<template>
  <div class="card">
    <img :src="src" alt="" />
    <h3>{{ title }}</h3>
    <h4>{{ getStars(rating) }}</h4>
  </div>
</template>

<style scoped>
.card > img {
  height: 10rem;
  aspect-ratio: 1 / 1;
}
</style>
