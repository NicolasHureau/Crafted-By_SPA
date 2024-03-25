<script>

export default {

}
</script>

<template>
  <div class="col-lg-4">
    <div class="card">
      <div class="header">
        <p class="lead mb-5">Créer un compte</p>
      </div>
      <div class="body">
        <form class="form-auth-small" @submit.prevent="submitting === false && registerUser()">

          <div class="form-group p-2">
            <label for="lastname" class="control-label sr-only">Nom</label>
            <input v-model="lastname" class="form-control" id="lastname" placeholder="Nom" />
          </div>
          <div class="form-group p-2">
            <label for="firstname" class="control-label sr-only">Prénom</label>
            <input v-model="firstname" class="form-control" id="firstname" placeholder="Prénom" />
          </div>

          <div class="form-group p-2">
            <label for="email" class="control-label sr-only">Email</label>
            <input v-model="email" type="email" class="form-control" id="email" placeholder="Your email" />
          </div>
          <div class="form-group p-2">
            <label for="password" class="control-label sr-only">Mot de passe</label>
            <input v-model="password" type="password" class="form-control" id="password" placeholder="Mot de passe" />
          </div>
          <div class="form-group p-2">
            <label for="password_confirmation" class="control-label sr-only">Mot de passe</label>
            <input v-model="password_confirmation" type="password" class="form-control" id="password_confirmation" placeholder="Mot de passe" />
          </div>

          <div class="form-group p-2">
            <label for="address" class="control-label sr-only">Adresse</label>
            <input v-model="address" class="form-control" id="address" placeholder="Adresse" />
          </div>
          <div class="form-group p-2">
            <label for="zip_code" class="control-label sr-only">Code postal</label>
            <input v-model="zip_code" class="form-control" id="zip_code" placeholder="Code postal" />
          </div>
          <div class="form-group p-2">
            <label for="city" class="control-label sr-only">Ville</label>
            <input v-model="city" class="form-control" id="city" placeholder="Ville" />
          </div>

          <button type="submit" class="btn btn-primary btn-block mt-5">S'enregistrer</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>