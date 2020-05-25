import Vue from 'vue'

// import darkgoldtheme from './theme/dark-gold-theme.js'
// import darkbluetheme from './theme/dark-blue-theme.js'
// import lightwhitetheme from './theme/light-white-theme.js'

const echarts = require('echarts/lib/echarts')

require('echarts/lib/chart/line')
require('echarts/lib/chart/scatter')
require('echarts/lib/component/toolbox')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
require('echarts/lib/component/legendScroll')
require('echarts/lib/component/markPoint')

// echarts.registerTheme('darkgoldtheme', darkgoldtheme)
// echarts.registerTheme('darkbluetheme', darkbluetheme)
// echarts.registerTheme('lightwhitetheme', lightwhitetheme)

Vue.prototype.$echarts = echarts
