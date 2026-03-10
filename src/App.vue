<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SearchBar from './components/SearchBar.vue'

// const emitTest = (emitVar: any) => console.log(`Emit test : ${emitVar}`)
</script>

<template>
  <div class="wrapper">
    <div class="banner-left"></div>
    <div class="banner-right"></div>
    <header style="grid-area: header">
      <nav>
        <RouterLink to="/">L&CloseCurlyQuote;0ctet Littéraire</RouterLink>
        <span></span>
        <RouterLink to="/books">Ouvrages</RouterLink>
        <span></span>
        <RouterLink to="/add-book">Ajouter un ouvrage</RouterLink>
      </nav>
      <!-- <SearchBar @run-emission-func="emitTest"></SearchBar> -->
      <SearchBar></SearchBar>
    </header>
    <img class="svg top" style="grid-area: top-svg" src="./assets/waves-top.svg" alt="" />
    <RouterView />
    <img class="svg bot" style="grid-area: bot-svg" src="./assets/waves-bot.svg" alt="" />
    <footer style="grid-area: footer">
      <div>
        <p>&copy; L&CloseCurlyQuote;0ctet Littéraire</p>
      </div>
      <div>
        <p>Site créé par : Tony Thomas, Théophile Borboën et Gillian L'Horset</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.wrapper {
  min-height: 100%;
  position: relative;

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

h1 {
  font-weight: bolder;
  font-family: JetBrainsMono-extrabold;
  background: #c2e0e3;
  background: linear-gradient(180deg, rgba(194, 224, 227, 1) 0%, rgba(157, 181, 192, 1) 100%);
  margin-bottom: 50px;
}

.banner-left,
.banner-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 183px;
  height: 100%;

  background-repeat: repeat-y; /* repeats vertically */
  z-index: -1;
  display: block;
  /* transform: scaleX(-1); */
}

.banner-left {
  left: 0;
  background-image: url('/src/assets/BinaryWaterfallLeft.svg');
}

.banner-right {
  right: 0;
  background-image: url('/src/assets/BinaryWaterfallRight.svg');
}
</style>
