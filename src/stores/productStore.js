import { defineStore } from 'pinia';
import api from '@/services/api.js';

const useProductStore = defineStore('product', {
  state: () => ({
    allProducts: [],
    filters: [],
    filteredProducts: [],
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
    async fetchProductsFilter()
    {
      await api.get('filters'
      ).then(response => {
        this.filters = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
    async fetchFilteredProducts(values)
    {
      await api.get('products', {params: values}
      ).then(response => {
        this.filteredProducts = response.data.data;
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
    getCartData(productId) {
      let cartProduct = this.consultedProducts.find((product) => product.id === productId);
      return {
        id: productId,
        name: cartProduct.name,
        image: cartProduct.image,
        color: cartProduct.color,
        price: parseFloat(cartProduct.price)
      }
    },
    searchProduct(...params) {
      // spread operator

    }
  }
});

export default useProductStore;
