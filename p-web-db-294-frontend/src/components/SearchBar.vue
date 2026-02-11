<template>
  <input type="search" name="search" id="search" class="search" placeholder="search">
</template>

<style scoped>
  input {
    width: 20rem;
    padding: 0.5rem;

    border: 1px solid var(--secondary-2);
    border-radius: 5px;
    box-sizing: content-box;

    background: var(--main);

    transition: all 200ms;
  }

  input:focus {
    border: 2px solid var(--third);
    outline: none;
  }
</style>
