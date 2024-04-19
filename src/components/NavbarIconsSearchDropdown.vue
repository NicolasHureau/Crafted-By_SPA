<script>

import { toRaw } from 'vue'

export default {
  name: 'NavbarIconsSearchDropdown',
  data: () => {
    return {
      color: '',
      style: '',
      material: '',
      category: '',
      search: ''
    }
  },
  methods: {
    applyFilters()
    {
      let params = {}

      for (let filter in this.$data)
      {
        if (this.$data[filter])
        {
          params[filter] = this.$data[filter]
        }
      }

      if (this.$route.name === 'products' || this.$route.name === 'home')
      {
        this.$Product.fetchFilteredProducts(params);
      }
      if (this.$route.name === 'businesses' || this.$route.name === 'home')
      {
        this.$Business.fetchFilteredBusinesses(params);
      }
    },
    resetAll()
    {
      if (this.refs)
      {
        this.$refs.colorSelect.selectedIndex = 0;
        this.$refs.styleSelect.selectedIndex = 0;
        this.$refs.materialSelect.selectedIndex = 0;
        this.$refs.categorySelect.selectedIndex = 0;
      }
      this.color = '';
      this.style = '';
      this.material = '';
      this.categorie = '';

      this.search = '';

      this.$Product.message = '';

      this.$Product.filteredProducts = [];
      this.$Business.filteredBusinesses = [];
    }
  },
  async mounted() {
    await this.$Product.fetchProductsFilter();
    this.$refs.searchInput.focus();
  }
}

</script>

<template>

  <div class="flex items-center justify-end p-auto mx-auto md:mx-10 flex-col-reverse gap-2 md:flex-row pb-3">

    <div v-if="$route.name === 'products'" class="grid md:grid-cols-4 grid-cols-2 gap-2">

      <select @change="applyFilters" v-model="color" ref="colorSelect" class="select bg-info rounded-none border-none min-h-7 h-7 w-30">
        <option disabled value="">Couleur</option>
        <option v-for="color in $Product.filters.colors" :value="color.id" :key="color.id">{{ color.value}}</option>
      </select>
      <select @change="applyFilters" v-model="style" ref="styleSelect" class="select bg-info rounded-none border-none min-h-7 h-7 w-30">
        <option disabled  value="">Style</option>
        <option v-for="style in $Product.filters.styles" :value="style.id" :key="style.id">{{ style.value}}</option>
      </select>
      <select @change="applyFilters" v-model="material" ref="materialSelect" class="select bg-info rounded-none border-none min-h-7 h-7 w-30">
        <option disabled  value="">Matériaux</option>
        <option v-for="material in $Product.filters.materials" :value="material.id" :key="material.id">{{ material.value}}</option>
      </select>
      <select @change="applyFilters" v-model="category" ref="categorySelect" class="select bg-info rounded-none border-none min-h-7 h-7 w-30">
        <option disabled  value="">Catégorie</option>
        <option v-for="category in $Product.filters.categories" :value="category.id" :key="category.id">{{ category.value}}</option>
      </select>

    </div>

    <div class="flex w-full md:w-auto flex-grow flex-nowrap justify-end">

      <input @change="applyFilters" v-model="search" ref="searchInput" placeholder="rechercher" class="input flex-grow border-none rounded-none bg-info min-h-7 h-7 max-w-80">

      <button type="button" @click="resetAll" class="bg-info ms-2 min-h-7 h-7 w-7">
        <i-ph-x class="inline" />
      </button>

    </div>

  </div>

</template>

<style scoped>

</style>