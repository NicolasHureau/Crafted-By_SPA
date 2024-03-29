import { defineStore } from 'pinia';
import api from '@/services/api.js'

const useBusinessStore = defineStore('business', {
  state: () => ({
    allBusinesses: [],
    consultedBusinesses: []
  }),
  actions: {
    async getBusiness(businessId) {
      if (!this.consultedBusinesses.includes(businessId)) {
        await this.fetchBusiness(businessId);
      }
      return this.consultedBusinesses.find((business) => business.id === businessId);
    },
    async fetchBusinesses() {
      await api.get('business'
      ).then(response => {
        this.allBusinesses = response.data.data;
      }).catch(error => {
        console.log(error);
      });
    },
    async fetchBusiness(businessId) {
      await api.get(`business/${businessId}`
      ).then(response => {
        this.consultedBusinesses.push(response.data.business);
      }).catch(error => {
        console.log(error);
      })
    },
    getProductsCount(businessId) {
      console.log(businessId)
      return this.$Product.allProducts.filter((product) => product.businessId === businessId).length
    }
  }
});

export default useBusinessStore;
