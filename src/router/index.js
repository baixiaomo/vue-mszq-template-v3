import Vue from 'vue'
import VueRouter from 'vue-router'
import routerEach from './routerEach'

Vue.use(VueRouter)

/**
 * 静态路由
 * @type {*[]}
 */
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/layout'),
    children: [
      {
        path: '',
        redirect: 'index'
      },
      {
        path: 'index',
        name: 'Dashboard',
        component: () => import('../views/dashboard')
      },
      {
        path: 'system',
        name: 'System',
        component: () => import('../views/system'),
        children: [
          {
            path: '',
            redirect: 'user'
          },
          {
            path: 'user',
            name: 'User',
            component: () => import('../views/system/user')
          },
          {
            path: 'menu',
            name: 'Menu',
            component: () => import('../views/system/menu')
          },
          {
            path: 'dept',
            name: 'Dept',
            component: () => import('../views/system/dept')
          },
          {
            path: 'role',
            name: 'Role',
            component: () => import('../views/system/role')
          },
          {
            path: 'dict',
            name: 'Dict',
            component: () => import('../views/system/dict')
          },
          {
            path: 'params',
            name: 'Params',
            component: () => import('../views/system/params')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

routerEach(router)

export default router
