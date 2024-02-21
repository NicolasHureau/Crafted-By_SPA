<script>
// import axios from 'axios';
// import useApiStore from '../stores/api';
import api from '../services/api.js';
import useUserStore from '../stores/user';
import { mapState, mapActions } from 'pinia';
import user from '../stores/user'
import router from '@/router/index.js'
export default {
  data: () => {
    return {
      loggingOut: false,
      // loggedUser: useUserStore().loggedUser
    }
  },
  computed: {
    // ...mapState(useApiStore, [
    //   'API_URL'
    // ]),
    ...mapState(useUserStore, [
      'token',
      'userIsAuth',
      'loggedUser'
    ]),

  },
  watch: {
    userIsAuth() {
      /*
          At this point the userIsAuth value is true.
          On successful logout, after the storeLoggedInUser
          method is called, the userIsAuth value is
          set to false and this watch property is invoked.
          The code below will then run.
      */
      this.$router.push('/');
    },
  },
  methods: {
    user,
    useUserStore,
    ...mapActions(useUserStore, [
      'logoutUser'
    ]),
    logUserOut() {
      const _this = this;
      _this.loggingOut = true;
      // axios.post(`${_this.API_URL}logout`, {}, {
      api.post('logout',
        // headers: {
        //   Authorization: `Bearer ${_this.token}`
        // }
      ).then(RESPONSE => {
        alert(RESPONSE.data.message);
      }).catch(ERROR => {
        console.log(ERROR);
        alert(ERROR.message);
      }).then(() => {
        _this.logoutUser();
        _this.loggingOut = false;
      });
    }
  }
}
</script>

<template>
  <div class="inline-flex">
    <div>
      <input type="search" class="" placeholder="Chercher">
      <i-ph-magnifying-glass class="icon mx-2" />

    </div>

    <div v-if="this.token">
      <button role="button" class="dropdown">
        <i-ph-user-circle class="icon mx-2" />
        <div class="dropdown-content flex flex-col text-start">
          <span class="text-secondary">Hello</span>
          <RouterLink to="/profile" class="inline-flex items-center">
            <i-ph-user-focus class="mr-1" />{{ loggedUser.firstname }}
          </RouterLink>
          <RouterLink to="/setting" class="inline-flex items-center">
            <i-ph-gear-six class="mr-1" />Paramétres
          </RouterLink>
          <a @click="loggingOut === false && logUserOut()" href="#" class="inline-flex items-center">
            <i-ph-sign-out class="mr-1" />Déconnexion
          </a>
        </div>
      </button>
    </div>
    <div v-else>
      <RouterLink to="/login">
        <i-ph-user-circle class="icon mx-2" />
      </RouterLink>
    </div>

    <RouterLink to="/cart">
      <i-ph-shopping-bag class="icon mx-2" />
    </RouterLink>

  </div>
</template>
<style scoped>
.icon {
  font-size: 20px;
}
input {
  visibility: hidden;
  position: absolute;
  width: 200px;
}
</style>