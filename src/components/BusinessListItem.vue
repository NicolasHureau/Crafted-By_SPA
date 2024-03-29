<script>
export default {
  name: 'BusinessListItem',
  props: ['business'],
  data: () => {
    return {
      productCount: 0,
    }
  },
  async mounted() {
    if(this.$Product.allProducts.length === 0) {
      await this.$Product.fetchProducts();
    }
    this.productCount = this.$Product.allProducts.filter((product) => product.business.id === this.business.id).length;
  }
}
</script>

<template>

  <RouterLink :to="'/business/' + business.id" class="card card-side bg-info rounded h-20 my-3">

    <figure class="w-40">
      <img :src="business.logo" />
    </figure>

    <div class="card-body p-3">
      <h3 class="card-title">{{ business.name }}
        <a href="#" class="text-xs text-primary underline absolute right-3">
          {{ this.productCount }} articles
        </a>
      </h3>
      <p>{{ business.email }}</p>
    </div>

  </RouterLink>

</template>

<style scoped>

</style>