<script>
import ButtonAddToCart from '@/components/ButtonAddToCart.vue'

export default {
  name: 'ProductModal',
  components: { ButtonAddToCart },
  props: ['product', 'shownProduct'],
}
</script>

<template>

  <dialog :id="product.id" class="modal">
    <div class="modal-box">
      <div v-for="(value, key) in shownProduct">
        <p><span>{{ key }} : </span><span>{{ value}}</span></p>
      </div>
      <ButtonAddToCart :product-id="product.id" />
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>

</template>

<style scoped>

</style>