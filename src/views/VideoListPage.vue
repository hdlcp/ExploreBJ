<template>
  <div class="video-list-page">
    <CategoryBar />
    <div class="video-list">
      <VideoCard
        v-for="(video, index) in videos"
        :key="index"
        :image="video.image"
        :title="video.title"
        :subtitle="video.subtitle"
        :isOpen="video.isOpen"
      />
    </div>
    <AppBar />
  </div>
</template>

<script>
import CategoryBar from "@/components/CategoryBar.vue";
import VideoCard from "@/components/VideoCard.vue";
import AppBar from "@/components/AppBar.vue";

export default {
  components: { CategoryBar, VideoCard, AppBar },
 data() {
  return {
    videos: [
      {},{},{},{},
    ],
  };
},

};
</script>

<style scoped>
.video-list-page {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Assurez-vous que la hauteur de la page prend tout l'écran */
}

.video-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espace uniforme entre les cartes */
  padding: 10px;
  overflow-y: auto; /* Active le défilement vertical */
  height: 100%; /* Remplit l'espace restant */
}

</style>

