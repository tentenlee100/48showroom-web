// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import {VueMasonryPlugin} from 'vue-masonry';
import VueClipboard from 'vue-clipboard2'
import Snotify from 'vue-snotify'
import VueScrollTo from 'vue-scrollto';
import VueAnalytics from 'vue-analytics'

Vue.use(VueResource)
Vue.use(VueMasonryPlugin)
Vue.use(VueClipboard)
Vue.use(Snotify)
Vue.use(VueScrollTo)
Vue.use(VueAnalytics, {
  id: 'UA-83532357-2',
  router
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
