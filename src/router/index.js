import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Live from '@/components/Live'
import GetUrl from '@/components/GetUrl'
import HistoryList from '@/components/history/HistoryList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'history',
      component: HistoryList
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Live
    },
    {
      path: '/getUrl',
      name: 'getUrl',
      component: GetUrl
    }
  ]
})
