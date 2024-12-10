<template>
  <div class="category-bar">
    <button
      v-for="(category, index) in categories"
      :key="index"
      class="category-item"
      :class="{ active: selected === category }"
      @click="selectCategory(category)"
    >
      {{ category }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ["Tous", "Tourisme", "Art", "Musique", "Restaurants", "Hôtel"],
      selected: "Tous",
    };
  },
  methods: {
    selectCategory(category) {
      this.selected = category;
    },
  },
};
</script>

<style scoped>
.category-bar {
  display: flex;
  overflow-x: auto; /* Permet le défilement horizontal */
  background-color: white;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  gap: 10px; /* Espacement entre les éléments */

  /* Masquer la barre de défilement */
  scrollbar-width: none; /* Pour Firefox */
  -ms-overflow-style: none; /* Pour Internet Explorer */
}

.category-bar::-webkit-scrollbar {
  display: none; /* Masque la barre de défilement pour Chrome, Safari et Edge */
}

.category-item {
  padding: 8px 16px;
  border: 1px solid #ccc; /* Bordure par défaut */
  border-radius: 20px; /* Coins arrondis */
  background-color: white;
  color: #555;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap; /* Empêche les retours à la ligne */
  transition: all 0.3s ease; /* Animation fluide */
}

.category-item.active {
  font-weight: bold;
  border: 1px solid #1A237E; /* Bordure active */
  color: #1A237E;
}

.category-item:hover {
  background-color: #f0f0f0; /* Couleur au survol */
}

.category-bar::-webkit-scrollbar {
  height: 8px; /* Taille de la scrollbar */
}

.category-bar::-webkit-scrollbar-thumb {
  background: #ccc; /* Couleur de la barre */
  border-radius: 20px;
}

.category-bar::-webkit-scrollbar-track {
  background: transparent;
}
</style>
