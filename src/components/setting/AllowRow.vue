<template>
    <div class="col-xs-12 col-md-6">
      <div class="row">
        <div class="form-group">
          <label class="col-xs-6 control-label" for="title">{{allowType.name}}</label>
          <div class="col-xs-6">
            <div class="row">
              <button-group v-model="allowStatus" type="primary">
                <radio selected-value="0">顯示</radio>
                <radio selected-value="1">不要顯示</radio>
              </button-group>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

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

  }
}
</script>
<style scoped>
</style>
