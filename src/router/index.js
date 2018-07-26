import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/categories',
      name: 'Categories',
      component: () => import('../views/Categories.vue')
    },
    {
      path: '/types',
      name: 'Types',
      component: () => import('../views/Types.vue')
    },
    {
      path: '/article',
      name: 'Article',
      component: () => import('../views/Article.vue')
    },
    {
      path: '/about',
      children: [
        {
          path: '',
          component: () => import('../views/about/About.vue')
        },
        {
          path: 'application',
          component: () => import('../views/about/Application.vue')
        }
      ]
    }
  ]
})
