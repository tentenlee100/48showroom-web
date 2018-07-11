<template>
  <div class="container">
    <div class="d-md-flex d-none   justify-content-between align-items-center">
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
    </div>
    <div class="d-flex my-2">
      <h5 class="ml-auto mr-4">查詢日期</h5>
      <flat-pickr class="date-picker" v-model="date"></flat-pickr>
    </div>
    <div v-if="livingList.length > 0">
      <h3>正在直播中</h3>
        <b-table striped hover  :items="livingList" :fields="fields">
          <template slot="createTime" slot-scope="data">
            {{data.item.createTime.substr(11,5)}}
          </template>
          <template slot="modifyTime" slot-scope="data">
            {{ data.item.living === '1' ? "正在直播中" :  data.item.modifyTime.substr(11,5)}}
          </template>
          <template slot="function" slot-scope="data">
            <a class="btn btn-success" :href="'https://www.showroom-live.com/' + data.item.user_id" target="_blank" role="button">
              <font-awesome-icon icon="external-link-alt" />
            </a>
          </template>

        </b-table>
        <hr/>
    </div>


    <h3>查詢記錄</h3>
    <b-table striped hover :items="items" :fields="fields">
      <template slot="createTime" slot-scope="data">
        {{data.item.createTime.substr(11,5)}}
      </template>
      <template slot="modifyTime" slot-scope="data">
        {{ data.item.living === '1' ? "正在直播中" :  data.item.modifyTime.substr(11,5)}}
      </template>
      <template slot="function" slot-scope="data">
        <!-- A custom formatted data column cell -->
        <a class="btn btn-success" :href="'https://www.showroom-live.com/' + data.item.user_id" target="_blank" role="button">
          <font-awesome-icon icon="external-link-alt" />
        </a>
      </template>

    </b-table>
  </div>
</template>
<script>
import ApiUrl from '@/config/ApiUrl'
import moment from 'moment'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import {
  faCoffee
} from '@fortawesome/fontawesome-free-solid'
export default {
  name: "",
  data: () => ({
    date: moment().local().format(),
    config: {
      wrap: true, // set wrap to true only when using 'input-group'
      altFormat: 'M	j, Y',
      altInput: true,
    },
    loading: false,
    items: [],
    fields: [
      {
        key: 'main_name',
        label: '姓名',
        sortable: false,
      },
      {
        key: 'view_num',
        label: '觀看人數',
        sortable: false,
        thStyle: {width: '140px'}
      },
      {
        key: 'createTime',
        label: '開台時間',
        sortable: true,
        thStyle: {width: '120px'}
      },
      {
        key: 'modifyTime',
        label: '關台時間',
        sortable: true,
        thStyle: {width: '120px'}
      },
      {
        key: 'function',
        label: '功能',
        sortable: false,
        thStyle: {width: '80px'}
      },
    ]
  }),
  watch: {
    date(){
      this.callApi()
    }
  },
  methods: {
    callApi() {
      this.loading = true
      const body = {
        date: moment(this.date).format('YYYY-MM-DD')
      }
      this.$http.post(ApiUrl.getDateHistory, body).then(response => {
        // get body data
        // this.livingData = response.body
        // this.$set(this,'livingData',response.body)
        this.loading = false
        if (response.body.returnCode === '00'){
          this.items = response.body.data
        }else{
          this.items = []
        }
      }, response => {
        this.loading = false
      })
    },
  },
  computed:{
    livingList: function() {
      return this.items.filter(obj => obj.living === '1')
    }
  },
  components: {
    FontAwesomeIcon,
  },
  created() {
    //do something after creating vue instance
    this.callApi()
  },

}
</script>
<style lang="scss" scoped>
</style>
