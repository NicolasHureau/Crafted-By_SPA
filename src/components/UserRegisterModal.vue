<script>

export default {
  name: 'UserRegisterModal',
  data: () => {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password_confirmation: '',
      confidentiality: false,
    }
  },
  methods: {
    async submit() {
      await this.$User.register(this)
    },
    openUserLoginModal() {
      this.$parent.openUserLoginModal();
    }
  },
}
</script>

<template>

  <dialog id="UserRegisterModal" class="modal">
    <div class="modal-box rounded flex flex-col sm:flex-row w-full p-0">
      <figure class="flex justify-center basis-1/2">
        <img class="object-cover" src="../assets/img.png">
      </figure>
      <div class="m-10 sm:order-first basis-1/2">
        <h2 class="text-4xl font-bold">S'enregistrer</h2>
        <form class="form-control" @submit.prevent="submit">
          <p class="my-5 flex flex-wrap">
            <span>Déjà un compte?</span>
            <a class="px-3 text-success font-bold" href="#" v-on:click="openUserLoginModal">Se connecter</a>
          </p>
          <div>
            <!--          <label for="firstname" class="control-label sr-only">Prénom</label>-->
            <input v-model="firstname" class="form-control border-b p-3 w-full" id="firstname" placeholder="Votre prénom" />
          </div>
          <div>
            <!--          <label for="lastname" class="control-label sr-only">Nom</label>-->
            <input v-model="lastname" class="form-control border-b p-3 w-full" id="lastname" placeholder="Votre nom" />
          </div>
          <div>
            <!--          <label for="email" class="control-label sr-only">Email</label>-->
            <input v-model="email" type="email" class="form-control border-b p-3 w-full" id="email" placeholder="Votre email" />
          </div>
          <div>
            <!--          <label for="password" class="control-label sr-only">Mot de passe</label>-->
            <input v-model="password" type="password" class="form-control border-b p-3 w-full" id="password" placeholder="Mot de passe" />
          </div>
          <div>
            <!--          <label for="password_confirmation" class="control-label sr-only">Mot de passe</label>-->
            <input v-model="password_confirmation" type="password" class="form-control border-b p-3 w-full" id="password_confirmation" placeholder="Confirmez le mot de passe" />
          </div>
          <div class="form-control">
            <label class="label cursor-pointer w-full mt-5">
              <input v-model="confidentiality" type="checkbox" class="mr-3 border-secondary size-8" value="confidenciality">
              <span class="label-text">J'accepte la politique de confidencialité et les conditions d'utilisation.</span>
            </label>
          </div>
          <div class="modal-action">
            <button type="submit" class="btn bg-black text-info w-full rounded-md hover:bg-primary">S'ENREGISTRER</button>
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