<template>
<div class="row">
  <div class="mt-4">
    <p>由於SHOWROOM官方已經將過於大量的訪問的ip直接禁止觀看，所以目前此網頁無法達成過去以往的功能。</p>
    <p>若要使用以往功能，請使用此<a href="https://bit.ly/2HjQza9" target="_blank">chrome 外掛</a>，可以過濾顯示48group的直播帳號，達到過去的功能。</p>
    <p>此網站會轉型成其他模式提供資訊，敬請期待一下</p>
  </div>
  <!-- <div class="col-12">
    <template v-for="live in livingData">
          <live-type :data="live"></live-type>
        </template>
    <template v-if="((livingData && livingData.length == 0) && (tpeData && tpeData.length == 0)) && !loading ">
          <h1 class="text-center">目前沒有成員開台</h1>
      </template>
  </div> -->
  <div class="col-12">
    <hr class="featurette-divider" />
  </div>
  <div class="col-12">

    <h1 class="text-center ml-auto align-self-center">預計開播成員時程表</h1>
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <spinner v-show="scheduleLoading" class="spinner loading-view" size="Medium"></spinner>
      </div>
      <div class="col-12 px-0" >
        <div v-masonry transition-duration="0.3s" item-selector=".item">
          <template v-masonry-tile v-for="live in scheduleData">
                <!-- block item markup -->
                <schedule-cell :data="live"></schedule-cell>
              </template>
        </div>
      </div>
    </div>

  </div>
</div>
</template>
<script>
import LiveType from './LiveType'
import ScheduleCell from './ScheduleCell'
import Spinner from 'vue-simple-spinner'
export default {
  name: "live-water-fall",
  props: ['loading', 'livingData', 'scheduleData', 'scheduleLoading'],
  data: () => ({

  }),
  components: {
    LiveType,
    ScheduleCell,
    Spinner
  }
}
</script>
<style scoped>
</style>
