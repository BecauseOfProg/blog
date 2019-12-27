import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "blog" */ '../views/blog/Home.vue')
    },
    {
      path: '/blog',
      name: 'all-articles',
      component: () => import(/* webpackChunkName: "blog" */ '../views/blog/List.vue')
    },
    {
      path: '/blog/:page',
      name: 'all-articles',
      component: () => import(/* webpackChunkName: "blog" */ '../views/blog/List.vue')
    },
    {
      path: '/category/:category',
      name: 'category',
      component: () => import(/* webpackChunkName: "blog" */ '../views/blog/List.vue')
    },
    {
      path: '/type/:type',
      name: 'type',
      component: () => import(/* webpackChunkName: "blog" */ '../views/blog/List.vue')
    },
    {
      path: '/article/:url',
      name: 'article',
      component: () => import(/* webpackChunkName: "blog" */ '../views/blog/Article.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import(/* webpackChunkName: "members" */ '../views/members/Account.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/account/create-article',
      name: 'create-article',
      component: () => import(/* webpackChunkName: "members" */ '../views/members/CreateArticle.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/page/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "pages" */ '../views/page/About.vue')
    },
    {
      path: '/page/application',
      name: 'application',
      component: () => import(/* webpackChunkName: "pages" */ '../views/page/Application.vue')
    },
    {
      path: '/page/links',
      name: 'links',
      component: () => import(/* webpackChunkName: "pages" */ '../views/page/Links.vue')
    },
    {
      path: '/page/projects',
      name: 'projects',
      component: () => import(/* webpackChunkName: "pages" */ '../views/page/Projects.vue')
    },
    {
      path: '/page/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "pages" */ '../views/page/Search.vue')
    },
  ]
})
