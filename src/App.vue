<script>
import Add from '@/components/Add.vue'
import NavbarIcons from '@/components/NavbarIcons.vue';
import NavbarMenu from '@/components/NavbarMenu.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  components: { NavbarIcons, NavbarMenu, Add },
})

</script>

<template>
  <header>

    <Add msg="Livraison gratuite à partir de 50€ !"/>

    <div class="wrapper flex justify-between items-center md:mx-20 md:my-2 sm:mx-auto sm:my-auto">
      <NavbarMenu />
      <NavbarIcons />
    </div>

  </header>

  <div class="grow flex justify-center items-center">
    <div class="flex-col justify-center items-center">

    <RouterView />

    </div>
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
