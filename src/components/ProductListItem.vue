<script>
// import ProductModal from '@/components/ProductModal.vue'
export default {
  name: 'ProductListItem',
  // components: { ProductModal },
  props: ['product'],
  data: () => {
    return {
      // shownProduct: null,
    }
  },
  methods: {
    // async showModal() {
    //   this.shownProduct = await this.$Product.getProduct(this.product.id);
    //   document.getElementById(this.product.id).showModal();
    // },
  }
}
</script>

<template>

  <RouterLink :to="'/products/' + product.id" class="card rounded-none w-1/4 min-w-40 m-2">

    <figure>
      <img :src=" product.image ">
    </figure>

    <div class="card-body p-0">
      <h4 class="card-title text-xl font-bold">{{ product.name }}</h4>
      <span v-if="product.business" class="text-xs text-primary">Carfted by {{ product.business.name }}</span>
    </div>


  </RouterLink>

<!--    <div @click="showModal" class="card rounded-none w-1/4 min-w-40 m-2">-->
<!--      <figure>-->
<!--        <img :src=" product.image ">-->
<!--      </figure>-->
<!--      <div class="card-body p-0">-->
<!--        <h4 class="card-title text-xl font-bold">{{ product.name }}</h4>-->
<!--        <span v-if="product.business" class="text-xs text-primary">Carfted by {{ product.business.name }}</span>-->
<!--      </div>-->
<!--    </div>-->
<!--    <ProductModal :product="product" :shown-product="shownProduct"/>-->

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