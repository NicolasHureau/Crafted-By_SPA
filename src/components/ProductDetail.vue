<script>
import useProductStore from '@/stores/productStore.js'
import { mapActions, mapState } from 'pinia'
export default {
  data: () => {
    return {
      product: this.getProduct(this.productId)
    }
  },
  props: ['productId'],
  computed: {
    ...mapState(useProductStore, [
      'consultedProducts'
    ])
  },
  methods: {
    ...mapActions(useProductStore, [
      'getProduct'
    ])
  }
}
</script>

<template>

  <div>
    {{ product }}
  </div>

</template>

<style scoped>

</style>
