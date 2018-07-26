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
      component: () => import('../views/categories/Categories.vue')
    },
    {
      path: '/category/:category',
      name: 'Specific category',
      component: () => import('../views/categories/Specific.vue')
    },
    {
      path: '/types',
      name: 'Types',
      component: () => import('../views/types/Types.vue')
    },
    {
      path: '/type/:type',
      name: 'Specific type',
      component: () => import('../views/types/Specific.vue')
    },
    {
      path: '/articles',
      name: 'Articles',
      component: () => import('../views/articles/Articles.vue')
    },
    {
      path: '/article/:article',
      name: 'Specific article',
      component: () => import('../views/articles/Specific.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/about/About.vue')
    },
    {
      path: '/about/application',
      name: 'Application',
      component: () => import('../views/about/Application.vue')
    }
  ]
})
