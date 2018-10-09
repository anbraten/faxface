import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import api from '@/common/api'

// Vue.config.productionTip = false

api.init()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view></router-view>',
})
