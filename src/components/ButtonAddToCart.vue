<script>
export default {
  name: 'ButtonAddToCart',
  props: ['productId'],
  methods: {
    async addToCart() {
      await this.$Product.getProduct(this.productId)
        .then(this.$Cart.addToCart(this.productId))
        // .then(this.$Cart.updateDropdownCart())
    }
  }
}
</script>

<template>

  <button @click="addToCart">Ajouter</button>

</template>

<style scoped>

</style>