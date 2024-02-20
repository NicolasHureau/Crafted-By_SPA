<script>
import axios from 'axios';
import useApiStore from '../stores/api';
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
    ...mapState(useApiStore, [
      'API_URL',
    ]),
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
      axios.post(`${_this.API_URL}login`, {
        email: _this.email,
        password: _this.password,
      }).then(RESPONSE => {
        console.log(RESPONSE);
        const token = RESPONSE.data.accessToken;
        const user = RESPONSE.data.user;
        _this.storeLoggedInUser(token, user);
        alert(RESPONSE.data.message);
      }).catch(ERROR => {
        console.log(ERROR);
        alert(ERROR.data.message);
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
          <div class="form-group clearfix">
            <label class="fancy-checkbox element-left">
              <input type="checkbox" />
              <span>Se souvenr de moi</span>
            </label>
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block">Connexion</button>
          <div class="bottom">
            <span class="helper-text m-b-10"><i class="fa fa-lock"></i><a href="javascript: void(0);">Mot de passe oublié?</a></span>
            <span>Pas encore de compte?<router-link to="/register">s'enregister</router-link></span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>