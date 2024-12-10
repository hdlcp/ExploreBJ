
<template>
  <div id="app">
    <AbonnementPage />
    <AppBar />
  </div>
</template>

<script>
import AbonnementPage from "@/components/AbonnementPage.vue";
import AppBar from "@/components/AppBar.vue";

export default {
  components: { AbonnementPage, AppBar },
 
  data() {
    return {
      currentView: "AbonnementPage", // Page par défaut
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
