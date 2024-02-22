<script>
import ProductModal from '@/components/ProductModal.vue'
export default {
  name: 'ProductListItem',
  components: { ProductModal },
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

  <div @click="showModal" class="">
    <h2>{{ product.name }}</h2>
    <img :src=" product.image ">
    <span class="">{{ product.price }} €</span>
  </div>
  <ProductModal :product="product" :shown-product="shownProduct"/>

</template>

<style scoped>
div {
  width : 30%;
}
img {
  min-height: 200px;
  object-fit: cover;
}
</style>