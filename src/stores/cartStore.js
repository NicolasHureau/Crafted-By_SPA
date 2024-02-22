import api from '@/services/api.js'
import { defineStore } from 'pinia'

const useCartStore = defineStore('cart', {
  state: () => ({
    allCarts: [],
    currentCart: []
  }),
  actions: {
    async fetchCarts() {
      await api.get('invoices'
      ).then(response => {
        this.allCarts = response.data.data;
      }).catch(error => {
        console.log(error);
      });
    },
  }
});

export default useCartStore;