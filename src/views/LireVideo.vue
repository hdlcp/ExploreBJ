<template>
  <div id="app">
      <VideoDetails />
      <AppBar />
  </div>
</template>

<script>
import VideoDetails from '@/components/VideoDetails.vue';
import AppBar from '@/components/AppBar.vue';

export default {
  components: {
      VideoDetails, AppBar
  },
};
</script>

<style scoped>
#app {
  width: 359px;
  height: 811px;
  margin: 0 auto;
  border: 1px solid #ccc;
  overflow: hidden;
}
</style>

