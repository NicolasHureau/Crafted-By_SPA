<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <nav class="flex justify-center items-center grow">

    <button role="button" class="dropdown">
      <i-ph-list :style="{ fontSize:'30px' }"/>
      <div class="dropdown-content text-start">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/businesses">Artisans</RouterLink>
        <RouterLink to="/products">Articles</RouterLink>
        <RouterLink to="/about">Contactez-nous</RouterLink>
      </div>
    </button>

    <RouterLink to="/">
      <img alt="Vue logo" class="logo min-w-40" src="@/assets/logo.svg" width="250" height="250" />
    </RouterLink>

    <div class="grow text-center" id="menu">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/businesses">Artisans</RouterLink>
      <RouterLink to="/products">Articles</RouterLink>
      <RouterLink to="/about">Contactez-nous</RouterLink>
    </div>
  </nav>

</template>

<style scoped>
nav button {
  visibility: hidden;
  position: absolute;
}
nav a.router-link-exact-active {
  @apply text-primary;
}

nav a.router-link-exact-active:hover {
  @apply text-secondary;
}

nav a:hover {
  @apply text-primary;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  @apply text-secondary;
}

.dropdown a {
  margin-top: 0.5rem;
  white-space: nowrap;
}

@media (max-width: 1024px) {
  nav {
    justify-content: start;
  }
  nav button {
    visibility: visible;
    position: relative;
    margin: 0 0.5rem;
  }
  #menu {
    display: none;
  }
}
</style>