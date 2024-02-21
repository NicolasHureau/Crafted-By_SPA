import { defineStore } from 'pinia';
import api from '@/services/api.js'

const useProductStore = defineStore('product', {
  state: () => ({
    products: []
  }),
  getters: {
    getProduct: (state) => {
      return (productId) => state.products.find((product) => product.id === productId)
    }
  },
  actions: {
    async fetchProducts() {
      try {
        this.products = await api.get('products')
      } catch (error) {
        console.log(error)
      }
    }
  }
});

export default useProductStore;
