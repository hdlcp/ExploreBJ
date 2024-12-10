<template>
  <div id="app">
    <AjoutEntreprise />
    <AppBar />
  </div>
</template>

<script>
import AjoutEntreprise from "@/components/AjoutEntreprise.vue";
import AppBar from "@/components/AppBar.vue";

export default {
  components: { AjoutEntreprise, AppBar },
    
  data() {
    return {
      currentView: "AjoutEntreprise",
    };
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

body {
  margin: 0;
  font-family: "Arial", sans-serif;
}

#app {
  text-align: center;
}
</style>
