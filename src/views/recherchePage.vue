<template>
  <div id="app">
    <recherche />
    <AppBar />
  </div>
</template>

<script>
import recherche from "@/components/recherche.vue";
import AppBar from "@/components/AppBar.vue";

export default {
  components: { recherche, AppBar },
  data() {
    return {
      currentView: "recherche",
    };
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Arial", sans-serif;
}

#app {
  text-align: center;
}
</style>
