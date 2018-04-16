<template>
<div class="item  col-12 col-lg-6 ">
  <a class="card  my-2 mx-1 d-flex p-2 justify-content-between align-items-stretch  " :href="'https://www.showroom-live.com/' + data.id" target="_blank">
    <div class="card-body p-1 row no-gutters">
      <div v-if="showImage" class=" col-12 col-sm-6  col-lg-6 col-xl-5 d-flex align-items-center">
        <img class="img-fluid " :src="data.imageUrl">
      </div>
      <div class="px-1 d-flex col flex-column">
        <h5 class="mx-2 mx-sm-0 "><strong>{{data.name}}</strong></h5>
        <div class="mt-auto mb-2 mb-sm-0 d-flex flex-lg-column flex-xl-row flex-md-row flex-sm-column  justify-content-around  ">
          <h5 class="m-0 ">預計開台時間:</h5>
          <h5 class="m-0">{{data.onLiveTime}}</h5>
        </div>
      </div>
    </div>
  </a>
</div>
</template>
<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  name: "schedule-cell",
  props: ['data'],
  data: () => ({

  }),
  computed: {
    ...mapGetters([
      'isMobile',
      'showLowUrl',
      'showImage'
    ])
  },
}
</script>
<style scoped>
a:hover {
  color: --gray-dark;
  text-decoration: none;
}
a{
  color: --gray-dark;
}
</style>
