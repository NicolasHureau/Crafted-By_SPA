<script>
export default {
  name: 'UserAddress',
  async created() {
    await this.$User.fetchUserProfile(this.$User.loggedUser.id);
    this.user = this.$User.userProfile;
  },
}
</script>

<template>

  <div>

    <div>
      <div>
        TODO : gerer le multi adresse dans le back
      </div>

      <div >
        <h4>Vous n'avez pas d'adresse enregistré.</h4>
      </div>
    </div>

    <div>
      <h4>Ajouter une nouvelle adresse</h4>
      <form>

      </form>
    </div>

  </div>

</template>

<style scoped>

</style>