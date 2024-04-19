<script>

export default {
  name: 'UserInvoicesList',
  async mounted() {
    await this.$Cart.fetchUserInvoices(this.$User.loggedUser.id);
  }
}
</script>

<template>

  <div>
    <pre>
      {{ $Cart.userInvoices}}
    </pre>
  </div>

</template>

<style scoped>

</style>