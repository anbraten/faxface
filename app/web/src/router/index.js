import Vue from 'vue'
import Router from 'vue-router'

import jwt from '@/common/jwt'
import api from '@/common/api'
import store from '@/store'
import { CHECK_AUTH } from '@/store/actions.type'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/Wrapper'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Home')
        },
        {
          name: 'send',
          path: 'send',
          component: () => import('@/views/SendFax')
        },
        {
          name: 'fax',
          path: 'fax/:id',
          component: () => import('@/views/ViewFax')
        },
        {
          name: 'pdf',
          path: 'pdf/:id',
          redirect: to => {
            return '/api/pdf/' + to.params.id
          }
        },
        {
          name: 'faxes',
          path: 'faxes/:list',
          component: () => import('@/views/ListFaxes')
        },
        {
          name: 'settings',
          path: '/settings',
          component: () => import('@/views/Settings')
        },
        {
          path: 'admin/',
          component: () => import('@/views/Admin'),
          children: [
            {
              name: 'adminLogs',
              path: 'logs/:category?',
              component: () => import('@/views/AdminLogs')
            }
          ]
        }
      ]
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/Login')
    }
  ]
})

// Ensure we checked auth before each page load.
router.beforeEach((to, from, next) => {
  return Promise
    .all([store.dispatch(CHECK_AUTH)])
    .then(next)
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)

  if (authRequired && !jwt.getToken()) {
    return next('/login')
  }

  if (!!jwt.getToken()) {
    // set header if authenticated
    api.setHeader()
  }

  next()
})

export default router
