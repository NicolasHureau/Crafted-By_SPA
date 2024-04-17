<script>
import ProductListItem from '@/components/ProductListItem.vue'
export default {
  components: { ProductListItem },
  methods: {
    products()
    {
      if (this.$Product.filteredProducts.length > 0)
      {
        return this.$Product.filteredProducts
      }
      return this.$Product.allProducts
    }
  },
  async mounted() {
    await this.$Product.fetchProducts();
  }
}
</script>

<template>

  <main class="flex flex-wrap justify-around my-10">
    <ProductListItem v-for="product in products()"
                     :product="product"
                     :key="product.id"
    />
  </main>

</template>

<style scoped>

</style>