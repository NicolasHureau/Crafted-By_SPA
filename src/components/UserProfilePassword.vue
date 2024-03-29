<script>
import router from '@/router/index.js'

export default {
  name: 'UserProfilePassword',
  data: () => {
    return {
      oldPassword: '',
      password: '',
      password_confirmation: '',
      notSamePass: false,
      allowUpdate: false
    }
  },
  methods: {
    router() {
      return router
    },
    async submit() {
      await this.$User.updatePassword(this)
    }
  },
  async created() {
    await this.$User.fetchUserProfile(this.$User.loggedUser.id);
    this.user = this.$User.userProfile;
  },
  watch: {
    'password_confirmation'() {
      if (this.password === this.password_confirmation) {
        this.notSamePass = false;
        this.allowUpdate = true;
      } else {
        this.notSamePass = true;
      }
    }
  }
}
</script>

<template>

  <form @submit.prevent="submit" class="form-control flex flex-col gap-7 my-20">

    <div class="form-control">
      <label for="oldPassword" class="label text-xs text-primary">Votre mot de passe</label>
      <div  class="input input-bordered input-info rounded flex items-center gap-2">
        <input type="password" name="oldPassword" id="oldPassword" v-model="oldPassword" class="grow">
      </div>
    </div>

    <div class="form-control">
      <label for="password" class="label text-xs text-primary">Nouveau mot de passe</label>
      <div  class="input input-bordered input-info rounded flex items-center gap-2">
        <input type="password" name="password" id="password" v-model="password" class="grow" >
      </div>
    </div>

    <div class="form-control">
      <label for="password_confirmation" class="label text-xs text-primary">Confirmez le nouveau mot de passe</label>
      <div  class="input input-bordered input-info rounded flex items-center gap-2">
        <input type="password" name="password_confirmation" id="password_confirmation" v-model="password_confirmation" class="grow" >
      </div>
      <span v-show="notSamePass" class="mt-2 text-xs text-error">Le mot de passe doit être le même.</span>
    </div>

    <div class="inline-flex rounded-md my-7 ">
      <RouterLink to="/user/profile" type="button" class="btn bg-black text-info rounded-e hover:bg-primary">
        <i-ph-arrow-fat-left class="" />
      </RouterLink>
      <button id="update" type="submit" class="btn grow bg-black text-info rounded-s hover:bg-primary" :disabled="!this.allowUpdate">METTRE A JOUR</button>
    </div>

  </form>

  <button type="button" @click="router.back" class="btn btn-ghost absolute right-20 bottom-20">
    <i-ph-arrow-fat-left />
  </button>

</template>

<style scoped>

</style>