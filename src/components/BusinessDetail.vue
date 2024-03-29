<script>
import ProductListItem from '@/components/ProductListItem.vue'

export default {
  name: 'BusinessDetail',
  components: { ProductListItem },
  data: () => {
    return {
      business: {},
    }
  },
  async created() {
    this.business = await this.$Business.getBusiness(this.$route.params.id);
  },
}
</script>

<template>

  <main class="mx-5">

    <div class="flex my-5">

      <figure class="size-1/2">
        <img :src=" this.business.logo " alt="logo" />
      </figure>

      <div class="flex flex-col ms-10">

        <h3 class="text-4xl font-bold my-5">{{ this.business.name }}</h3>
        <p class="ps-5">{{ this.business.email}}</p>

        <div class="flex h-full items-center">
          <p class="text-error text-2xl font-bold me-3">BY</p>
          <div v-for="owner in this.business.owners" :key="owner.id" class="flex flex-col">
            <span>{{ owner.firstname }} {{ owner.lastname }}</span>
          </div>
        </div>

      </div>

    </div>

    <div class="flex justify-center bg-info">
      <span v-for="speciality in this.business.specialities" :key="speciality.id" class="mx-3">{{ speciality.name }}</span>
    </div>

    <div class="m-5">
      <h4 class="text-primary font-bold ps-5">Description :</h4>
      <p>{{ this.business.description}}</p>
    </div>

    <div class="m-5">
      <h4 class="text-primary font-bold ps-5">Histoire :</h4>
      <p>{{ this.business.history}}</p>
    </div>

    <div class="card bg-info rounded-none mx-20 my-5">
      <div class="card-body">
        <h4 class="text-primary font-bold ps-5">Adresse :</h4>
        <p>{{ this.business.address }}</p>
        <p>{{ this.business.zip_code }} {{ this.business.city }}</p>
      </div>
    </div>

    <div class="m-5">
      <h4 class="text-primary font-bold ps-5">Articles proposé :</h4>
      <div class="flex flex-wrap justify-around gap-5">
        <ProductListItem v-for="product in this.business.products"
                         :product="product"
                         :key="product.id" />
      </div>
    </div>

  </main>

</template>

<style scoped>

</style>