<script setup>

</script>

<template>
  <div>
    <RouterLink to="/instagram"><i-ph-instagram-logo :size="32" alt="Instagram" aria-label="Instagram" /></RouterLink>
    <RouterLink to="/youtube"><i-ph-youtube-logo :size="32" alt="Youtube" aria-label="Youtube" /></RouterLink>
    <RouterLink to="/facebook"><i-ph-facebook-logo :size="32" alt="Facebook" arai-label="Facebook" /></RouterLink>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  flex-direction: row !important;
}
a {
  padding: 1rem;
}
</style>