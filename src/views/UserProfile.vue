<script>
import UserDetails from '@/components/UserProfile.vue'
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