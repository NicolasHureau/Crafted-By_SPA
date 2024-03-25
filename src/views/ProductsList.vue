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

  <main class="flex flex-wrap justify-center gap-5 ">
    <ProductListItem v-for="product in $Product.allProducts"
                     :product="product"
                     :key="product.id"
    />
  </main>

</template>

<style scoped>

</style>