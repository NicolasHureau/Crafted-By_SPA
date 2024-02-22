<script setup>
import FooterCopyright from '@/components/FooterCopyright.vue'
import SocialIcons from '@/components/FooterSocialIcons.vue'
import FooterLinks from '@/components/FooterLinks.vue'
</script>

<template>
  <div class="flex justify-between">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="250" height="250" />
    <FooterLinks />
  </div>
  <hr />
  <div class="flex justify-between mt-10">
    <FooterCopyright />
    <SocialIcons />
  </div>

</template>

<style scoped>
hr {
  visibility: hidden;
}

@media (max-width: 640px) {
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
  }
  img {
    margin-bottom: 2rem;
  }
  hr {
    visibility: visible;
    border-top: 1px solid theme('colors.primary');
    margin: 1rem 0;
  }
}
</style>