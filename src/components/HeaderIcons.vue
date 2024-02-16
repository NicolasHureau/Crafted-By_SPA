<script setup>

</script>

<template>
  <div class="inline-flex" :style="{ fontSize:'20px' }">
    <i-ph-magnifying-glass class="mx-2" />
    <div>
      <button type="button" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
        <i-ph-user-circle class="mx-2" />
      </button>
<!--      <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">-->
<!--        &lt;!&ndash; Active: "bg-gray-100", Not Active: "" &ndash;&gt;-->
<!--        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>-->
<!--        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>-->
<!--        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>-->
<!--      </div>-->
    </div>
    <RouterLink to="/profile">
    </RouterLink>
    <RouterLink to="/cart">
      <i-ph-shopping-bag class="mx-2" />
    </RouterLink>
  </div>
</template>
<style scoped>

</style>