<script>
export default {
  data: () => {
    return {
      dropdownCart: [],
      dropdownTotal: 0,
    }
  },
  methods: {
    async updateDropdownCart() {
      this.dropdownCart = [];
      this.dropdownTotal= 0;
      await this.$Cart.currentCart.forEach((product) => {
        let dropdownProduct = this.$Product.getNameAndPrice(product[0])
        dropdownProduct.push(this.$Cart.getProductCount(product[0]))
        this.dropdownCart.push(dropdownProduct);
        this.dropdownTotal += parseInt(dropdownProduct[2])*dropdownProduct[3];
      })
    }
  }
}
</script>

<template>
  <div class="inline-flex">
    <div>
      <input type="search" class="" placeholder="Chercher">
      <i-ph-magnifying-glass class="icon mx-2" />

    </div>

    <div v-if="$User.token">
      <button role="button" class="dropdown">
        <i-ph-user-circle class="icon mx-2" />
        <div class="dropdown-content flex flex-col text-start">
          <span class="text-secondary">Hello</span>
          <RouterLink to="/user/profile" class="inline-flex items-center">
<!--            <i-ph-user-focus class="mr-1" />{{ loggedUser.firstname }}-->
            <i-ph-user-focus class="mr-1" />{{ $User.loggedUser.firstname }}

          </RouterLink>
          <RouterLink to="/setting" class="inline-flex items-center">
            <i-ph-gear-six class="mr-1" />Paramétres
          </RouterLink>
<!--          <a @click="loggingOut === false && logUserOut()" href="#" class="inline-flex items-center">-->
          <a @click="$User.logout" href="#" class="inline-flex items-center">
          <i-ph-sign-out class="mr-1" />Déconnexion
          </a>
        </div>
      </button>
    </div>
    <div v-else>
      <RouterLink to="/login">
        <i-ph-user-circle class="icon mx-2" />
      </RouterLink>
    </div>

    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" @click="updateDropdownCart" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <i-ph-shopping-bag class="icon mx-2" />
          <span class="badge badge-sm indicator-item bg-primary text-info">{{ $Cart.getCartCount }}</span>
        </div>
      </div>
      <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
          <div v-if="dropdownCart">
            <div v-for="product in dropdownCart" :key="product[0]" class="flex justify-between">
              <span>{{ product[1] }}</span>
              <div>
                <span>{{ product[2] }}</span>
                <span> x {{ product[3] }}</span>
              </div>
            </div>
          </div>
          <span class="text-primary text-end">Total : {{ dropdownTotal }}</span>
          <div class="card-actions">
            <RouterLink to="/cart" type="button" class="btn btn-primary btn-block">Voir le panier</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.icon {
  font-size: 20px;
}
input {
  visibility: hidden;
  position: absolute;
  width: 200px;
}
</style>