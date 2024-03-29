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
      if(state.currentCart.length > 0) {
        state.currentCart.forEach((product) => {
          cartCount +=  product.quantity;
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
    addToCart(productId, quantity = 1) {
      let alreadyAdd = false;
      this.currentCart.forEach((product) => {
        if(product.id === productId) {
          if (product.quantity === quantity) {
            product.quantity ++
          } else {
            product.quantity = quantity;
          }
          alreadyAdd = true;
        }
      })
      if (!alreadyAdd) {
        this.currentCart.push({
          id: productId,
          quantity: quantity
        })
      }
    },
    getProductCount(productId) {
      return this.currentCart.find((product) => product.id === productId).quantity
    },
    addOneProduct(productId) {
      this.currentCart.find((product) => product.id === productId).quantity ++
    },
    subOneProduct(productId) {
      this.currentCart.find((product) => product.id === productId).quantity --
    },
    delProductFromCart(productId) {
      this.currentCart.splice(
        this.currentCart.findIndex((product) => product.id === productId),
        1)
    }
  },
});

export default useCartStore;