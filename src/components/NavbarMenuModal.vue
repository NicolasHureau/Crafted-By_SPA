<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'MenuModal',
  components: { RouterLink },
  data: () => {
    return {
      width: window.innerWidth
    }
  },
  methods: {
    openUserRegisterModal() {

      document.getElementById("UserLoginModal").close();
      document.getElementById("UserRegisterModal").showModal();
    },
    openUserLoginModal() {

      document.getElementById("UserRegisterModal").close();
      document.getElementById("UserLoginModal").showModal();
    },
    closeMenuModal() {
      document.getElementById("MenuModal").close();
    }
  }
}
</script>

<template>

  <dialog id="MenuModal" class="modal">

    <form method="dialog" class="modal-box absolute left-0 rounded-none h-full w-9/10 flex flex-col">

      <div class="flex justify-between mb-5 items-center">
        <RouterLink to="/" @click="closeMenuModal">
          <img alt="Crafted By logo" class="logo min-w-40" src="@/assets/logo.svg" width="200" height="250" />
        </RouterLink>
        <button>
          <i-ph-x class="text-md" />
        </button>
      </div>

      <div>
        <input class="" placeholder="Recherche">
      </div>

      <div class="flex flex-col flex-grow text-start">
        <RouterLink @click="closeMenuModal" class="my-3" to="/">Accueil</RouterLink>
        <hr>
        <RouterLink @click="closeMenuModal" class="my-3" to="/business">Artisans</RouterLink>
        <hr>
        <RouterLink @click="closeMenuModal" class="my-3" to="/products">Articles</RouterLink>
        <hr>
        <RouterLink @click="closeMenuModal" class="my-3" to="/about">Contactez-nous</RouterLink>
        <hr>
      </div>

      <button @click="openUserRegisterModal" class="btn bg-black text-info rounded-md hover:bg-primary w-full">S'enregistrer</button>
    </form>

    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>

  </dialog>

</template>

<style scoped>

.modal-box {
  max-height: 100vh;
}

</style>