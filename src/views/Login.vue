<script>
// import axios from 'axios';
// import useApiStore from '../stores/api';
import api from '../services/api.js';
import useUserStore from '../stores/user';
import { mapActions, mapState } from 'pinia';

export default {
  data: () => {
    return {
      email: '',
      password: '',
      submitting: false
    }
  },
  computed: {
    // ...mapState(useApiStore, [
    //   'API_URL',
    // ]),
    ...mapState(useUserStore, [
      'token',
      // 'userIsAuth'
    ])
  },
  watch: {
    userIsAuth() {
      /*
          By default the userIsAuth value is false.
          On successful registration, after the storeLoggedInUser
          method is called, the userIsAuth value is
          set to true and this watch property is invoked.
          The code below will then run.
      */
      this.$router.push('/');
    }
  },
  methods: {
    ...mapActions(useUserStore, [
      'storeLoggedInUser'
    ]),
    loginUser() {
      const _this = this;
      _this.submitting = true;
      // axios.post(`${_this.API_URL}login`, {
      api.post('login', {
        email: _this.email,
        password: _this.password,
      }).then(RESPONSE => {
        console.log(RESPONSE);
        const token = RESPONSE.data.accessToken;
        const user = RESPONSE.data.user;
        _this.storeLoggedInUser(token, user);
        alert(RESPONSE.statusText);
      }).catch(ERROR => {
        console.log(ERROR);
        alert(ERROR.message);
      }).then(() => {
        _this.submitting = false;
      });
    }
  }
}</script>

<template>
  <div class="col-lg-4">
    <div class="card">
      <div class="header">
        <p class="lead mb-5">Se connecter</p>
      </div>
      <div class="body">
        <form class="form-auth-small" @submit.prevent="submitting === false && loginUser()">

          <div class="form-group p-2">
            <label for="signin-email" class="control-label sr-only">Email</label>
            <input v-model="email" type="email" class="form-control" id="signin-email" placeholder="Email" />
          </div>
          <div class="form-group p-2">
            <label for="signin-password" class="control-label sr-only">Mot de passe</label>
            <input v-model="password" type="password" class="form-control" id="signin-password" placeholder="Mot de Passe" />
          </div>
<!--          <div class="form-group clearfix p-2">-->
<!--            <label class="fancy-checkbox element-left">-->
<!--              <input type="checkbox" />-->
<!--              <span>Se souvenr de moi</span>-->
<!--            </label>-->
<!--          </div>-->
          <button type="submit" class="btn btn-primary btn-block mt-2">Connexion</button>
          <div class="bottom flex flex-col">
            <span class="helper-text m-b-10 text-primary"><a href="javascript: void(0);">Mot de passe oublié?</a></span>
            <span class="text-secondary">Pas encore de compte?
              <router-link to="/register" class="text-primary"> S'enregister</router-link>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  border: 1px solid;
  border-radius: 5px;
  @apply border-info;
  padding: 5px 10px;
}

</style>