<script>
export default {
  name: 'ButtonAddToCart',
  props: ['productId'],
  methods: {
    async addToCart() {
      await this.$Product.getProduct(this.productId)
        .then(this.$Cart.addToCart(this.productId))
    }
  }
}
</script>

<template>

  <button @click="addToCart" class="btn bg-black text-info grow">Ajouter</button>

</template>

<style scoped>

</style>