<script>
export default {
  name: 'UserDetails',
  async mounted() {
    await this.$User.fetchUserDetails(this.$User.loggedUser.id);
  }
}
</script>

<template>

  <div v-for="(value, key) in $User.userDetails">
    <p><span>{{ key }} : </span>{{ value }}</p>
  </div>

</template>

<style scoped>

</style>