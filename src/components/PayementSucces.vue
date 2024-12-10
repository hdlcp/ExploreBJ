
<template>
  <div class="payment-success-container">
    <header>
      <button @click="goBack">
        <i class="fa-solid fa-arrow-left" style="color: #1A237E;"></i>
      </button>
      <h2>Choisir votre abonnement</h2>
    </header>
    <main>
      <div class="success-icon">
        <i class="fa-solid fa-circle-check" style="color: #4CAF50; font-size: 48px;"></i>
      </div>
      <p class="success-message">Paiement effectué avec succès</p>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      // Redirection à la page précédente
      this.$emit('navigate-back');
    },
  },
};
</script>

<style scoped>
.payment-success-container {
  text-align: center;
  padding: 20px;
}

header {
  display: flex;
  align-items: center;
}

header button {
  background: none;
  border: none;
  cursor: pointer;
}

header h2 {
  margin-left: 10px;
  font-size: 18px;
  color: #1A237E;
}

.success-icon {
  margin-top: 50px;
}

.success-message {
  font-size: 18px;
  color: #000;
  margin-top: 20px;
}

</style>
