<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SearchBar from './components/SearchBar.vue';
</script>

<template>
  <div class="wrapper">

    <header style="grid-area: header;">
        <nav>
          <RouterLink to="/">L&CloseCurlyQuote;0ctet Littéraire</RouterLink>
          <span></span>
          <RouterLink to="/about">Ouvrages</RouterLink>
        </nav>
        <SearchBar></SearchBar>
    </header>
    <main style="grid-area: main;">
      <RouterView />
    </main>
    <footer style="grid-area: footer;">

    </footer>
  </div>
</template>

<style scoped>
  .wrapper {
    min-height: 100%;

    display: grid;
    grid-template:
    'header header  header' 4rem
    'top-svg top-svg top-svg'
    'main    main    main' auto
    'bot-svg bot-svg bot-svg'
    'footer  footer  footer' 4rem
    / 2fr 8fr 2fr;
    place-items: start center;
  }

  header {
    place-self: center;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    background: var(--secondary);
    border: 4px solid var(--main);
    box-sizing: border-box;

    gap: 1rem;
    & > nav {
      display: flex;
      gap: 1rem;
      & a {
        color: var(--third);
        text-decoration: none;
      }

      & a:hover {
        text-decoration: underline;
      }

      & span::after {
        content: '○';
      }
    }
  }
</style>
