<script lang="ts" setup>
import starIcon from '../assets/icons/star.svg'
import starEmptyIcon from '../assets/icons/starEmpty.svg'
import deleteIcon from '../assets/icons/delete.svg'
defineProps(['id', 'src', 'title', 'rating', 'delete'])
</script>

<template>
  <div class="card">
    <a :href="/book/ + id">
      <img :src="src" alt="" />
      <h3>{{ title }}</h3>
      <div class="rating" v-if="rating">
        <img v-for="s in Math.round(rating)" :key="s" :src="starIcon" />
        <img v-for="s in 5 - Math.round(rating)" :key="s" :src="starEmptyIcon" />
      </div>
      <a href="#" v-if="$props.delete">
        <img :src="deleteIcon" />
      </a>
    </a>
  </div>
</template>

<style scoped>
.rating > img {
  height: 2rem;
}
.card > * > img {
  height: 14rem;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 2vh;
}

.card > a {
  display: flex;
  place-items: center;
  flex-direction: column;
  gap: 1rem;

  color: var(--third-2);
  text-decoration: none;
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
