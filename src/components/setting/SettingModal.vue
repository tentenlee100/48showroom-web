<template>
<modal v-model="openSetting" title="設定" :large="true" @closed="onclose">
  <div slot="default">
    <div class="row">
      <div class="col-xs-12">
        <div class="form-horizontal">
          <!-- Text input-->
          <template v-for="allowType in allAllowType">
                <allow-row :allowType="allowType"></allow-row>
            </template>
        </div>
      </div>
      <div class="col-xs-12">
        <hr>
      </div>
      <div class="col-xs-12">
        <div class="form-horizontal">
          <!-- Text input-->
          <div class="col-xs-12 col-md-6">
            <div class="row">
              <div class="form-group">
                <label class="col-xs-6 control-label" for="title">是否要顯示低畫質</label>
                <div class="col-xs-6">
                  <div class="row">
                    <button-group v-model="lowUrlStatus" type="primary">
                      <radio selected-value="0">顯示</radio>
                      <radio selected-value="1">不要顯示</radio>
                    </button-group>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-md-6">
            <div class="row">
              <div class="form-group">
                <label class="col-xs-6 control-label" for="title">是否要顯示圖片</label>
                <div class="col-xs-6">
                  <div class="row">
                    <button-group v-model="showImageStatus" type="primary">
                      <radio selected-value="0">顯示</radio>
                      <radio selected-value="1">不要顯示</radio>
                    </button-group>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12">
        <hr/>
      </div>
      <div class="col-xs-12">
        <div class="pull-right">
          <div class="noMargin" style="display:inline-block; padding : 0px ;">
            <h4 class="noMargin" style="padding : 0px ;"><small>若有幫助到你，歡迎贊助我</small></h4>
          </div>
          <a style=" display:inline; margin-bottom: 5px; margin-right: 10px; margin-left: 10px;" target="_blank" href="https://p.allpay.com.tw/Vzg5f">
            <img style="height: 40px; display:inline; margin-bottom: 10px;"  src="https://payment.allpay.com.tw/Content/themes/WebStyle201404/images/allpay.png" />
          </a>
        </div>
      </div>

    </div>
  </div>
  <div slot="modal-footer" class="modal-footer">
    <button type="button" class="btn btn-default" @click="()=>{this.openSetting = false ; this.onclose()}">關閉</button>
  </div>
</modal>
</template>
<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
import AllowRow from './AllowRow'

export default {
  name: "setting-modal",
  props: ['needOpen'],
  data: () => ({
    openSetting: false,
  }),
  watch: {
    needOpen: function(newValue) {
      this.openSetting = newValue
    }
  },
  methods: {
    onclose() {
      this.$emit('closeModal')
    },
    ...mapActions([
      'updateShowLowUrl',
      'updateShowImage'
    ])
  },
  computed: {
    lowUrlStatus: {
      get: function() {
        return this.showLowUrl ? "0" : "1"
      },
      set: function(newValue) {
        this.updateShowLowUrl(newValue == "0" ? true : false)
      },
    },
    showImageStatus: {
      get: function() {
        return this.showImage ? "0" : "1"
      },
      set: function(newValue) {
        this.updateShowImage(newValue == "0" ? true : false)
      },
    },
    ...mapGetters([
      'allAllowType',
      'showLowUrl',
      'showImage',
    ])
  },
  components: {
    AllowRow
  }
}
</script>
<style scoped>
</style>
