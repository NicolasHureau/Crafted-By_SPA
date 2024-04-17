<script>

export default {
  name: 'NavbarIconsSearchDropdown',
  data: () => {
    return {
      colors: '',
      styles: '',
      materials: '',
      categories: '',
      // heights: '',
      // widths: '',
      // depths: '',
      input: ''
    }
  },
  methods: {
    applyFilters() {
      const filters = {
        color: this.colors,
        style: this.styles,
        material: this.materials,
        category: this.categories,
        height: this.heights,
        width: this.widths,
        depth: this.depths,
        input: this.input
      };
      this.$Product.fetchFilteredProducts(filters);
    },
    resetSelects() {
      this.$refs.colorSelect.selectedIndex = 0;
      this.$refs.styleSelect.selectedIndex = 0;
      this.$refs.materialSelect.selectedIndex = 0;
      this.$refs.categorySelect.selectedIndex = 0;
    }
  },
  async mounted() {
    await this.$Product.fetchProductsFilter();
  }
}

</script>

<template>

  <div class="flex items-center justify-end px-10">

    <div v-if="$route.name == 'products'" class="text-nowrap">

      <select @change="applyFilters" v-model="colors" ref="colorSelect" class="select bg-info rounded-none border-none min-h-7 h-7 me-2">
        <option disabled value="">Couleur</option>
        <option v-for="color in $Product.filters.colors" :value="color.id" :key="color.id">{{ color.value}}</option>
      </select>
      <select @change="applyFilters" v-model="styles" ref="styleSelect" class="select bg-info rounded-none border-none min-h-7 h-7 me-2">
        <option disabled  value="">Style</option>
        <option v-for="style in $Product.filters.styles" :value="style.id" :key="style.id">{{ style.value}}</option>
      </select>
      <select @change="applyFilters" v-model="materials" ref="materialSelect" class="select bg-info rounded-none border-none min-h-7 h-7 me-2">
        <option disabled  value="">Matériaux</option>
        <option v-for="material in $Product.filters.materials" :value="material.id" :key="material.id">{{ material.value}}</option>
      </select>
      <select @change="applyFilters" v-model="categories" ref="categorySelect" class="select bg-info rounded-none border-none min-h-7 h-7 me-2">
        <option disabled  value="">Categorie</option>
        <option v-for="category in $Product.filters.categories" :value="category.id" :key="category.id">{{ category.value}}</option>
      </select>

    </div>

    <form class="text-nowrap">

      <input @change="applyFilters" v-model="input" placeholder="rechercher" class="input border-none rounded-none bg-info min-h-7 h-7 max-w-80">

      <button type="reset" @click="resetSelects" class="bg-info ms-2 min-h-7 h-7 w-7">
        <i-ph-x class="inline" />
      </button>

    </form>

  </div>

</template>

<style scoped>

</style>