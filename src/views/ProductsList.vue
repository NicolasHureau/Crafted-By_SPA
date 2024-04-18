<script>
import ProductListItem from '@/components/ProductListItem.vue'
export default {
  components: { ProductListItem },
  methods: {
    products()
    {
      if (this.$Product.filteredProducts.length > 0)
      {
        return this.$Product.filteredProducts;
      }
      return this.$Product.allProducts;
    }
  },
  async mounted() {
    await this.$Product.fetchProducts();
  },
}
</script>

<template>

  <div v-show="$Product.message" role="alert" class="alert mx-auto w-auto mt-10 rounded-none border-none bg-info">
    <i-ph-info />
    <span>{{ $Product.message }}</span>
  </div>

  <main class="flex flex-wrap justify-around my-10">

    <ProductListItem v-for="product in products()"
                     :product="product"
                     :key="product.id"
    />
  </main>

</template>

<style scoped>

</style>