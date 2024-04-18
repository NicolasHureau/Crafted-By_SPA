<script>
import Add from '@/components/Add.vue'
import NavbarIcons from '@/components/NavbarIcons.vue';
import NavbarMenu from '@/components/NavbarMenu.vue';
import NavbarIconsSearchDropdown from '@/components/NavbarIconsSearchDropdown.vue'

export default {
  components: { NavbarIconsSearchDropdown, NavbarIcons, NavbarMenu, Add },
  data: () => {
    return {
      filters: false
    }
  }
}

</script>

<template>

  <header class="sticky top-0 bg-white z-50">

    <Add msg="Livraison gratuite à partir de 50€ !"/>

    <div class="flex justify-between items-center md:mx-10">
      <NavbarMenu />
      <NavbarIcons />
    </div>

    <NavbarIconsSearchDropdown v-if="filters" class="relative" />

  </header>

  <div class="grow flex flex-col justify-center items-center">

    <RouterView />

  </div>

  <footer class="bg-black text-info w-full flex-col p-10">
    <Footer />
  </footer>

</template>

<style scoped>

header {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
}


</style>
