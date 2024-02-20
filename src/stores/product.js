import { defineStore } from 'pinia';

const useProductStore = defineStore('product', {
  state: () => ({
    totalLaptops: 0,
    pricePerLaptop: 250000
  }),
  getters: {
    totalLaptopPrices: (state) => {
      return state.totalLaptops * state.pricePerLaptop
    }
  },
  actions: {
    addLaptop() {
      this.totalLaptops++;
    }
  }
});

export default useProductStore;
