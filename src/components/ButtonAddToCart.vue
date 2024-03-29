<script>
export default {
  name: 'ButtonAddToCart',
  props: [
    'productId',
    'quantity'
  ],
  methods: {
    async addToCart() {
      await this.$Product.getProduct(this.productId)
        .then(this.$Cart.addToCart(this.productId, this.quantity));
      this.$parent.quantity = this.$Cart.currentCart.find((product) => product.id === this.productId).quantity
    }
  }
}
</script>

<template>

  <button @click="addToCart" class="btn bg-black text-info rounded">AJOUTER AU PANIER</button>

</template>

<style scoped>

</style>