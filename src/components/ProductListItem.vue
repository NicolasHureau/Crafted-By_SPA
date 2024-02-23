<script>
import ProductModal from '@/components/ProductModal.vue'
import ButtonAddToCart from '@/components/ButtonAddToCart.vue'
export default {
  name: 'ProductListItem',
  components: { ButtonAddToCart, ProductModal },
  props: ['product'],
  data: () => {
    return {
      shownProduct: null,
    }
  },
  methods: {
    async showModal() {
      this.shownProduct = await this.$Product.getProduct(this.product.id);
      document.getElementById(this.product.id).showModal();
    }
  }
}
</script>

<template>

  <div class="item">
    <div @click="showModal">
      <h2>{{ product.name }}</h2>
      <img :src=" product.image ">
    </div>
    <span class="">{{ product.price }} €</span>
    <ButtonAddToCart :product-id="product.id" />
  </div>
  <ProductModal :product="product" :shown-product="shownProduct"/>

</template>

<style scoped>
.item {
  width : 30%;
}
img {
  min-height: 200px;
  object-fit: cover;
}
</style>