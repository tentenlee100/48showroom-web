<template>
  <div>
    <div class="col-md-12 ">
          <div class="row">
            <div class="panel panel-default panel-table ">
              <div class="panel-body">
                <div class="table-responsive">
                  <table class="table table-striped table-bordered table-list">
                    <thead>
                      <tr>
                        <th><span class="glyphicon glyphicon-cog" aria-hidden="true"></span></th>
                        <th>名稱</th>
                        <th>開始時間</th>
                        <th>觀看人數</th>
                        <th>類型</th>
                      </tr>
                    </thead>
                    <tbody>
                      <template v-for="types in livingData">
                        <template v-for="item in types.lives">
                          <live-table-cell :item="item" :type="types.name"></live-table-cell>
                        </template>
                    </template>
                    <template v-for="types in tpeData">
                      <template v-for="item in types.lives">
                        <live-table-cell :item="item" :type="types.name"></live-table-cell>
                      </template>
                  </template>
                    </tbody>
                  </table>
                  <div class="text-center">
                      <h2> <strong>預計開台</strong></h2>
                  </div>

                  <table class="table table-striped table-bordered table-list">
                    <thead>
                      <tr>
                        <th><span class="glyphicon glyphicon-cog" aria-hidden="true"></span></th>
                        <th>名稱</th>
                        <th>預計開台時間</th>
                      </tr>
                    </thead>
                    <tbody>
                      <template v-for="item in scheduleData">
                        <!-- <news-cell v-on:reload="reload" v-on:edit="edit"  v-on:deleteNews="deleteNews" v-on:callUpdateStatusApi="callUpdateStatusApi" :newsData="news" ></news-cell> -->
                        <schedule-table-cell :item="item"></schedule-table-cell>

                      </template>

                    </tbody>
                  </table>

                </div>
              </div>

            </div>

          </div>
        </div>
  </div>
</template>
<script>
import LiveTableCell from './LiveTableCell'
import ScheduleTableCell from './ScheduleTableCell'

export default {
  name: "live-table",
  props: ['livingData','scheduleData','scheduleLoading' ,'tpeData'],
  data: () => ({

  }),
  components: {
    LiveTableCell,
    ScheduleTableCell
  }
}
</script>
<style scoped>
.inline {
  display: inline;
}

.inline-block {
  display: inline-block;
}

.spinner {
  margin-left: 10px;
}

.panel-table .panel-body {
  padding: 0;
}

.panel-table .panel-body .table-bordered {
  border-style: none;
  margin: 0;
}

.panel-table .panel-body .table-bordered>thead>tr>th:first-of-type {
  text-align: center;
  width: 120px;
}
.panel-table .panel-body .table-bordered>thead>tr>th:last-of-type,
.panel-table .panel-body .table-bordered>tbody>tr>td:last-of-type {
  border-right: 0px;
}

.panel-table .panel-body .table-bordered>thead>tr>th:first-of-type,
.panel-table .panel-body .table-bordered>tbody>tr>td:first-of-type {
  border-left: 0px;
}

.panel-table .panel-body .table-bordered>tbody>tr:first-of-type>td {
  border-bottom: 0px;
}

.panel-table .panel-body .table-bordered>thead>tr:first-of-type>th {
  border-top: 0px;
}

.panel-table .panel-footer .pagination {
  margin: 0;
}
/*
used to vertically center elements, may need modification if you're not using default sizes.
*/

.panel-table .panel-footer .col {
  line-height: 34px;
  height: 34px;
}

.panel-table .panel-heading .col h3 {
  line-height: 30px;
  height: 30px;
}

.panel-table .panel-body .table-bordered>tbody>tr>td {
  line-height: 34px;
}
</style>
