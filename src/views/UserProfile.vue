<script>
import UserDetails from '@/components/UserDetails.vue'
import UserInvoicesList from '@/components/UserInvoicesList.vue'

export default {
  name: 'UserProfile',
  components: { UserDetails, UserInvoicesList }
}
</script>

<template>

  <UserDetails />

  <UserInvoicesList />

</template>

<style scoped>

</style>