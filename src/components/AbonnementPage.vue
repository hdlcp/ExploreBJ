<template>
  <div class="container">
    <header>
      <button class="back-btn">←</button>
      <h4>Choisissez votre abonnement</h4>
    </header>
    <div class="subscription-section">
      <h2 class="texte">Veuillez opter pour un choix</h2>
      <div class="subscription-options">
        <label v-for="option in options" :key="option.id" class="option-label">
          <input
            type="radio"
            name="subscription"
            :value="option.id"
            v-model="selectedOption"
          />
          <span>{{ option.label }}</span>
          <span class="price">{{ option.price }}</span>
        </label>
      </div>
      <router-link to="/paymentFinal" class="icon-link">
      <button class="pay-btn" @click="pay">Payer</button>
       </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AbonnementPage",
  data() {
    return {
      selectedOption: null,
      options: [
        { id: 1, label: "1 mois", price: "10.000 FCFA" },
        { id: 2, label: "2 mois", price: "15.000 FCFA" },
        { id: 3, label: "5 mois", price: "35.000 FCFA" },
        { id: 4, label: "1 an", price: "70.000 FCFA" },
      ],
    };
  },
  methods: {
    pay() {
      if (this.selectedOption) {
        const selected = this.options.find((opt) => opt.id === this.selectedOption);
        alert(`Vous avez choisi l'abonnement : ${selected.label} pour ${selected.price}`);
      } else {
        alert("Veuillez sélectionner un abonnement.");
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content : center ;
  left: -448px;
  top: 2089px;
  padding: 20px;
  background-color: #f5f6fa;
  radius: 15px;
}

header {
  display: flex;
  align-items: center;

  font-size: 1em;
  color:black;
}

.back-btn {
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
}

.texte {
  color:#1a237e ;
  margin-bottom : 20px ;
}

.subscription-section {
  margin-top : 30% ;
  margin-bottom : 70% ;
  text-align: center;
  width : auto ;
}

.subscription-options {
  margin: 20px 0;
  }
.option-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 20px 0;
  border-radius: 5px;
}

input[type="radio"] {
  margin-right: 10px;
}

.price {
  font-weight: bold;
}

.pay-btn {
  background-color: #1A237E;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
}

.pay-btn:hover {
  background-color: #002bb5;
}


.nav-btn {
  background: none;
  border: none;
  font-size: 1.5em;
  color: #aaa;
  cursor: pointer;
}

.nav-btn.active {
  color: #0038ff;
}
</style>
