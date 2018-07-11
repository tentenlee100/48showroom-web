<template>
<div class="col-12 col-md-6 p-0 m-0 my-1">
  <a class="card h-100 m-1 " :href="'https://www.showroom-live.com/' + data.id" target="_blank">
    <div class="card-body p-1 d-flex flex-column flex-sm-row flex-md-column flex-lg-row justify-content-between ">
        <div v-if="showImage" class=" col-12 col-sm-6   col-md-12 col-lg-6 col-xl-5">
          <img class="img-fluid mx-auto d-block " :src="data.imageUrl">
        </div>
        <div class="px-1 w-100 d-flex flex-column">
          <h5 class="mx-2 mx-sm-0 "><strong>{{data.name}}</strong></h5>
          <div class="mt-auto mb-2 mb-sm-0 d-flex flex-row  flex-sm-column flex-md-row flex-lg-column flex-xl-row justify-content-between  ">
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
