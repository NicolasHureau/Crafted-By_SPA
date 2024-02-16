<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <p class="bg-black text-center text-info w-full">
    {{ msg }}
  </p>
</template>

<style scoped>
</style>