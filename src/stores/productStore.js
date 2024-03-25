import { defineStore } from 'pinia';
import api from '@/services/api.js';

const useProductStore = defineStore('product', {
  state: () => ({
    allProducts: [],
    consultedProducts: []
  }),
  actions: {
    async getProduct(productId) {
        if (!this.consultedProducts.includes(productId)) {
          await this.fetchProduct(productId);
        }
        return this.consultedProducts.find((product) => product.id === productId);
    },
    async fetchProducts() {
      await api.get('products'
      ).then(response => {
        this.allProducts = response.data.data;
      }).catch(error => {
        console.log(error);
      });
    },
    async fetchProduct(productId) {
      await api.get(`products/${productId}`
      ).then(response => {
        this.consultedProducts.push(response.data.product);
      }).catch(error => {
        console.log(error);
      })
    },
    getNameAndPrice(productId) {
      let cartProduct = this.consultedProducts.find((product) => product.id === productId);
      return [productId, cartProduct.name, cartProduct.price]
    },

  }
});

export default useProductStore;
