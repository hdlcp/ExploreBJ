<template>
  <div class="container">
    <header>
      <button class="back-btn">
        <i class="fas fa-arrow-left"></i>
      </button>
      <h5>Ajout d'Entreprise</h5>
    </header>
    <div class="form-section">
      <button class="upload-btn">
        <i class="fas fa-upload"></i> Importer une courte vidéo
      </button>
      <div class="input-group">
        <i class="fas fa-building icon"></i>
        <input v-model="name" type="text" placeholder="Entrez le nom de l'entreprise" class="input" />
      </div>
      <div class="input-group">
        <i class="fas fa-tags icon"></i>
        <select v-model="category" class="input">
          <option disabled value="">Choisir une catégorie</option>
          <option>Restaurant</option>
          <option>Hôtel</option>
          <option>Tourisme</option>
        </select>
      </div>
      <div class="input-group">
        <i class="fas fa-map-marker-alt icon"></i>
        <input v-model="googleMapLink" type="url" placeholder="Lien Google carte" class="input" />
      </div>
      <div class="time-inputs">
        <div class="input-group">
          <i class="far fa-clock icon"></i>
          <input v-model="openingHour" type="time" class="time-input" />
        </div>
        <div class="input-group">
          <i class="far fa-clock icon"></i>
          <input v-model="closingHour" type="time" class="time-input" />
        </div>
      </div>
      <div class="input-group">
        <i class="fas fa-city icon"></i>
        <select v-model="city" class="input">
          <option disabled value="">Choisir une ville</option>
          <option>Ouidah</option>
          <option>Natitingou</option>
          <option>Abomey</option>
        </select>
      </div>
      <div class="input-group">
        <i class="fas fa-comment-alt icon"></i>
        <textarea v-model="description" placeholder="Une courte description" class="textarea"></textarea>
      </div>
      <router-link to="/Abonnement" class="icon-link">
      <button class="submit-btn" @click="submit">Validé</button>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "AjoutEntreprise",
  data() {
    return {
      name: "",
      category: "",
      googleMapLink: "",
      openingHour: "",
      closingHour: "",
      city: "",
      description: "",
    };
  },
  methods: {
    submit() {
      if (this.name && this.category && this.googleMapLink && this.city && this.description) {
        alert(`Entreprise ajoutée : ${this.name}`);
      } else {
        alert("Veuillez remplir tous les champs obligatoires.");
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 20px;
  background-color: #f5f6fa;
}

header {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2em;
}

.back-btn {
  background: none;
  border: none;
  font-size: 1.5em;
  color: #1A237E;
  cursor: pointer;
}

.form-section {
  flex: 1;
  text-align: center;
}

.input-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  border: 1px solid #1A237E;
  padding: 10px;
  border-radius: 5px;
}

.icon {
  color: #1A237E;
  font-size: 1.2em;
}

.input,
.textarea {
  flex: 1;
  border: none;
  outline: none;
}

.time-inputs {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.upload-btn {
  width: 100%;
  padding: 15px;
  background-color: #e6e6e6;
  border: 1px dashed #bbb;
  color: #1A237E;
  margin-bottom: 20px;
  font-size: 1em;
  cursor: pointer;
}

.submit-btn {
  background-color: #1A237E;
  color: white;
  border: none;
  padding: 15px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #151c61;
}


.nav-btn {
  background: none;
  border: none;
  font-size: 1.5em;
  color: #aaa;
  cursor: pointer;
}

.nav-btn.active {
  color: #1A237E;
}
</style>
