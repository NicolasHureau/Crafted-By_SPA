<script>
import BusinessListItem from '@/components/BusinessListItem.vue'
export default {
  components: { BusinessListItem },
  mounted() {
    this.$Business.fetchBusinesses();
  }
}
</script>

<template>

  <main class="">
    <BusinessListItem v-for="business in $Business.allBusinesses"
                      :business="business"
                      :key="business.id"
                      />
  </main>

</template>

<style scoped>

</style>