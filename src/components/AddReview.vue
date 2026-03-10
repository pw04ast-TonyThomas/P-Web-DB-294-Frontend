<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Service from '@/services/service.js'

const router = useRouter()
const route = useRoute()

const commentary = ref('')
const rating = ref('3')

// get the id of the current book
const bookId = ref(route.params.id)

function AddReview() {
  const newCommentary = {
    ouvrageId: Number(bookId.value),
    contenu: commentary.value,
    rating: Number(rating.value),
    date: new Date().toISOString().split('T')[0],
  }

  Service.addCommentary(newCommentary).then()

  // return the view
  router.push('/books')
}
</script>

<template>
  <form class="add_review_form" @submit.prevent="AddReview">
    <div class="comment">
      <label for="commentaire">Commentaire</label>
      <textarea v-model="commentary" id="commentaire" required></textarea>
    </div>
    <div class="note">
      <label>Note</label>
      <input type="range" v-model="rating" min="1" max="5" required />
    </div>
    <button type="submit" class="button_submit">Envoyer la review</button>
  </form>
</template>

<style scoped>
.add_review_form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  grid-area: form-comment;
}

.add_review_form > div {
  grid-row: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.comment > textarea {
  resize: vertical;
  width: 500px;
  height: 100px;
  background-color: var(--main);
  border: 2px, solid;
  border-color: var(--third-2);
  border-radius: 10px;
  padding: 4px;
  padding-left: 10px;
}

.button_submit {
  width: 40%;
  height: 50px;
  grid-row: 2;
  background-color: var(--main);
  border: 2px, solid;
  border-color: var(--third-2);
  border-radius: 10px;
  padding: 4px;
  padding-left: 10px;
  cursor: pointer;
}

.button_submit:active {
  background-color: var(--secondary);
}

.note {
  grid-area: form-rating;
}

input[type='range'] {
  -webkit-appearance: none;
  width: 200px;
  height: 6px;
  background: var(--main);
  border: 2px solid;
  border-color: var(--third-2);
  border-radius: 5px;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 30px;
  width: 30px;
  background: var(--third);
  border: 2px solid;
  border-color: var(--third-2);
  border-radius: 500px;
  cursor: pointer;
}
</style>
