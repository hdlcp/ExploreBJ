<template>
  <div id="app">
    <!-- Affichage conditionnel : écran de chargement ou nouvelle page -->
    <div v-if="isLoading" class="loading-screen">
      <!-- Logo statique -->
      <img src="@/assets/logo_explorebj.png" alt="ExploreBJ" class="logo" />
      <!-- Icône de chargement -->
       <l-dot-pulse size="43" speed="1.3" color="white"></l-dot-pulse>
    </div>

    <!-- Nouvelle interface après le chargement -->
    <div v-else>
      <!-- Affiche le composant de la route active -->
      <router-view />
    </div>
  </div>
</template>

<script>
// Vous n'avez pas besoin d'importer directement VideoListPage ici
// L'importation se fait via le routeur, donc aucune déclaration ici.
export default {
  name: "App",
  data() {
    return {
      isLoading: true, // État pour l'écran de chargement
    };
  },
  mounted() {
    // Changement d'écran après 5 secondes
    setTimeout(() => {
      this.isLoading = false;
       this.$router.push("/welcome1");
    }, 5000);
  },
};
</script>

<style scoped>
/* Fond avec la couleur spécifiée */
.loading-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1A237E;
}

/* Logo centré */
.logo {
  width: 150px;
  height: auto;
  margin-bottom: 30px;
}
</style>
