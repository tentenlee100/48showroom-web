import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
import * as getters from './getters'
import agendaGroupList from './modules/agendaGroupList'
import setting from './modules/setting'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  getters,
  modules: {
    agendaGroupList,
    setting
  },
  strict: debug,
})
