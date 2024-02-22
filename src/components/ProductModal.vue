<script>
export default {
  name: 'ProductModal',
  props: ['product', 'shownProduct'],
}
</script>

<template>

  <dialog :id="product.id" class="modal">
    <div class="modal-box">
      <h2>{{ shownProduct }}</h2>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>

</template>

<style scoped>

</style>