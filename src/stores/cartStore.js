import api from '@/services/api.js'
import { defineStore } from 'pinia'

const useCartStore = defineStore('cart', {
  state: () => ({
    allCarts: [],
    currentCart: [],
    userInvoices: [],
  }),
  getters: {
    getCartCount(state) {
      let cartCount = 0;
      if(state.currentCart) {
        state.currentCart.forEach((product) => {
          cartCount += (1 * product[1]);
        });
      }
      return cartCount;
    }
  },
  actions: {
    async fetchAllInvoices() {
      await api.get('invoices'
      ).then(response => {
        this.allCarts = response.data.data;
      }).catch(error => {
        console.log(error);
      });
    },
    async fetchUserInvoices(userId) {
      await api.get(`invoices/${userId}`
      ).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
        alert(error);
      })
    },
    async newInvoice(){
      await api.post('invoices', {
        //data
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
        alert(error.message)
      })
    },
    async updInvoice() {
      await api.put('invoices', {
        //data
      }).then(response => {
          console.log(response);
      }).catch(error => {
        console.log(error);
        alert(error.message);
      })
    },
    // getLastCart() {
    //   if( lastInvoice of this.allCart has status.number === 1 ) {
    //     this.currentCart = lastCart;
    //   }
    // },
    addToCart(productId) {
      let alreadyAdd = false;
      this.currentCart.forEach((product) => {
        if (product[0] === productId) {
          product[1] += 1;
          alreadyAdd = true;
        }
      })
      if (!alreadyAdd) {
        this.currentCart.push([productId, 1])
      }

      // console.log(this.currentCart.findIndex((product) => product[0] === productId))
    },
    getProductCount(productId) {
      return this.currentCart.find((product) => product[0] === productId)[1]
    }
  },
});

export default useCartStore;