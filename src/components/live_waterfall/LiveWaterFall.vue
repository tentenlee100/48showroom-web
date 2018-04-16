<template>
    <div class="row">

    <div class="col-xs-12" >
      <div class="row">
        <template v-for="live in livingData">
          <live-type :data="live"></live-type>
        </template>
        <template v-if="((livingData && livingData.length == 0) && (tpeData && tpeData.length == 0)) && !loading ">
          <h1  class="text-center">目前沒有成員開台</h1>
        </template>
      </div>
    </div>
    <div  class="col-xs-12">
      <hr class="featurette-divider"/>
    </div>
    <div  class="col-xs-12">
      <div class="row">
        <h1 class="text-center">預計開播成員時程表</h1>
        <div class="col-xs-12 text-center " >
          <spinner v-show="scheduleLoading" class="spinner loading-view" size="Medium"></spinner>
        </div>
        <div v-masonry transition-duration="0.3s" item-selector=".item">
          <template v-masonry-tile v-for="live in scheduleData">
            <!-- block item markup -->
            <schedule-cell :data="live"></schedule-cell>
          </template>
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
  name:"live-water-fall",
  props: ['loading','livingData','scheduleData','scheduleLoading' ],
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
