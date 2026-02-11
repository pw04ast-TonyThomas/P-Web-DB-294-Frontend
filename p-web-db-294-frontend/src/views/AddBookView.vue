<script setup lang="ts"></script>

<template>
  <div class="book_add">
    <h1>Ajout d'un livre</h1>
    <form action="POST" class="add_book_form">
      <label for="titre">Titre</label>
      <input type="text" id="titre">


      <label for="categorie">Categorie</label>
      <input list="categorie">
      <datalist id="categorie">
        <option value="test"></option>
        <option value="test2"></option>
      </datalist> 

      
      <label for="num_pages">Nombre de pages</label>
      <input type="number" id="num_pages">

      
      <label for="extrait_livre">Extrait du livre</label>
      <input type="file" id="extrait_livre">
      

      <label for="resume">Résumé</label>
      <input type="text" id="resume">


      <label for="nom_auteur">Nom de l'auteur</label>
      <input type="text" id="nom_auteur">


      <label for="prenom_auteur">Prénom de l'auteur</label>
      <input type="text" id="prenom_auteur">


      <label for="annee_edition">Année d'édition</label>
      <input type="number" id="annee_edition">


      <label for="moyenne_apprecition">Moyenne d'appéciations</label>
      <input type="number" id="moyenne_apprecition">


      <label for="commentaires">Commentaires</label>
      <input type="text" id="commentaires">

      
      <label for="image_couverture">Image de couverture</label>
      <input type="file" id="image_couverture">
    </form>
  </div>
</template>

<style scoped>
  .add_book_form {
    display: grid;
    grid-template-columns: 1fr, 1fr;
    
  }
</style>