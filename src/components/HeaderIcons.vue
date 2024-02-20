<script>
import axios from 'axios';
import useApiStore from '../stores/api';
import useUserStore from '../stores/user';
import { mapState, mapActions } from 'pinia';
import user from '../stores/user'
export default {
  data: () => {
    return {
      loggingOut: false
    }
  },
  computed: {
    ...mapState(useApiStore, [
      'API_URL'
    ]),
    ...mapState(useUserStore, [
      'token',
      // 'userIsAuth'
    ])
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
      this.$router.push('/login');
    }
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
      axios.post(`${_this.API_URL}logout`, {}, {
        headers: {
          Authorization: `Bearer ${_this.token}`
        }
      }).then(RESPONSE => {
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
  <div class="inline-flex" :style="{ fontSize:'20px' }">
    <div>
      <input type="search" class="" placeholder="Chercher">
      <i-ph-magnifying-glass class="mx-2" />

    </div>


<!--    <div>-->
<!--      <button type="button" id="user-menu-button" aria-expanded="false" aria-haspopup="true">-->
<!--        <i-ph-user-circle class="mx-2" />-->
<!--      </button>-->
<!--      <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">-->
<!--        &lt;!&ndash; Active: "bg-gray-100", Not Active: "" &ndash;&gt;-->
<!--        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>-->
<!--        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>-->
<!--        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>-->
<!--      </div>-->
<!--    </div>-->

    <div v-if="useUserStore().user">
      <button role="button" class="dropdown">
        <i-ph-user-circle class="mx-2" />
        <div class="dropdown-content text-start">
<!--          <RouterLink to="/profile">{{ user.firstname }}</RouterLink>-->
<!--          <RouterLink to="/setting">Paramétres</RouterLink>-->
<!--          <RouterLink to="/logout">Déconnexion</RouterLink>-->
          <a @click="loggingOut === false && logUserOut()" href="#">Déconnexion</a>
        </div>
      </button>
    </div>
    <div v-else>
      <RouterLink to="/login">
        <i-ph-user-circle class="mx-2" />
      </RouterLink>
    </div>

    <RouterLink to="/cart">
      <i-ph-shopping-bag class="mx-2" />
    </RouterLink>

  </div>
</template>
<style scoped>
input {
  visibility: hidden;
  position: absolute;
  width: 200px;
}
</style>