<script>
import useProductStore from '@/stores/product.js'
import { mapActions, mapState } from 'pinia';

export default {
  data: () => {
    return {

    }
  },
  computed: {
    ...mapState(useProductStore, [
      'products'
    ])
  },
  methods: {
    ...mapActions(useProductStore, [
      'fetchProducts'
    ]),
  },
  beforeCreate() {
    this.fetchProducts();
  }
}
</script>

<template>

  <div v-for="product in products" v-bind:key="product.id">
    <p>{{ product }}</p>
  </div>

</template>

<style scoped>

</style>