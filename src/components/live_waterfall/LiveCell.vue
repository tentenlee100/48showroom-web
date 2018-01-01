<template>
<div class="pading5 item col-xs-12 col-sm-6 col-md-4 col-lg-3">
  <div class="thumbnail">
    <div v-if="showImage" class="showroom-image-block">
      <img class="img-responsive center-block" :src="data.image">
      <div class="absolute timeBg">
        <h5><strong>開始於:{{data.started_at}}</strong></h5>
      </div>
      <div class="absolute2 timeBg ">
        <h5>觀看人數:<strong style="color:red;">{{data.view_num}}</strong></h5>
      </div>
    </div>
    <h4 class=""><strong>{{data.main_name}}</strong></h4>
    <div v-if="showImage == false" class="">
      <p><strong>開始於:{{data.started_at}}</strong>   觀看人數:<strong style="color:red;">{{data.view_num}}</strong></p>
    </div>
    <div v-if="showLowUrl" >
      <div class="input-group  pading-bottom-5">
        <span class="input-group-addon">低畫質</span>
        <input type="text" class="form-control" :id="'resultUrl_low_'+data.seq" :value="data.streamingUrl_low">
        <span class="input-group-btn">
            <button type="button" class="btn btn-warning" v-clipboard:copy="data.streamingUrl_low" v-clipboard:success="onCopy"  v-clipboard:error="onError"><i class="fa fa-clipboard" aria-hidden="true"></i>
            </button>
            <a class="btn btn-success " :href="data.rtmpUrl_low"><i class="fa fa-play" aria-hidden="true"></i></a>
        </span>
      </div>
      <div class="input-group  pading-bottom-5">
        <span class="input-group-addon">高畫質</span>
        <input type="text" class="form-control" :id="'resultUrl_'+data.seq" :value="data.streamingUrl">
        <span class="input-group-btn">
            <button type="button" class="btn btn-warning" v-clipboard:copy="data.streamingUrl" v-clipboard:success="onCopy"  v-clipboard:error="onError">
              <i class="fa fa-clipboard" aria-hidden="true"></i>
            </button>
            <a class="btn btn-success" type="button" :href="data.rtmpUrl">
              <i class="fa fa-play" aria-hidden="true"></i>
        </a>
        </span>
      </div>
      <div class="btn-group btn-group-justified" role="group" aria-label="Justified button group">
        <a class="btn btn-info" :href="openShowroomUrl" target="_blank" role="button">{{linkTitle}}</a>
      </div>
    </div>
    <div v-else >
      <div class="input-group  pading-bottom-5">
        <input type="text" class="form-control" :id="'resultUrl_'+data.seq" :value="data.streamingUrl">
        <span class="input-group-btn">
            <button type="button" class="btn btn-warning" v-clipboard:copy="data.streamingUrl" v-clipboard:success="onCopy"  v-clipboard:error="onError">
              <i class="fa fa-clipboard" aria-hidden="true"></i>
            </button>

            <a v-if="isMobile == false" class="btn btn-info" :href="openShowroomUrl" target="_blank" role="button"><i class="fa fa-external-link" aria-hidden="true"></i></a>
            <a class="btn btn-success" type="button" :href="data.rtmpUrl">
              <i class="fa fa-play" aria-hidden="true"></i>
        </a>
        </span>
      </div>
      <div v-if="isMobile" class="btn-group btn-group-justified" role="group" aria-label="Justified button group">
        <a class="btn btn-info" :href="openShowroomUrl" target="_blank" role="button">{{ linkTitle}}</a>
      </div>
    </div>
  </div>

</div>
</template>
<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
import {
  SnotifyPosition,
  SnotifyAction
} from 'vue-snotify';

export default {
  name: "live-cell",
  props: ['data'],
  data: () => ({

  }),
  methods: {

    onCopy(e) {
      this.$snotify.warning("複製成功", "", {
        timeout: 3000,
        showProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
      });

    },
    onError(e) {
      alert('Failed to copy texts')
    }
  },
  computed: {
    openShowroomUrl: function() {
      return this.isMobile ? "showroom://room?room_id=" + this.data.room_id : "https://www.showroom-live.com/" + this.data.room_url_key
    },
    linkTitle: function(){
      return this.isMobile ?  "前往 showroom app" : "前往 showroom web"
    },
    ...mapGetters([
      'isMobile',
      'showLowUrl',
      'showImage'
    ])
  },
  mounted() {
    //do something after creating vue instance

  }
}
</script>
<style scoped>
.showroom-image-block {
  position: relative;
}

h5 {
  margin: 0;
}

.position-relative {
  position: relative;
}

.absolute {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

.absolute2 {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.timeBg {
  background-color: rgb(247, 247, 247);
  opacity: 0.8;
}

.newbg {
  color: white;
  background-color: red;
}

.pading-bottom-5 {
  padding-bottom: 5px;
}

.pading5 {
  padding-right: 5px;
  padding-left: 5px;
}

.pading-right-5 {
  padding-right: 5px;
}

.pading-left-5 {
  padding-left: 5px;
}
</style>
