<template>
<tr>
  <td align="center">
    <span class="input-group-btn input-group-sm">
        <button type="button" class="btn btn-sm btn-warning" v-clipboard:copy="item.streamingUrl" v-clipboard:success="onCopy"  v-clipboard:error="onError">
          <i class="fa fa-clipboard" aria-hidden="true"></i>
        </button>
        <a class="btn btn-sm btn-info" :href="openShowroomUrl" target="_blank" role="button"><i class="fa fa-external-link" aria-hidden="true"></i></a>
        <a class="btn btn-sm btn-success" type="button" :href="item.rtmpUrl">
          <i class="fa fa-play" aria-hidden="true"></i>
    </a>
    </span>
  </td>
  <td>{{item.main_name}}</td>
  <td>{{item.started_at}}</td>
  <td>{{item.view_num}}</td>
  <td>{{type}}</td>
</tr>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'live-table-cell',
  props: ['item','type'],
  data: () => {
    return {

    }
  },
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
    openShowroomUrl: function(){
      return this.isMobile ? "showroom://room?room_id=" + this.item.room_id : "https://www.showroom-live.com/" + this.item.room_url_key
    },
    ...mapGetters([
      'isMobile',
    ])
  },
}
</script>

<style scoped >
</style>
