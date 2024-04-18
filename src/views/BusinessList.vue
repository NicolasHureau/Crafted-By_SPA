<script>
import BusinessListItem from '@/components/BusinessListItem.vue'
export default {
  components: { BusinessListItem },
  methods: {
    businesses()
    {
      if (this.$Business.filteredBusinesses.length > 0)
      {
        return this.$Business.filteredBusinesses;
      }
      return this.$Business.allBusinesses;
    }
  },
  async mounted() {
    await this.$Business.fetchBusinesses();
  }
}
</script>

<template>

  <div v-show="$Business.message" role="alert" class="alert mx-auto w-auto mt-10 rounded-none border-none bg-info">
    <i-ph-info />
    <span>{{ $Business.message }}</span>
  </div>

  <main class="w-full p-10">

    <BusinessListItem v-for="business in businesses()"
                      :business="business"
                      :key="business.id"
                      />

  </main>

</template>

<style scoped>

</style>