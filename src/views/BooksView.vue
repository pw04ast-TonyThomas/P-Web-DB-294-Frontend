<script setup lang="ts">
import CardItem from '@/components/CardItem.vue'
</script>

<template>
  <main>
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
    <div class="category">
      <legend>Fantaisie</legend>
      <CardItem src="https://cataas.com/cat" title="Harry Potter le 3" rating="4"></CardItem>
    </div>
  </main>
</template>

<style scoped>
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
</style>
