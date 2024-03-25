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

  <div class="item">
    <div @click="showModal" class="flex flex-col">
      <img :src=" product.image ">
      <span class="text-xl font-bold">{{ product.name }}</span>
      <span class="text-xs font-bold">€ {{ product.price }}</span>
    </div>
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