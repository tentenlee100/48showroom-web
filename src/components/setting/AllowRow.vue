<template>
    <div class="col-12 col-lg-6">
        <div class="form-group">
          <div class="row">
            <label class="col-6 col-form-label">{{allowType.name}}</label>
            <div class="col-6">
              <b-form-radio-group v-model="allowStatus" buttons button-variant="primary">
                <b-form-radio value="0">顯示</b-form-radio>
                <b-form-radio value="1">不要顯示</b-form-radio>
              </b-form-radio-group>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import bFormRadioGroup from 'bootstrap-vue/es/components/form-radio/form-radio-group';
import bFormRadio from 'bootstrap-vue/es/components/form-radio/form-radio';

export default {
  name: "allow-row",
  props: ['allowType'],
  data: () => ({
    // allowStatus: "0"
  }),
  watch: {
    // allowStatus: function(newValue){
    //   if (this.allowStatus == newValue) { return }
    //   if (newValue == "0"){
    //     this.addAllow(this.allowType.type)
    //   }else{
    //     this.deleteAllow(this.allowType.type)
    //   }
    // },
  },
  methods: {
    ...mapActions([
      'deleteAllow',
      'addAllow'
    ])
  },
  computed: {
    allowStatus: {
      get:  function (){
        return this.userAllow.indexOf(this.allowType.type) > -1 ? "0" : "1"
      },
      set: function (newValue){
        if (newValue == "0"){
          this.addAllow(this.allowType.type)
        }else{
          this.deleteAllow(this.allowType.type)
        }
      },
    },
    ...mapGetters([
      'userAllow',
    ])
  },
  created() {
    //do something after creating vue instance
  },
  mounted() {

    //do something after mounting vue instance
  },
  components: {
    'b-form-radio': bFormRadio,
    'b-form-radio-group': bFormRadioGroup,
  }
}
</script>
<style scoped>
</style>
