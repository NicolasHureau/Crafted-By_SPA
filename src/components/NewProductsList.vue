<script>
import ProductListItem from '@/components/ProductListItem.vue'

export default {
  name: 'NewProductsList',
  components: { ProductListItem },
  async mounted() {
    await this.$Product.fetchProducts();
  }
}
</script>

<template>

  <div>
    <h3 class="text-3xl font-bold">NOUVEAUTES</h3>
<!--    <div>-->
<!--      <ProductListItem />-->
<!--    </div>-->
  </div>

<!--  <pre>-->
<!--    {{$Product.allProducts}}-->
<!--  </pre>-->

</template>

<style scoped>

</style>