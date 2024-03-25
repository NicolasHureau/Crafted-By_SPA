<script>

export default {
  name: 'UserLoginModal',
  data: () => {
    return {
      email: '',
      password: '',
      rememberMe: false,
    }
  },
  methods: {
    async submit() {
      await this.$User.login(this);
    },
    openUserRegisterModal() {
      this.$parent.openUserRegisterModal();
    }
  },
}
</script>

<template>

  <dialog id="UserLoginModal" class="modal">
    <div class="modal-box rounded flex flex-col sm:flex-row w-full p-0">
      <figure class="flex justify-center basis-1/2">
        <img class="object-cover" src="../assets/img.png">
      </figure>
      <div class="m-10 sm:order-first basis-1/2">
        <h2 class="text-4xl font-bold">Se connecter</h2>
        <form class="form-control" @submit.prevent="submit">
          <p class="my-5 flex flex-wrap">
            <span>Pas encore de compte?</span>
            <a class="px-3 text-success font-bold" href="#" v-on:click="openUserRegisterModal">S'enregistrer</a>
          </p>
          <div>
            <!--          <label for="email" class="control-label sr-only">Email</label>-->
            <input v-model="email" type="email" class="form-control border-b p-3 w-full" id="email" placeholder="Votre email" />
          </div>
          <div>
            <!--          <label for="password" class="control-label sr-only">Mot de passe</label>-->
            <input v-model="password" type="password" class="form-control border-b p-3 w-full" id="password" placeholder="Mot de passe" />
          </div>
          <div class="form-control">
            <label class="label cursor-pointer w-full mt-5">
              <input v-model="remember" type="checkbox" class="mr-3 border-secondary size-8" value="confidenciality">
              <span class="label-text">Se souvenir de moi</span>
            </label>
          </div>
          <div class="modal-action">
            <button type="submit" class="btn bg-black text-info w-full rounded-md hover:bg-primary">SE CONNECTER</button>
          </div>
        </form>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>

</template>

<style scoped>

@media (min-width: 640px) {
  .modal-box {
    max-width: 80%;
  }
}
@media (min-width: 1024px) {
  .modal-box {
    max-width: 900px;
  }
}

</style>