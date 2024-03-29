<script>
import BusinessListItem from '@/components/BusinessListItem.vue'
export default {
  components: { BusinessListItem },
  async mounted() {
    await this.$Business.fetchBusinesses();
  }
}
</script>

<template>

  <main class="w-full p-10">
    <BusinessListItem v-for="business in $Business.allBusinesses"
                      :business="business"
                      :key="business.id"
                      />
  </main>

</template>

<style scoped>

</style>