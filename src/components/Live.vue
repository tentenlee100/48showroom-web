<template>
  <div>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex ">
            <a class="mx-1" href="https://www.ptt.cc/bbs/AKB48/M.1465937353.A.1BA.html" target="_blank" role="button">
              <button class="btn btn-sm ">使用方式</button>
            </a>
            <div class="mx-1 hidden-xs">
              <a href="https://bit.ly/2HjQza9" target="_blank" role="button">
                <button class="btn btn-sm btn-danger">chrome 外掛</button>
              </a>
              <small>舊版本所有功能</small>
            </div>
          </div>
          <button @click="reloadAction" class="btn btn-lg btn-info"><font-awesome-icon icon="sync" /></button>
        </div>
      <!-- <div class="col-12 d-flex justify-content-center" >
        <spinner v-show="loading" class="spinner loading-view" size="Medium"></spinner>
      </div> -->
      <live-water-fall :loading="loading" :livingData="livingData" :scheduleData="scheduleData" :scheduleLoading="scheduleLoading"   ></live-water-fall>
    </div>
    <div class="float-btns">
      <button @click="openSetting = true" type="button" class="float-btn-item  btn btn-default" data-toggle="modal" data-target="#settingModal"><font-awesome-icon icon="cog" /></button>
      <button v-scroll-to="{el: 'body' , duration: 50}" type="button" class="float-btn-item btn btn-default"><font-awesome-icon icon="chevron-up" /></button>
      <button @click="reloadAction" class="btn btn-info float-btn-item"><font-awesome-icon icon="sync" /></button>
    </div>
    <setting-modal :needOpen="openSetting" v-on:closeModal="()=>{this.openSetting = false}"></setting-modal>
  </div>
</template>
<script>
import Spinner from 'vue-simple-spinner'
import SettingModal from './setting/SettingModal'
import LiveWaterFall from './live_waterfall/LiveWaterFall'

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

import ApiUrl from '@/config/ApiUrl'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "live",
  data: () => ({
    loading: true,
    scheduleLoading: true,
    openSetting: false,
    livingData: {},
    scheduleData:[],
  }),
  watch: {
    showLowUrl: function(newValue){
      this.reloadAction()
    },
    showImage: function(newValue){
      setTimeout(()=> this.$redrawVueMasonry(), 300);
    },
    livingData: function(){
      setTimeout(()=> this.$redrawVueMasonry(), 300);
    },
    scheduleData: function(){
      setTimeout(()=> this.$redrawVueMasonry(), 300);
    }
  },
  methods: {
    reloadAction(){
      // this.callLiveApi()
      this.callScheduleApi()
    },
    callLiveApi() {
      this.loading = true
      const body = {
        allow: this.userAllow.reduce((sum ,value) => {return sum += value + '|' } , "")
      }
      this.$http.post(ApiUrl.getLive, body,{emulateJSON:true}).then(response => {
        // get body data
        // this.livingData = response.body
        this.$set(this,'livingData',response.body)
        this.loading = false

      }, response => {
        this.loading = false
      })
    },
    callScheduleApi() {
      this.scheduleLoading = true
      const body = {
        allow: this.userAllow.reduce((sum ,value) => {return sum += value + '|' } , "")
      }
      this.$http.post(ApiUrl.getSchedule, body,{emulateJSON:true}).then(response => {
        // get body data
        // this.scheduleData = response.body
        this.$set(this,'scheduleData',response.body)

        this.scheduleLoading = false

      }, response => {
        this.scheduleLoading = false
      })
    }
  },
  mounted() {
    //do something after mounting vue instance
    // this.callLiveApi()
    this.callScheduleApi()
    // setInterval(this.callLiveApi, 60000);
    setInterval(this.callScheduleApi, 10*60000);
  },
  computed: {
    ...mapGetters([
      'userAllow',
      'showLowUrl',
      'showImage',
    ])
  },
  components: {
    Spinner,
    LiveWaterFall,
    SettingModal,
    FontAwesomeIcon,
  }
}
</script>
<style>
.loading-view{
  display: block;
}
.inline-block{
  display:inline-block;
}
.inline{
  display:inline;
}
.float-btns{
  position: fixed;
  z-index: 50;
  bottom: 70px;
  right: 10px;
}
.float-btn-item{
  margin-top: 10px;
  width: 40px;
  height: 40px;
  display: block;
}
.featurette-divider {
  margin: 40px 0;
  margin-top: 40px;
  margin-right: 0px;
  margin-bottom: 40px;
  margin-left: 0px;
}
</style>
