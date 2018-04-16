<template>
  <div  class="col-xs-12">
    <div class="row ">
      <h4>{{data.name}}</h4>
      <div v-masonry transition-duration="0.1s"  item-selector=".item">
        <div v-masonry-tile   v-for="live in data.lives">
          <template v-if="data.type == 'tpe'">
            <live-tpe-cell  :data="live"></live-tpe-cell>
            </template>
            <template v-else >
              <live-cell :data="live"></live-cell>
            </template>
          </div>
        </div>
      </div>
    </div>

</template>
<script>
import LiveCell from './LiveCell'

export default {
  name: "live-type",
  props: ['data'],
  data: () => ({

  }),
  components: {
    LiveCell,
  }
}
</script>
<style scoped>
</style>
