<script>
import ButtonAddToCart from '@/components/ButtonAddToCart.vue'

export default {
  name: 'ProductDetail',
  components: { ButtonAddToCart },
  data: () => {
    return {
      product: {},
      quantity: 1
    }
  },
  methods: {
    addMultiplicator() {
      const sizes = document.getElementById('sizes');
      const h = document.getElementById('height');
      const w = document.getElementById('width');
      const d = document.getElementById('depth');

      if (h && w) {
        sizes.insertBefore(document.createTextNode('x'),w);
      }

      if (h && d || w && d) {
        sizes.insertBefore(document.createTextNode('x'),d);
      }
    },
    plusOne(){
      if (this.quantity < this.product.stock) {
        this.quantity ++
      }
    },
    minusOne(){
      if (this.quantity > 1) {
        this.quantity --
      }
    }
  },
  async created() {
    this.product = await this.$Product.getProduct(this.$route.params.id);
    this.addMultiplicator();
    let cartProduct = this.$Cart.currentCart.find((product) => product.id === this.product.id);
    if (cartProduct) {
      this.quantity = cartProduct.quantity
    }
  }
}
</script>

<template>

  <main class="mx-5 md:mx-10">

    <div class="md:grid md:grid-cols-2 gap-7 my-5">

      <figure class="">
        <img :src="this.product.image" class="h-full object-cover" alt="image du produit">
      </figure>

      <div class="flex flex-col gap-3">

        <h3 class="text-4xl font-bold my-5">{{ this.product.name }}</h3>
        <p class="text-wrap text-primary">{{ this.product.description }}</p>
        <p class="text-2xl">€{{ this.product.price }}</p>

        <hr>

        <div>
          <h4 class="font-bold">Dimensions</h4>
          <p id="sizes">
            <span id="height" v-if="this.product.height !== null">{{ this.product.height }}</span>
            <span id="width" v-if="this.product.width !== null">{{ this.product.width }}</span>
            <span id="depth" v-if="this.product.depth !== null">{{ this.product.depth }}</span>
          </p>
        </div>

        <div>
          <h4 class="flex items-center">Choisissez une couleur <i-ph-caret-right class="size-4" /></h4>
          <p class="font-bold">{{ this.product.color }}</p>
          <div>
            Choix de couleur
          </div>
        </div>

        <div class="flex gap-3 my-3">
          <div class="bg-info rounded w-fit">
            <button type="button" @click="this.minusOne" class="p-2">-</button>
            <span class="p-2">{{this.quantity}}</span>
            <button type="button" @click="this.plusOne" class="p-2">+</button>
          </div>
          <button type="button" class="btn grow rounded p-2 min-h-10 h-10"><i-ph-heart /> LISTE DE SOUHAITS</button>
        </div>

        <ButtonAddToCart :product-id="this.product.id" :quantity="this.quantity"/>

        <hr>

        <p>
          <span class="text-primary">CATEGORY : </span>
          <span>{{ this.product.category}}</span>
        </p>
      </div>

    </div>

    <div>
      Images?
    </div>

    <div>
      Avis?
    </div>

<!--    <pre>-->
<!--      {{ this.product }}-->
<!--    </pre>-->

  </main>

</template>

<style scoped>

</style>
