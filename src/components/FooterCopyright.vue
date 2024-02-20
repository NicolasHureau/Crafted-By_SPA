<script setup>

</script>

<template>
  <div class="flex items-center">
    <RouterLink to="#"><span>Copyright © 2023 Crafted by. </span><span>Tous droit réservés</span></RouterLink>
    <Router-link to="/policy">Politique de confidentialité</Router-link>
    <RouterLink to="/use">Conditions d'utilisation</RouterLink>
  </div>
</template>

<style scoped>
a {
  padding: 0 1rem;
}

@media (max-width: 1024px) {
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  div a {
    padding: 0.5rem 0
  }
}
@media (max-width: 400px) {
  a span {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>