<script>
import ProductListItem from '@/components/ProductListItem.vue'
export default {
  components: { ProductListItem },
  async mounted() {
    await this.$Product.fetchProducts();
  }
}
</script>

<template>

  <div class="flex flex-wrap justify-center gap-10 p-10">
    <ProductListItem v-for="product in $Product.allProducts"
                     :product="product"
                     :key="product.id"
    />
  </div>

</template>

<style scoped>

</style>