<script>
import Add from '@/components/Add.vue'
import HeaderIcons from '@/components/HeaderIcons.vue';
import NavBar from '@/components/NavBar.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  components: { Breadcrumbs, HeaderIcons, NavBar, Add }
})


</script>

<template>
  <header>

    <Add msg="Livraison gratuite à partir de 50€ !"/>

    <div class="wrapper flex justify-between items-center mx-10 my-2">
      <NavBar />
      <HeaderIcons />
    </div>

    <Breadcrumbs />

  </header>

  <div class="grow flex justify-center items-center">
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
