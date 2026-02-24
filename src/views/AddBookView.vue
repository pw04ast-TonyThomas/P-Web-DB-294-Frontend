<script setup lang="ts"></script>

<template>
  <div class="book_add">
    <h1>Ajout d'un livre</h1>
    <form action="POST" class="add_book_form">
      <label for="titre">Titre</label>
      <input type="text" id="titre" class="name_input" />

      <label for="categorie">Categorie</label>
      <input list="categorie" />
      <datalist id="categorie">
        <option value="test"></option>
        <option value="test2"></option>
      </datalist>

      <label for="num_pages">Nombre de pages</label>
      <input type="number" id="num_pages" class="num_page_input" />

      <label for="extrait_livre">Extrait du livre</label>
      <input type="file" id="extrait_livre" class="extrait_input" />

      <label for="resume" class="resume_label">Résumé</label>
      <textarea id="resume" class="resume_input" placeholder="Describe yourself here..."> </textarea>

      <label for="nom_auteur">Nom de l'auteur</label>
      <input type="text" id="nom_auteur" class="name_input" />

      <label for="prenom_auteur">Prénom de l'auteur</label>
      <input type="text" id="prenom_auteur" class="name_input" />
      
      <label for="nom_editeur">Nom de l'éditeur</label>
      <input type="text" id="nom_editeur" class="name_input" />

      <label for="annee_edition">Année d'édition</label>
      <input type="date" id="annee_edition" class="date_input" />

      <label for="image_couverture">Image de couverture</label>
      <input type="file" id="image_couverture" accept=".jpg, .jpeg, .png, .webp" class="extrait_input" />

      <button type="submit" style="padding: 100px;" >bouton</button>
    </form>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

.add_book_form {
  margin-top: 100px;

  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 63px;

  justify-self: center;
  justify-content: center;
  align-items: center;
  margin: 0px 50px;
}

.add_book_form > input,
.add_book_form > textarea {
  resize: none;
  background-color: var(--main);
  border: 2px, solid;
  border-color: var(--third-2);
  border-radius: 10px;
  padding: 4px;
}

/* style of the inputs */

.num_page_input {
  width: 50px;
}

input::file-selector-button {
  display: none;
}

.extrait_input {
  width: 40%;
  transition: 0.2s;
}

.extrait_input:hover {
  cursor: pointer;
  border-color: var(--third);
  transition: 0.2s;
}

.resume_input {
  width: 100%;
  height: 200px;
}

.name_input {
  width: 40%;
}

.date_input {
  width: 20%;
}

/* style of the labels */

.resume_label {
  align-self: self-start;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
}
</style>
