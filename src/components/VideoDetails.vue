<template>
  <div class="page-container">
    <!-- Carte principale avec vidéo -->
    <div class="card">
      <div class="media-section">
        
    <!-- La vidéo joue automatiquement au chargement -->
    <video
      src="@/assets/vid_face_a_maison.mp4"
      controls
      autoplay
      class="restaurant-video"
      @ended="stopVideo"
      ref="videoPlayer"
    ></video>
      </div>
  <div class="card-content">
    <!-- Nom du restaurant et statut -->
    <div class="restaurant-header">
      <h2 class="restaurant-name">{{ restaurant.name }}</h2>
      <span class="status" :class="{ closed: restaurant.status === 'Fermé' }">
        {{ restaurant.status }}
      </span>
    </div>

    <!-- Evaluation des étoiles et lien Google Maps -->
    <div class="rating-location">
      <p class="rating">
        <span v-for="star in 5" :key="star" class="star">⭐</span>
      </p>
      <a :href="restaurant.googleMapsLink" target="_blank" class="location">
        <i class="fas fa-map-marker-alt"></i> {{ restaurant.location }}
      </a>
    </div>

    <!-- Description du restaurant -->
    <p class="description">
      {{ restaurant.description }}
    </p>
  </div>
  </div>

    <!-- Section des commentaires -->
    <div class="comments-section">
      <h2>Commentaires</h2>
      <div
        v-for="(comment, index) in comments"
        :key="index"
        class="comment-item"
      >
        <p class="comment-author">{{ comment.author }}</p>
        <p class="comment-content">{{ comment.content }}</p>
        <p class="comment-date">{{ comment.date }}</p>
      </div>

      <!-- Ajout d'un commentaire -->
      <div class="add-comment">
        <textarea
          v-model="newComment"
          placeholder="Ajouter un commentaire"
          rows="3"
        ></textarea>
        <button class="publish-button" @click="addComment">Publier</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurant: {
        name: "Le Tambourin Béninois",
        status: "Fermé",
        category: "Béninois / International",
        location: "Cotonou",
        googleMapsLink:
          "https://www.google.com/maps/place/Cotonou", // Lien Google Maps
        description: "Découvrez l'Agou, une spécialité béninoise riche en saveurs...",
      },
      comments: [
        {
          author: "Anonyme",
          content: "It is very delicious 😋",
          date: "17 Dec 2024",
        },
      ],
      newComment: "", // Champ pour le commentaire
      isPlaying: false, // Indique si la vidéo est en cours de lecture
    };
  },
  methods: {
    playVideo() {
      this.isPlaying = true;
    },
    stopVideo() {
      this.isPlaying = false;
    },
    addComment() {
      if (this.newComment.trim()) {
        this.comments.push({
          author: "Anonyme",
          content: this.newComment,
          date: new Date().toLocaleDateString(),
        });
        this.newComment = ""; // Réinitialiser le champ
      }
    },
  },
};
</script>

<style scoped>
/* Conteneur global */
.page-container {
  font-family: "Arial", sans-serif;
  max-width: 500px;
  margin: 20px auto;
  padding: 15px;
  background-color: #f9f9f9; 
  max-height: 100vh;  
  overflow-y: auto;  
  
}
.page-container::-webkit-scrollbar {
  display: none;
}


/* Carte */
.card {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Ombre subtile */
  overflow: hidden;
}

/* Section Média */
.media-section {
  position: relative;
}

.restaurant-image,
.restaurant-video {
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
}

/*section de ls description */
.card-content {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.restaurant-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.restaurant-name {
  font-size: 1.0rem;
  font-weight: bold;
  color: #333;
}

.status {
  font-size: 1rem;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: #f0f0f0;
  color: #555;
}

.status.closed {
  background-color: #f44336; /* Rouge pour "Fermé" */
  color: #fff;
}


.rating-location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.rating {
  font-size: 0.7rem;
}

.star {
  color: #f39c12;
}

.location {
  font-size: 0.8rem;
  color: #1a237e;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.location i {
  margin-right: 5px;
}

.location:hover {
  text-decoration: underline;
}

.description {
  font-size: 1rem;
  color: #333;
  margin-top: 5px;
  line-height: 1.5;
}

/* Section des commentaires */
.comments-section {
  margin-top: 20px;
  background-color: #fff;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.comment-item {
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.comment-author {
  font-weight: bold;
}

.comment-content {
  margin-top: 5px;
}

.comment-date {
  font-size: 12px;
  color: #aaa;
  margin-top: 5px;
}

/* Champ d'ajout de commentaire */
.add-comment textarea {
  width: 90%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 10px;
}

.publish-button {
  margin-top: 10px;
  background-color: #1A237E;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
}

.publish-button:hover {
  background-color: #0056b3;
}
</style>
