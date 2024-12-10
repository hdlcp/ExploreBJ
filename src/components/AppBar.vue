<template>
  <div class="app-bar">
    <div class="icon-container">
      <router-link to="/search" class="icon-link" @click="handleClick($event)">
        <i class="fas fa-search"></i>
      </router-link>
      <router-link to="/" class="icon-link" @click="handleClick($event)">
        <i class="fas fa-home"></i>
      </router-link>
      <router-link to="/ajout" class="icon-link" @click="handleClick($event)">
        <i class="fas fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  methods: {
    handleClick(event) {
      const icon = event.target.closest(".icon-link");
      if (!icon) return;

      // Crée un cercle derrière l'icône
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      const rect = icon.getBoundingClientRect();
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;
      icon.appendChild(ripple);

      // Supprime le cercle après l'animation
      setTimeout(() => {
        ripple.remove();
      }, 600);
    },
  },
};
</script>

<style scoped>
.app-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.icon-container {
  display: flex;
  gap: 30px;
}

.icon-link {
  position: relative;
  font-size: 24px;
  color: #333;
  cursor: pointer;
}

.icon-link i {
  transition: transform 0.2s, color 0.2s;
}

.icon-link:hover i {
  transform: scale(1.2);
  color: #1a237e;
}

.ripple {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: rgba(26, 35, 126, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ripple-animation 0.6s ease-out;
  pointer-events: none;
}

@keyframes ripple-animation {
  from {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  to {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
}

.icon-container .icon-link:nth-child(2) { /* Cible uniquement la deuxième icône (au milieu) */
  margin-left: 60px; /* Espacement supplémentaire à gauche */
  margin-right: 60px; /* Espacement supplémentaire à droite */
}
</style>
