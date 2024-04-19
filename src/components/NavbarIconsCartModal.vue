<script>

export default {
  name: 'NavbarIconsCartModal',
  data: () => {
    return {
      width: window.innerWidth
    }
  },
  props: {
    cart: Object,
  },
  methods: {
    close() {
      document.getElementById('CartModal').close()
    },
    minusOne(productId) {
      this.$Cart.subOneProduct(productId);
      this.$parent.updateCart();
    },
    plusOne(productId) {
      this.$Cart.addOneProduct(productId);
      this.$parent.updateCart();
    }
  }
}
</script>

<template>

  <dialog id="CartModal" class="modal">

    <div class="modal-box absolute right-0 rounded-none h-full w-9/10">

      <div v-if="$Cart.getCartCount > 0" class="flex flex-col h-full">

        <div class="flex justify-between mb-5 items-center">
          <h3 class="text-2xl text-left">Panier</h3>
          <form method="dialog" v-show=" width < 500 ">
            <button alt="fermer la fenêtre" aria-label="fermer la fenêtre">
              <i-ph-x class="text-md" />
            </button>
          </form>
        </div>

        <div class="flex-grow overflow-auto">
          <div v-for="product in cart.products" :key="product.id">

            <div class="flex">

              <img :src=" product.image " class="object-cover w-1/4">

              <div class="grid text-start flex-grow ms-2">
                <span class="font-bold text-xl">{{ product.name }}</span>
                <span class="text-primary text-xs">color: {{ product.color}}</span>
                <div class="bg-info w-fit">
                  <button type="button" @click="minusOne(product.id)" class="p-2">-</button>
                  <span class="p-2">{{product.quantity}}</span>
                  <button type="button" @click="plusOne(product.id)" class="p-2">+</button>
                </div>
              </div>

              <div>
                <div class="font-bold text-end">€{{ product.price }}</div>
                <button type="button" @click="$Cart.delProductFromCart(product.id) && $parent.updateCart" class="h-full">
                  <i-ph-x class="text-md" />
                </button>
              </div>

            </div>
            <hr class="my-3" />

          </div>
        </div>

        <div>
          <div class="flex justify-between">
            <span>Sous-total</span>
            <span class="font-bold">€{{ cart.subtotal.toFixed(2) }}</span>
          </div>
          <hr class="my-3" />
          <div class="flex justify-between text-xl">
            <span>Total</span>
            <span class="font-bold">€{{ cart.total.toFixed(2) }}</span>
          </div>

          <div>
            <RouterLink to="/Invoice" @click="close" type="button" class="btn bg-black text-info w-full rounded-md hover:bg-primary my-5">Payer</RouterLink>
            <RouterLink to="/Cart" @click="close" class="link my-10">Voir le panier</RouterLink>
          </div>
        </div>

      </div>

      <div v-else class="flex items-center justify-center h-full">
        <p class="font-bold text-2xl">Votre panier est vide.</p>
        <form method="dialog" class="absolute top-3 right-3">
          <button>
            <i-ph-x class="text-md" />
          </button>
        </form>
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
  @media (min-width: 500px) {
    max-width: 400px;
  }
}

</style>