<template>
<tr>
  <td align="center">
    <span class="input-group-btn">
        <a class="btn btn-info" :href="'https://www.showroom-live.com/' + item.id" target="_blank" role="button"><i class="fa fa-external-link" aria-hidden="true"></i></a>
    </a>
    </span>
  </td>
  <td>{{item.name}}</td>
  <td>{{item.onLiveTime}}</td>
</tr>
</template>

<script>

export default {
  name: 'schedule-table-cell',
  props: ['item'],
  data: () => {
    return {

    }
  },
  methods: {

  },
  computed: {

  },
}
</script>

<style scoped >
</style>
