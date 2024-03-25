import { defineStore } from 'pinia';
import api from '@/services/api.js';

const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    storedUser: localStorage.getItem('user') || null,
    userDetails: [],
    allUser: [],
  }),
  getters: {
    // user: state => {
    //   if (!state.storedUser) {
    //     return JSON.parse(state.storedUser);
    //   }
    //   return state.storedUser;
    // },
    // userIsAuth: state => !state.token,
    loggedUser: state => {
      if (state.storedUser) {
        console.log(state.storedUser)
        return JSON.parse(localStorage.getItem('user'));
      }
      return null;
    }
  },
  actions: {
    async register(formData) {
      await api.post('users', {
        lastname: formData.lastname,
        firstname: formData.firstname,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
        // address: formData.address,
        // zip_code: formData.zip_code,
        // city: formData.city,
      }).then(response => {
        // this.token = response.data.accessToken;
        // this.storedUser = response.data.user;
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        alert(response.data.message);
      }).catch(error => {
        console.log(error);
        alert(error.message);
      })
    },
    async login(formData) {
      await api.post('login', {
        email: formData.email,
        password: formData.password,
      }).then(response => {
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        this.$reset();
        alert(response.statusText)
      }).catch(error => {
        console.log(error);
        alert(error.message);
      })
    },
    async logout() {
      await api.post('logout'
      ).then(response => {
        alert(response.data.message);
      }).catch(error => {
        console.log(error);
        alert(error.message);
      }).then(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.$reset();
      })
    },
    async fetchUserDetails(userId) {
      await api.get(`users/${userId}`
      ).then(response => {
        this.userDetails = (response.data.user)
      }).catch(error => {
        console.log(error);
        alert(error);
      })
    },
    async fetchAllUsers() {
      await api.get('users'
      ).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
        alert(error.message)
      })
    },
    // storeLoggedInUser(token, user) {
    //   const _this = this;
    //
    //   // Save the token to localStorage
    //   localStorage.setItem('token', token);
    //
    //   // Save the user to localStorage
    //   const stringifiedUser = JSON.stringify (user);
    //   localStorage.setItem('user', stringifiedUser);
    //
    //   // Save the token and user to the store state
    //   _this.token = token;
    //   _this.storedUser = stringifiedUser;
    // },
    // logoutUser() {
    //   const _this = this;
    //
    //   // Delete the token from localStorage
    //   localStorage.removeItem('token');
    //
    //   // Delete the user from localStorage
    //   localStorage.removeItem('user');
    //
    //   // Delete the token and user from the state
    //   _this.token = null;
    //   _this.storedUser = null;
    // }
  }
});

export default useUserStore;
