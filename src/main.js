/**
 * @description vue前端通用模板
 * @author weifei
 * @email weifei@mszq.com
 */
import Vue from 'vue'
import App from './App.vue'
/**
 * 路由模块
 */
import router from './router'
/**
 * 状态树模块
 */
import store from './store'
/**
 * 网络接口模块
 */
import http from './http'
/**
 * mock模块
 */
import './mock'
/**
 * 全局工具模块
 */
import utils from './utils'
/**
 * MD5加密组件
 */
import md5 from 'js-md5'
/**
 * 全局插件模块
 */
import { i18n } from './plugins'
/**
 * 全局混入模块
 */
import './mixins'
/**
 * 自定义指令模块
 */
import './directives'
/**
 * 样式模块
 */
import './style/index.scss'

Vue.config.productionTip = false

/**
 * 原型挂载
 */
Vue.prototype.$http = http
Vue.prototype.$utils = utils
Vue.prototype.$md5 = md5

/**
 * 面对疾风吧~~~
 */
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
