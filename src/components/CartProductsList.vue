<script setup>

</script>

<template>

  <table>
    <thead>
      <tr>
        <th>Articles</th>
        <th>Quantité</th>
        <th>Prix</th>
        <th>Sous-total</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="product in $Cart.currentCart" :key="product.id">
        <th></th>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>

</template>

<style scoped>

</style>