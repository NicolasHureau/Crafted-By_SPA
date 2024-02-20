<script>
import useProductStore from '../stores/product';
import { mapState, mapActions } from 'pinia';
export default {
  computed: {
    ...mapState(useProductStore, [
      'totalLaptops',
      'pricePerLaptop',
      'totalLaptopPrices'
    ])
  },
  methods: {
    ...mapActions(useProductStore, [
      'addLaptop'
    ])
  }
}
</script>

<template>

    <h1>WELCOME TO THE HOME PAGE</h1>
    <h2>Price Per Laptop: {{ pricePerLaptop }}</h2>
    <h2>Total Laptops: {{ totalLaptops }}</h2>
    <h2>Total Laptop Prices: {{ totalLaptopPrices }}</h2>
    <button @click="addLaptop()">Add Laptop</button>

</template>

<style scoped>

</style>