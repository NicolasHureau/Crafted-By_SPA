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
      disabled: [false, false, false, false]
    }
  },
  methods: {
    async submit() {
      await this.$User.register(this)
      if (this.$User.token !== '') {
        document.getElementById('UserRegisterModal').close()
      }
    },
    openUserLoginModal() {
      this.$parent.openUserLoginModal();
    },
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.$refs.email.classList.remove('text-error');
        this.disabled[0] = true;
      } else {
        this.$refs.email.classList.add('text-error');
        this.disabled[0] = false;
      }
    },
    validatePassword(value) {
      if (value.length < 8) {
        this.$refs.password.classList.add('text-error');
        this.disabled[1] = false;
      } else {
        this.$refs.password.classList.remove('text-error');
        this.disabled[1] = true;
      }
    },
    validatePasswordConfirmation(value) {
      if (value !== this.password) {
        this.$refs.passwordConfirmation.classList.add('text-error');
        this.disabled[2] = false;
      } else {
        this.$refs.passwordConfirmation.classList.remove('text-error');
        this.disabled[2] = true;
      }
    }
  },
  watch: {
    email(value) {
      this.validateEmail(value);
    },
    password(value) {
      this.validatePassword(value);
    },
    password_confirmation(value) {
      this.validatePasswordConfirmation(value);
    },
    confidentiality(value) {
      this.disabled[3] = value;
    }
  }
}
</script>

<template>

  <dialog id="UserRegisterModal" class="modal">
    <div class="modal-box rounded flex flex-col sm:flex-row w-full p-0">

      <figure class="flex justify-center basis-1/2">
        <img class="object-cover" src="../assets/img.png" alt="image d'une table en bois et d'une chaise en bois" aria-label="image d'une table en bois et d'une chaise en bois">
        <form method="dialog" class="absolute top-3 right-3">
          <button alt="boutton pour fermer la modal d'enregistrement" aria-label="boutton pour fermer la modal d'enregistrement">
            <i-ph-x class="text-md" />
          </button>
        </form>
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
            <input v-model="email" ref="email" type="email" class="form-control border-b p-3 w-full" id="email" placeholder="Votre email" alt="champ d'email" aria-label="champ d'email" />
          </div>
          <div>
            <!--          <label for="password" class="control-label sr-only">Mot de passe</label>-->
            <input v-model="password" ref="password" type="password" class="form-control border-b p-3 w-full" id="password" placeholder="Mot de passe" alt="champ de mot de passe" aria-label="champ de mot de passe" />
          </div>
          <div>
            <!--          <label for="password_confirmation" class="control-label sr-only">Mot de passe</label>-->
            <input v-model="password_confirmation" ref="passwordConfirmation" type="password" class="form-control border-b p-3 w-full" id="password_confirmation" placeholder="Confirmez le mot de passe" alt="champ de confirmation d'email" aria-label="champ de confirmation d'email" />
          </div>
          <div class="form-control">
            <label class="label cursor-pointer w-full mt-5">
              <input v-model="confidentiality" ref="confidentiality" type="checkbox" class="mr-3 border-secondary size-8" value="confidenciality">
              <span class="label-text">J'accepte la politique de confidencialité et les conditions d'utilisation.</span>
            </label>
          </div>
          <div class="modal-action">
            <button type="submit" class="btn bg-black text-info w-full rounded-md hover:bg-primary" :disabled="!disabled.every(i => i === true)">S'ENREGISTRER</button>
          </div>
        </form>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button alt="cliquez hors de la fenêtre pour fermer" aria-label="cliquez hors de la fenêtre pour fermer">close</button>
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