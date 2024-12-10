<template>
  <div class="welcome-page">
    <div class="background-map">
      <!-- Image de la carte -->
      <img src="@/assets/téléchargement.png" alt="Carte du Bénin" class="map-image" />
    </div>
    <div class="welcome-card">
      <!-- Texte d'accueil -->
      <h1>Bienvenue</h1>
      <p>Explorez le Bénin autrement</p>
      <!-- Bouton -->
       <router-link to="/welcome2">
  <button class="explore-button">
    <span>→</span>
  </button>
</router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
};
</script>

<style scoped>
/* Styles pour la page d'accueil */
.welcome-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  background-color: rgba(26, 35, 126, 1);
}


.background-map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.map-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}

.welcome-card {
  z-index: 1;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 300px;
}

.welcome-card h1 {
  margin: 0;
  font-size: 24px;
  color: #2c3e50;
}

.welcome-card p {
  margin: 10px 0;
  font-size: 16px;
  color: #7f8c8d;
}

.explore-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}

.explore-button span {
  font-size: 24px;
}

h1 {
  color: #1a237e; 
}

.explore-button:hover {
  background-color: #45a049;
}
</style>
