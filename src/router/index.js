import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/category/:category',
      name: 'category',
      component: () => import('../views/Category.vue')
    },
    {
      path: '/type/:type',
      name: 'type',
      component: () => import('../views/Type.vue')
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import('../views/articles/Articles.vue')
    },
    {
      path: '/article/:article',
      name: 'article',
      component: () => import('../views/articles/Specific.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/About.vue')
    },
    {
      path: '/about/application',
      name: 'application',
      component: () => import('../views/about/Application.vue')
    }
  ]
})
