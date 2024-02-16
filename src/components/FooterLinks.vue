<script setup>

import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex items-center">
    <RouterLink to="/">Accueil</RouterLink>
    <RouterLink to="/businesses">Artisans</RouterLink>
    <RouterLink to="/products">Articles</RouterLink>
    <RouterLink to="/about">Contactez-nous</RouterLink>
  </div>
</template>

<style scoped>
a {
  padding: 0 1rem;
}

@media (max-width: 768px) {
  div {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  div a {
    padding: 0.5rem 0;
  }
}
</style>