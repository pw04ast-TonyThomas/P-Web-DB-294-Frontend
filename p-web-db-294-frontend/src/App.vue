<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SearchBar from './components/SearchBar.vue'
</script>

<template>
  <div class="wrapper">
    <header style="grid-area: header">
      <nav>
        <RouterLink to="/">L&CloseCurlyQuote;0ctet Littéraire</RouterLink>
          <span></span>
        <RouterLink to="/works">Ouvrages</RouterLink>
      </nav>
      <SearchBar></SearchBar>
    </header>
    <img class="svg top" style="grid-area: top-svg" src="./assets/waves-top.svg" alt="">
    <main style="grid-area: main">
      <RouterView />
    </main>
    <img class="svg bot" style="grid-area: bot-svg" src="./assets/waves-bot.svg" alt="">
    <footer style="grid-area: footer">
      <p>&copy; L&CloseCurlyQuote;0ctet Littéraire</p>
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

  .svg {
    width: 100%;
    height: 50vh;
  }

  .top {
    transform: scaleY(-1);
    transform-origin: center;
  }

  footer {
    background: #000000;
    height: 100%;
    width: 100%;
    color: #ffffff;
    padding: 1rem;
    box-sizing: border-box;
  }
</style>
