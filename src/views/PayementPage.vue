<template>
  <div>
    
    <PayementSucces />
     <AppBar />
  </div>
</template>

<script>


import PayementSucces from '@/components/PayementSucces.vue';
import AppBar from '@/components/AppBar.vue';

export default {
    components: { PayementSucces, AppBar },
  data() {
    return {
      currentView: 'PayementSucces',
    };
  },
 
};
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

body {
  font-family: 'Roboto', sans-serif;
}

.bottom-navigation {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: #fff;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}

.bottom-navigation button {
  background: none;
  border: none;
  cursor: pointer;
}

.bottom-navigation i {
  font-size: 24px;
}
</style>
