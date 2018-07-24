import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/Home.vue')
const Categories = () => import('../views/Categories.vue')
const Types = () => import('../views/Types.vue')
const Article = () => import('../views/Article.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/types',
      name: 'Types',
      component: Types
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    }
  ]
})
