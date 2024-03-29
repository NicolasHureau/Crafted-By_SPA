<script>
import UserRegisterModal from '@/components/UserRegisterModal.vue'
import UserLoginModal from '@/components/UserLoginModal.vue'
import NavbarIconsCartModal from '@/components/NavbarIconsCartModal.vue'
import NavbarIconsUserModal from '@/components/NavbarIconsUserModal.vue'

export default {
  components: { NavbarIconsUserModal, NavbarIconsCartModal, UserLoginModal, UserRegisterModal },
  data: () => {
    return {
      cart: {
        products: [],
        subtotal: 0,
        total: 0
      }
    }
  },
  methods: {
    async updateCart() {

      this.cart.products = [];
      this.cart.subtotal = 0;
      this.cart.total = 0;

      if (this.$Cart.getCartCount > 0) {

        await this.$Cart.currentCart.forEach((product) => {

          let cartProduct = this.$Product.getCartData(product.id);
          cartProduct.quantity = this.$Cart.getProductCount(product.id);

          this.cart.products.push(cartProduct);
          this.cart.subtotal += cartProduct.price;
          this.cart.total += cartProduct.price*product.quantity;
        })
      }
      document.getElementById("CartModal").showModal();
    },
    openUserRegisterModal() {

      document.getElementById("UserLoginModal").close();
      document.getElementById("UserRegisterModal").showModal();
    },
    openUserLoginModal() {

      document.getElementById("UserRegisterModal").close();
      document.getElementById("UserLoginModal").showModal();
    },
    openNavbarIconsUserModal() {
      document.getElementById("UserModal").showModal();
    }
  }
}
</script>

<template>

  <div class="flex me-3">

    <div class="flex items-center">
<!--      <input type="search" class="" placeholder="Chercher">-->
      <i-ph-magnifying-glass class="icon mx-2" />
    </div>

    <div v-if="$User.token" class="flex items-center">
<!--      <button role="button" class="dropdown">-->
<!--        <i-ph-user-circle class="icon mx-2" />-->

<!--        <div class="dropdown-content flex flex-col text-start rounded p-3 bg-base-100 shadow">-->
<!--          <span class="text-secondary">Hello</span>-->
<!--          <RouterLink to="/user/profile" class="inline-flex items-center">-->
<!--&lt;!&ndash;            <i-ph-user-focus class="mr-1" />{{ loggedUser.firstname }}&ndash;&gt;-->
<!--            <i-ph-user-focus class="mr-1" />{{ $User.loggedUser.firstname }}-->

<!--          </RouterLink>-->
<!--          <RouterLink to="/setting" class="inline-flex items-center">-->
<!--            <i-ph-gear-six class="mr-1" />Paramétres-->
<!--          </RouterLink>-->
<!--&lt;!&ndash;          <a @click="loggingOut === false && logUserOut()" href="#" class="inline-flex items-center">&ndash;&gt;-->
<!--          <a @click="$User.logout" href="#" class="inline-flex items-center">-->
<!--            <i-ph-sign-out class="mr-1" />Déconnexion-->
<!--          </a>-->
<!--        </div>-->

<!--      </button>-->
      <button @click="openNavbarIconsUserModal">
        <i-ph-user-circle class="icon mx-2" />
      </button>
      <NavbarIconsUserModal />
    </div>

    <div v-else class="flex items-center">
      <button @click="openUserRegisterModal">
        <i-ph-user-circle class="icon mx-2" />
      </button>
      <UserRegisterModal />
      <UserLoginModal />
    </div>

    <button tabindex="0" role="button" @click="updateCart" class="btn btn-ghost btn-circle">
      <div class="indicator">
        <i-ph-shopping-bag class="icon mx-2" />
        <span class="badge badge-sm indicator-item bg-success text-info right-2 top-1">{{ $Cart.getCartCount }}</span>
      </div>
      <NavbarIconsCartModal :cart=cart />
    </button>

  </div>

</template>

<style scoped>

.icon {
  font-size: 23px;
  @media (max-width: 640px) {
    font-size: 18px;
  }
}
input {
  visibility: hidden;
  position: absolute;
  width: 200px;
}

</style>