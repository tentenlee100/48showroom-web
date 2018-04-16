<template>
<b-modal v-model="openSetting" size="lg" title="設定" @hidden="onclose">

  <div class="row">
    <div class="col-12">
      <div class="row">
        <!-- Text input-->
        <template v-for="allowType in allAllowType">
                <allow-row :allowType="allowType"></allow-row>
            </template>
      </div>
    </div>
    <div class="col-12">
      <hr>
    </div>
    <div class="col-12 px-3 d-flex flex-column flex-lg-row justify-content-start justify-content-lg-around align-items-stretch">
      <!-- Text input-->
      <div class="form-group">
        <div class="row">
          <label class="col-6 col-form-label">是否要顯示低畫質</label>
          <div class="col-6">
            <b-form-radio-group v-model="lowUrlStatus" buttons button-variant="primary">
              <b-form-radio value="0">顯示</b-form-radio>
              <b-form-radio value="1">不要顯示</b-form-radio>
            </b-form-radio-group>
          </div>
        </div>
      </div>

      <div class="form-group  ">
        <div class="row">

        <label class="col-6 col-form-label">是否要顯示圖片</label>
        <div class="col-6">
          <b-form-radio-group v-model="showImageStatus" buttons button-variant="primary">
            <b-form-radio value="0">顯示</b-form-radio>
            <b-form-radio value="1">不要顯示</b-form-radio>
          </b-form-radio-group>
        </div>
      </div>

      </div>

    </div>
    <div class="col-12">
      <hr/>
    </div>
    <div class="col-12 d-flex">
      <h4 class="m-0 ml-auto p-0"><small>若有幫助到你，歡迎贊助我</small></h4>
      <a style=" display:inline; margin-bottom: 5px; margin-right: 10px; margin-left: 10px;" target="_blank" href="https://p.allpay.com.tw/Vzg5f">
            <img style="height: 40px; display:inline; margin-bottom: 10px;"  src="https://payment.allpay.com.tw/Content/themes/WebStyle201404/images/allpay.png" />
          </a>
    </div>

  </div>
  <div slot="modal-footer">
    <button type="button" class="btn btn-default" @click="()=>{this.openSetting = false ; this.onclose()}">關閉</button>
  </div>
</b-modal>
</template>
<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
import AllowRow from './AllowRow'
import bModal from 'bootstrap-vue/es/components/modal/modal';
import bFormRadioGroup from 'bootstrap-vue/es/components/form-radio/form-radio-group';
import bFormRadio from 'bootstrap-vue/es/components/form-radio/form-radio';
import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';


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
    AllowRow,
    'b-modal': bModal,
    'b-form-radio': bFormRadio,
    'b-form-radio-group': bFormRadioGroup,
    'b-modal': bModal,
    'b-form-group': bFormGroup,

  }
}
</script>
<style scoped>
</style>
