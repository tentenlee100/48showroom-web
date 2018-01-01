<template>
  <div>
    <div class="container">
      <div class="row ">
        <div class="col-xs-12">
          <div class="inline-block text-left">
            <a class="inline-block" href="https://www.ptt.cc/bbs/AKB48/M.1465937353.A.1BA.html" target="_blank" role="button">
              <button class="btn btn-sm ">使用方式</button>
            </a>
            <div class="inline-block hidden-xs">
              <a href="https://chrome.google.com/webstore/detail/block-showroom-auto-play/bplaohanggidfnokiamhhpoiipnopdne" target="_blank" role="button">
                <button class="btn btn-sm btn-danger">chrome 外掛</button>
              </a>
              <small>停止播放youtube</small>
            </div>
          </div>
          <div class="inline-block pull-right">
            <button @click="reloadAction" class="btn btn-lg btn-info"><i class="fa fa-refresh" aria-hidden="true"></i></button>
          </div>
        </div>
      </div>
      <div class="col-xs-12 text-center " >
        <spinner v-show="loading" class="spinner loading-view" size="Medium"></spinner>
      </div>
      <!-- <template v-if="showImage"> -->
        <live-water-fall :loading="loading" :livingData="livingData" :tpeData="tpeData" :scheduleData="scheduleData" :scheduleLoading="scheduleLoading"   ></live-water-fall>

      <!-- </template>
      <template v-else>
        <live-table :livingData="livingData" :scheduleData="scheduleData" :tpeData="tpeData"  :scheduleLoading="scheduleLoading" ></live-table>
      </template> -->
    </div>
    <div class="float-btns">
      <button @click="openSetting = true" type="button" class="float-btn-item  btn btn-default" data-toggle="modal" data-target="#settingModal"><i class="fa fa-cog" aria-hidden="true" ></i></button>
      <button v-scroll-to="{el: 'body' , duration: 50}" type="button" class="float-btn-item btn btn-default"><i class="fa fa-chevron-up" aria-hidden="true"></i></button>
      <button @click="reloadAction" class="btn btn-info float-btn-item"><i class="fa fa-refresh" aria-hidden="true"></i></button>
    </div>
      <setting-modal :needOpen="openSetting" v-on:closeModal="()=>{this.openSetting = false}"></setting-modal>
  </div>
</template>
<script>
import Spinner from 'vue-simple-spinner'
import SettingModal from './setting/SettingModal'
import LiveWaterFall from './live_waterfall/LiveWaterFall'
import LiveTable from './live_table/LiveTable'


import ApiUrl from '@/config/ApiUrl'
import { mapGetters, mapActions } from 'vuex'
import {
 Modal
} from 'uiv'
export default {
  name: "live",
  data: () => ({
    loading: true,
    scheduleLoading: true,
    openSetting: false,
    livingData: {},
    tpeData: {},
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
      this.callLiveApi()
      this.callTpeApi()
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
    callTpeApi() {
      this.loading = true
      const body = {
        allow: this.userAllow.reduce((sum ,value) => {return sum += value + '|' } , "")
      }
      this.$http.post(ApiUrl.getTpe, body,{emulateJSON:true}).then(response => {
        // get body data
        // this.livingData = response.body

        this.$set(this,'tpeData',response.body)
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
    this.callLiveApi()
    this.callTpeApi()
    this.callScheduleApi()
    setInterval(this.callLiveApi, 60000);
    setInterval(this.callTpeApi, 60000);
    setInterval(this.callScheduleApi, 5*60000);
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
    LiveTable,
    Modal,
    SettingModal
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
