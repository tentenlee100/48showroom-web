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
    <div class="input-group  pading-bottom-5">
      <span class="input-group-addon">m3u8</span>
      <input type="text" class="form-control" :id="'resultUrl_low_'+data.seq" :value="data.streamingUrl_low">
      <span class="input-group-btn">
          <button type="button" class="btn btn-warning" v-clipboard:copy="data.streamingUrl_low" v-clipboard:success="onCopy"  v-clipboard:error="onError"><i class="fa fa-clipboard" aria-hidden="true"></i>
          </button>
          <a class="btn btn-success " :href="data.rtmpUrl_low"><i class="fa fa-play" aria-hidden="true"></i></a>
      </span>
    </div>
    <div class="input-group  pading-bottom-5">
      <span class="input-group-addon">flv</span>
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
      <a class="btn btn-info" :href="openShowroomUrl()" target="_blank" role="button">前往 live me</a>
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
  name: "live-tpe-cell",
  props: ['data'],
  data: () => ({

  }),
  methods: {
    openShowroomUrl() {
      // return this.isMobile ? "showroom://room?room_id=" + this.data.room_id : "https://www.showroom-live.com/" + this.data.room_url_key
      return "https://www.liveme.com/live.html?videoid=" + this.data.room_id

    },
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
.input-group-addon {
  /*width: 35px;*/
    min-width:60px;
    text-align:center;
}
</style>
