<template>
  <div class="item col-xs-12 col-md-6">
    <a class="" :href="'https://www.showroom-live.com/' + data.id" target="_blank">
        <div class="media thumbnail ">
          <div v-if="showImage" class="media-left col-xs-12 col-sm-4 col-md-6 col-lg-5">
            <div class="row">
              <img  class="img-responsive center-block" :src="data.imageUrl">
            </div>
          </div>
          <div class="media-right  col-xs-12 col-sm-8  col-md-6 col-lg-7" >
              <h4><strong>{{data.name}}</strong></h4>
              <div class="col-xs-6 col-md-12 col-lg-6">
                <div class="row">
                  <h4 class="nomargin">預計開台時間:</h4>
                </div>
              </div>
              <div class="col-xs-6 col-md-12 col-lg-6">
                <div class="row">
                  <h4 class="nomargin">{{data.onLiveTime}}</h4>
                </div>
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
.noPading{
  padding: 0;
}
.media-right{
  padding-right: 5px;
}
.nomargin{
  margin: 0;
}
</style>
