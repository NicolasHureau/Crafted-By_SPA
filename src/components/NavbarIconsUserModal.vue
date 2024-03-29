<script>

export default {
  name: 'NavbarIconsUserModal',
  methods: {
    closeUserModal() {
      document.getElementById("UserModal").close();
    }
  }
}
</script>

<template>

  <dialog id="UserModal" class="modal">

    <form method="dialog" class="modal-box absolute right-0 rounded-none h-full w-9/10 flex flex-col">

      <div class="flex justify-between mb-5 items-center">
        <h3 class="text-2xl">Bonjour {{$User.firstname}}</h3>
        <button>
          <i-ph-x class="text-md" />
        </button>
      </div>

      <div class="flex flex-col flex-grow text-start gap-3">
        <RouterLink @click="closeUserModal" to="/user/profile">Modifier les informations personnelles</RouterLink>
        <hr>
        <RouterLink @click="closeUserModal" to="/user/address">Modifier/Ajouter une adresse</RouterLink>
        <hr>
        <RouterLink @click="closeUserModal" to="/user/invoices">Commandes</RouterLink>
        <hr>
        <RouterLink @click="closeUserModal" to="/user/favorite">Favorits</RouterLink>
        <hr>
        <div v-if="$User.loggedUser.role.includes('owner')">
          <RouterLink @click="closeUserModal" to="/user/business">Votre compte Artisan</RouterLink>
        </div>
        <div v-else>
          <RouterLink @click="closeUserModal" to="/user/new_business">Créer un compte Artisan</RouterLink>
        </div>
        <hr>
      </div>

      <button @click="$User.logout" class="btn bg-black text-info rounded-md hover:bg-primary w-full">Se déconnecter</button>

    </form>

    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>

  </dialog>

</template>

<style scoped>

.modal-box {
  max-height: 100vh;
  @media (min-width: 500px) {
    max-width: 400px;
  }
}

</style>