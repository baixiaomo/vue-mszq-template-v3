/**
 * 全局状态树模块
 * 请将具体的状态按module分类，然后在此注入，例app模块
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app
  },
  getters
})
