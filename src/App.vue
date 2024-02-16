<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Add from './components/Add.vue'
import FooterLinks from '@/components/FooterLinks.vue'
import FooterCopyright from '@/components/footerCopyright.vue'
import SocialIcons from '@/components/SocialIcons.vue'
import HeaderIcons from '@/components/HeaderIcons.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
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


/*@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    //flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}*/
</style>
