<script>
export default {
  name: 'BusinessListItem',
  props: ['business'],
  data: () => {
    return {
      shownBusiness: null,
    }
  },
  methods: {
    async showAccordion() {
      this.shownBusiness = await this.$Business.getBusiness(this.business.id);
      // document.getElementById(this.business.id).showAccordion();
    }
  }
}
</script>

<template>

  <div class="collapse">
    <input type="radio" @click="showAccordion" name="businessAccordion">
    <div class="collapse-title">{{ business.name }}<span>@ {{ business.email }}</span>
    </div>
    <div class="collapse-content" :id="business.id">
      <div>
        <div>BY</div>
        <div>
          <span>{{ shownBusiness.firstname }}</span>
          <span>{{ shownBusiness.lastname}}</span>
        </div>
<!--        <img :src="shownBusiness.logo">-->
<!--      </div>-->
<!--      <div>-->
<!--        <div>AT</div>-->
<!--        <div>-->
<!--          <span>{{ shownBusiness.address }}</span>-->
<!--          <span>{{ shownBusiness.zip_code }}</span>-->
<!--          <span>{{ shownBusiness.city }}</span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div>{{ shownBusiness.specialities }}</div>-->
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>