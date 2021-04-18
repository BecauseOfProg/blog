import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "blog" */ '@/views/blog/Home.vue')
    },
    {
      path: '/blog',
      name: 'all-publications',
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
      path: '/article/:slug',
      name: 'publication',
      component: () => import(/* webpackChunkName: "blog" */ '@/views/blog/Publication.vue')
    },
    {
      path: '/devblog',
      name: 'devblogs',
      component: () => import(/* webpackChunkName: "devblog" */ '@/views/devblog/DevBlogs.vue')
    },
    {
      path: '/devblog/:slug',
      name: 'devblog',
      component: () => import(/* webpackChunkName: "devblog" */ '@/views/devblog/DevBlog.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import(/* webpackChunkName: "members" */ '@/views/members/Account.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/staff',
      name: 'staff',
      component: () => import(/* webpackChunkName: "staff" */ '@/views/staff/Skeleton.vue'),
      meta: { requiresAuth: true, requiresStaff: true }
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
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      if (
        (to.matched.some(record => record.meta.requiredPermission !== undefined && !store.state.user.data.permissions.includes(record.meta.requiredPermission)))
        || (to.matched.some(record => record.meta.requiresStaff !== undefined && !store.state.user.data.permissions.length))
      ){
        next({ name: 'home' })
        store.commit('SHOW_SNACKBAR', {
          error: true,
          message: 'errors.forbidden'
        })
      }
      else next()
    } else {
      next({ name: 'home' })
      store.commit('SHOW_SNACKBAR', {
        error: true,
        message: 'errors.unauthorized'
      })
    }
  } else next()
})

export default router
