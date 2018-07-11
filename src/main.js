// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import VueClipboard from 'vue-clipboard2'
import Snotify from 'vue-snotify'
import VueScrollTo from 'vue-scrollto';
import VueAnalytics from 'vue-analytics'
import BootstrapVue from 'bootstrap-vue'
// You need a specific loader for CSS files
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

Vue.use(flatPickr);
Vue.use(BootstrapVue);
Vue.use(VueResource)
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
