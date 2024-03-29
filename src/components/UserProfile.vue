<script>
export default {
  name: 'UserProfile',
  data: () => {
    return {
      user: {},
      isNeedToUpdate: false
    }
  },
  methods: {
    enableInput(elementId) {
      document.getElementById(elementId).removeAttribute('disabled')
    },
    allowUpdate() {
      this.isNeedToUpdate = true
    },
    async submit() {
      await this.$User.updateUserprofile(this.user);
    }
  },
  async created() {
    await this.$User.fetchUserProfile(this.$User.loggedUser.id);
    this.user = this.$User.userProfile;
  },
  watch: {
    'user.firstname'(newValue, oldValue) {
      if (oldValue && newValue !== oldValue)
        this.allowUpdate()
    },
    'user.lastname'(newValue, oldValue) {
      if (oldValue && newValue !== oldValue)
        this.allowUpdate()
    },
    'user.email'(newValue, oldValue) {
      if (oldValue && newValue !== oldValue)
        this.allowUpdate()
    }
  }
}
</script>

<template>

  <form @submit.prevent="submit" class="form-control flex flex-col gap-7 my-20">

    <div class="form-control">
      <label for="firstname" class="label text-xs text-primary">Votre prénom</label>
      <div  class="input input-bordered input-info rounded flex items-center gap-2">
        <input type="text" name="firstname" id="firstname" v-model="user.firstname"  placeholder="Prénom" class="grow" disabled>
        <i-ph-gear @click="enableInput('firstname')" class="ease-in"/>
      </div>
    </div>

    <div class="form-control">
      <label for="lastname" class="label text-xs text-primary">Votre nom</label>
      <div  class="input input-bordered input-info rounded flex items-center gap-2">
        <input type="text" name="lastname" id="lastname" v-model="user.lastname" @change="allowUpdate" placeholder="Nom" class="grow" disabled>
        <i-ph-gear @click="enableInput('lastname')"/>
      </div>
    </div>

    <div class="form-control">
      <label for="email" class="label text-xs text-primary">Votre email</label>
      <div  class="input input-bordered input-info rounded flex items-center gap-2">
        <input type="text" name="email" id="email" v-model="user.email" @change="allowUpdate" placeholder="email" class="grow" disabled>
        <i-ph-gear @click="enableInput('email')"/>
      </div>
    </div>

    <div class="text-center">
      <RouterLink to="/user/password" class="text-primary underline">Changer de mot de passe</RouterLink>
    </div>

    <div>
      <button id="update" type="submit" class="btn bg-black text-info w-full rounded-md hover:bg-primary my-7" :disabled="!this.isNeedToUpdate">METTRE A JOUR</button>
    </div>

  </form>

<!--<pre>-->
<!--  {{ this.user}}-->
<!--</pre>-->

</template>

<style scoped>

</style>