<script setup lang="ts">
// @ts-nocheck
import { onMounted, ref } from 'vue'
import Service from '@/services/service.js'
import starIcon from '../assets/icons/star.svg'
import starEmptyIcon from '../assets/icons/starEmpty.svg'
import ModifyBookForm from '@/components/ModifyBookForm.vue'
</script>

<template>
  <main class="main">
    <h1>Modifier</h1>
    <ModifyBookForm></ModifyBookForm>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 90px;
}
</style>
