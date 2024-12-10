<template>
  <div class="container">
    <header>
      <button class="back-btn">←</button>
      <h4>Recherche</h4>
    </header>
    <div class="search-section">
      <img src="@/assets/img.png" />
      <select v-model="selectedCity" class="dropdown">
        <option disabled value="">Choisissez une ville</option>
        <option>Paris</option>
        <option>Lyon</option>
        <option>Marseille</option>
      </select>
      <select v-model="selectedCategory" class="dropdown">
        <option disabled value="">Choisissez une catégorie</option>
        <option>Restaurant</option>
        <option>Hôtel</option>
        <option>Commerce</option>
      </select>
      <button @click="search" class="search-btn">Rechercher</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecherchePage",
  data() {
    return {
      selectedCity: "",
      selectedCategory: "",
    };
  },
  methods: {
    search() {
      alert(`Recherche pour la ville : ${this.selectedCity} et la catégorie : ${this.selectedCategory}`);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  background-color: #f5f6fa;
}

header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top : 10 px ;
  font-size: 1.1em;
}

.back-btn {
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
}

.search-section {
  text-align: center;
}

.dropdown {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
}

.search-btn {
  background-color: #1A237E;
  color: white;
  margin-top : 10px ;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
}

.search-btn:hover {
  background-color: #002bb5;
}


.nav-btn {
  background: none;
  border: none;
  font-size: 1.5em;
  color: #aaa;
  cursor: pointer;
}

.nav-btn.active {
  color: #0038ff;
}
</style>
