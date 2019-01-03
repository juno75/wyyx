
import Vue from 'vue'
import App from './App'
import router from './router'

// mock数据
import './mock/mockServer'
//注册store
import store from './store'

import Split from './components/Split/Split.vue'

// 注册为全局组件标签
Vue.component('Split', Split);


new Vue({
  el: '#app',
  render: h => h(App),
  components: { App },
  template: '<App/>',
  router,
  store
})
