<script setup lang="ts"></script>

<template>
  <main class="book_add">
    <h1>Ajout d'un livre</h1>
    <form action="POST" class="add_book_form">
      <label for="titre">Titre</label>
      <input type="text" id="titre" class="name_input" required />

      <label for="categorie">Categorie</label>
      <input id="categroie_list" list="categorie" required />
      <datalist id="categorie">
        <option v-for="categorie in categories">{{ categorie }}</option>
      </datalist>

      <label for="num_pages">Nombre de pages</label>
      <input type="number" id="num_pages" class="num_input" required />

      <label for="extrait_livre">Extrait du livre</label>
      <input type="file" id="extrait_livre" class="extrait_input" accept=".pdf" @change="onCoverExtraitChange" required />

      <label for="resume" class="resume_label">Résumé</label>
      <textarea id="resume" name="resume" class="resume_input" placeholder="Résumé de votre livre..." required></textarea>

      <label for="nom_auteur">Nom de l'auteur</label>
      <input type="text" id="nom_auteur" class="name_input" required />

      <label for="prenom_auteur">Prénom de l'auteur</label>
      <input type="text" id="prenom_auteur" class="name_input" required />
      
      <label for="nom_editeur">Nom de l'éditeur</label>
      <input type="text" id="nom_editeur" class="name_input" required />

      <label for="annee_edition">Année d'édition</label>
      <input type="number" id="annee_edition" class="num_input" required />

      <label for="image_couverture">Image de couverture</label>
      <div class="cover_div">
        <input type="file" id="image_couverture" accept=".jpg, .jpeg, .png, .webp" class="cover_img_input" @change="onCoverIgmChange" required />
        <img id="test" src="https://static.wikia.nocookie.net/shrek/images/8/85/Shrek_2001_poster.jpg/revision/latest/scale-to-width-down/1200?cb=20201020072731" alt="Image uploaded by the user" class="cover_img"/>
      </div>

      <button type="submit" class="submit_button">Ajouter le livre</button>
    </form>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 90px;
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
.add_book_form > textarea,
.add_book_form > div > input {
  resize: none;
  background-color: var(--main);
  border: 2px, solid;
  border-color: var(--third-2);
  border-radius: 10px;
  padding: 4px;
  padding-left: 10px;
}

/* style of the inputs */

.num_input {
  width: 50px;
}

input::file-selector-button {
  display: none;
}

.extrait_input {
  width: 40%;
  min-width: 180px;
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
  min-width: 400px;
  width: 40%;
}

.date_input {
  width: 20%;
}

.cover_img_input:hover {
  cursor: pointer;
  border-color: var(--third);
  transition: 0.2s;
}

/* style of the labels */

.resume_label {
  align-self: self-start;
}

.cover_img {
  display: none;
  
  max-width: 100px;
  height: auto;
  border: 2px solid var(--third-2);
  border-radius: 10px;
  position: absolute;
  left: 300px;
}

.cover_div {
  display: flex;
  align-items: start;
  position: relative;
}

.submit_button {
  padding: 20px;
  background-color: var(--main);
  border-radius: 10px;
  border-color: var(--third-2);
  box-shadow: 0;
}

/* about the html default style */

datalist option:hover, datalist option:focus {
  color: #fff;
  background-color: #036;
  outline: 0 none;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
}
</style>

<script>
export default {
  data() {
    return {
      categories: [ "roman",
                    "poesie",
                    "theatre",
                    "essai",
                    "biographie",
                    "science",
                    "histoire",]
    }
  },
  methods: {
    onCoverIgmChange(e) {
      const file = e.target.files[0];

      if (!file) return;
      
      const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

      if (!allowedTypes.includes(file.type)) {
        alert("Format invalide ! Veuillez choisir une image JPG/JPEG/PNG/WEBP.");
        e.target.value = '';
        return;
      }
      
      let src = URL.createObjectURL(file);
      let imagePreview = document.getElementById('test');
      
      if (imagePreview) {
        imagePreview.src = src;
        imagePreview.style.display = "block";
      }
    },
    onCoverExtraitChange(e) {
      const file = e.target.files[0];

      if (!file) return;
      

    if (file.type !== "application/pdf") {
        alert("Format invalide ! Veuillez choisir un document au format PDF.");
        e.target.value = '';
        return;
      }
    }
  }
};

/////////////////////////////////////////////////

</script>
