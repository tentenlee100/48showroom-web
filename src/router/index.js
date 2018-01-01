import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Live from '@/components/Live'
import GetUrl from '@/components/GetUrl'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'live',
      component: Live
    },
    {
      path: '/getUrl',
      name: 'getUrl',
      component: GetUrl
    }
  ]
})
