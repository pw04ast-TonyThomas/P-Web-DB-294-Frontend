<script lang="ts" setup>
import starIcon from '../assets/icons/star.svg'
import starEmptyIcon from '../assets/icons/starEmpty.svg'
defineProps(['src', 'title', 'rating'])
</script>

<template>
  <div class="card">
    <img :src="src" alt="" />
    <h3>{{ title }}</h3>
    <div class="rating">
      <img v-for="s in Math.round(rating)" :key="s" :src="starIcon" />
      <img v-for="s in 5 - Math.round(rating)" :key="s" :src="starEmptyIcon" />
    </div>
  </div>
</template>

<style scoped>
.rating > img {
  height: 2rem;
}
.card > img {
  height: 14rem;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 2vh;
}

.card {
  border: 0.5rem dashed var(--secondary-2);
  border-radius: 2vh;
  padding: 1rem;
  display: flex;
  place-items: center;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--secondary);
}
</style>
