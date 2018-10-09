import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import jwt from '@/common/jwt'

export default {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = '/api'
  },

  setHeader () {
    Vue.axios.defaults.headers.common['Authorization'] = jwt.getToken()
  },

  query (resource, params) {
    return Vue.axios.get(resource, params)
  },

  get (resource, slug = '') {
    return this.query(resource + '/' + slug, {})
  },

  post (resource, params) {
    return Vue.axios.post(resource, params)
  },

  update (resource, slug, params) {
    return Vue.axios.put(resource + '/' + slug, params)
  },

  put (resource, params) {
    return Vue.axios
      .put(resource, params)
  },

  delete (resource) {
    return Vue.axios
      .delete(resource)
      .catch((error) => {
        throw new Error('Api ' + error)
      })
  }
}
