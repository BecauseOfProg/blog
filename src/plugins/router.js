import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "blog" */ '@/views/blog/Home.vue')
    },
    {
      path: '/social',
      name: 'social',
      component: () => import(/* webpackChunkName: "blog" */ '@/views/blog/Social.vue')
    },
    {
      path: '/blog',
      name: 'all-articles',
      component: () => import(/* webpackChunkName: "blog" */ '@/views/blog/List.vue')
    },
    {
      path: '/category/:category',
      name: 'category',
      component: () => import(/* webpackChunkName: "blog" */ '@/views/blog/List.vue')
    },
    {
      path: '/type/:type',
      name: 'type',
      component: () => import(/* webpackChunkName: "blog" */ '@/views/blog/List.vue')
    },
    {
      path: '/article/:url',
      name: 'article',
      component: () => import(/* webpackChunkName: "blog" */ '@/views/blog/Article.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import(/* webpackChunkName: "members" */ '@/views/members/Account.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/staff/create-article',
      name: 'create-article',
      component: () => import(/* webpackChunkName: "staff" */ '@/views/staff/CreateArticle.vue'),
      meta: { requiresAuth: true, requiredPermission: 'BLOG_WRITE' }
    },
    {
      path: '/staff/articles',
      name: 'manage-articles',
      component: () => import(/* webpackChunkName: "staff" */ '@/views/staff/Articles.vue'),
      meta: { requiresAuth: true, requiredPermission: 'BLOG_WRITE' }
    },
    {
      path: '/pages',
      name: 'pages',
      component: () => import(/* webpackChunkName: "pages" */ '@/views/page/Pages.vue')
    },
    {
      path: '/page/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "pages" */ '@/views/page/About.vue')
    },
    {
      path: '/page/app',
      name: 'application',
      component: () => import(/* webpackChunkName: "pages" */ '@/views/page/Application.vue')
    },
    {
      path: '/page/projects',
      name: 'projects',
      component: () => import(/* webpackChunkName: "pages" */ '@/views/page/Projects.vue')
    },
    {
      path: '/page/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "pages" */ '@/views/page/Search.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      if (to.matched.some(record => record.meta.requiredPermission !== undefined && !store.state.user.data.permissions.includes(record.meta.requiredPermission))) {
        console.log('no permission')
        next({ name: 'home' })
        store.commit('SHOW_SNACKBAR', {
          error: true,
          message: "Erreur : vous n'avez pas les permissions nécessaires pour consulter cette page."
        })
      } else {
        console.log('permission')
        next()
      }
    } else {
      next({ name: 'home' })
      store.commit('SHOW_SNACKBAR', {
        error: true,
        message: 'Erreur : vous devez être connecté pour consulter cette page.'
      })
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
