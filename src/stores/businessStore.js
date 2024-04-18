import { defineStore } from 'pinia';
import api from '@/services/api.js'

const useBusinessStore = defineStore('business', {
  state: () => ({
    allBusinesses: [],
    filteredBusinesses: [],
    consultedBusinesses: [],
    message: ''
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
    async fetchFilteredBusinesses(value)
    {
      console.log(value)
      await api.get('business', {params: {'search': value}}
      ).then(response => {
        this.filteredBusinesses = response.data.data;
        if (this.filteredBusinesses.length === 0) {
          this.message = 'Aucun artisan ne correspond à votre recherche.';
        } else {
          this.message = this.filteredBusinesses.length + ' artisans trouvés.';
        }
      }).catch(error => {
        console.log(error);
      });
    },
    async fetchBusiness(businessId)
    {
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
