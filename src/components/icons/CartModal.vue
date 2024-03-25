<script>

export default {
  name: 'CartModal',
  props: {
    cart: Object,
  },
}
</script>

<template>

  <dialog id="CartModal" class="modal">

    <div class="modal-box absolute right-0 rounded h-full w-1/3">

      <div v-if="cart.total > 0">

        <div v-for="product in cart.products" :key="product[0]" class="flex justify-between">
          <span>{{ product[1] }}</span>
          <div>
            <span>{{ product[2] }}</span>
            <span> x {{ product[3] }}</span>
          </div>
        </div>

        <span class="text-primary text-end">Total : {{ cart.total.toFixed(2) }}</span>

        <div>
          <RouterLink to="/cart" type="button" class="btn btn-primary btn-block">Voir le panier</RouterLink>
        </div>

      </div>

      <div v-else class="flex items-center justify-center h-full">
        <p class="font-bold text-2xl">Votre panier est vide.</p>
      </div>

    </div>

    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>

  </dialog>

</template>

<style scoped>

.modal-box {
  max-height: 100vh;
}

</style>