import { defineStore } from 'pinia';
import api from '@/services/api.js';
import router from '@/router/index.js'

const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    storedUser: localStorage.getItem('user') || null,
    userProfile: {},
    allUser: [],
  }),
  getters: {
    loggedUser: state => {
      if (state.storedUser) {
        return JSON.parse(localStorage.getItem('user'));
      }
      return null;
    }
  },
  actions: {
    async register(formData)
    {
      await api.post('users', {
        lastname: formData.lastname,
        firstname: formData.firstname,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
      }).then(response => {
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        console.log(response)
        alert(response.statusText);
      }).catch(error => {
        console.log(error);
        alert(error.response.data.message);
      })
    },
    async login(formData)
    {
      await api.post('login', {
        email: formData.email,
        password: formData.password,
      }).then(response => {
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        this.$reset();
        this.setCookie('userToken', this.token, 7);
        alert(response.statusText)
      }).catch(error => {
        console.log(error);
        alert(error.message);
      })
    },
    setCookie(name, value, days)
    {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    },
    // getCookie(name)
    // {
    //   const decodedCookie = decodeURIComponent(document.cookie);
    //   const cookies = decodedCookie.split(';');
    //   for (let i = 0; i < cookies.length; i++) {
    //     let cookie = cookies[i].trim();
    //     if (cookie.startsWith(name + '=')) {
    //       console.log(cookie)
    //       return cookie.substring(name.length + 1);
    //     }
    //   }
    //   return '';
    // },
    async logout()
    {
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
    async fetchUserProfile(userId)
    {
      await api.get(`users/${userId}`
      ).then(response => {
        this.userProfile = (response.data.user)
      }).catch(error => {
        console.log(error);
        alert(error);
      })
    },
    async updateUserprofile(formData)
    {
      await api.put(`users/${formData.id}`, {
          lastname: formData.lastname,
          firstname: formData.firstname,
          email: formData.email,
      }).then(response => {
        alert(response.data.message);
      }).catch(error => {
        console.log(error);
        alert(error.message);
      })
    },
    async updatePassword(formData)
    {
      console.log(this.userProfile.email)
      await api.put('password', {
        email: this.userProfile.email,
        old_password: formData.oldPassword,
        password: formData.password,
        password_confirmation: formData.password_confirmation
      }).then(response => {
        alert(response.data.message);
        router.back();
      }).catch(error => {
        console.log(error);
        alert(error.response.data.message);
      })
    },
    async fetchAllUsers()
    {
      await api.get('users'
      ).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
        alert(error.message)
      })
    },
  }
});

export default useUserStore;
