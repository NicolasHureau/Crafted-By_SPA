<script>
import CartSummary from '@/components/CartSummary.vue'
import CartProductsList from '@/components/CartProductsList.vue'

export default {
  name: 'CartView',
  components: { CartProductsList, CartSummary }
}
</script>

<template>

  <div class="flex ">
    <CartProductsList />

    <CartSummary />
  </div>


  <pre>
    {{ $Cart.currentCart }}
  </pre>

</template>

<style scoped>

</style>