import Vue from 'vue'
import { settings } from '@/utils/data'

let blogPosts = Vue.resource(`${settings.api}/blog-posts{/id}`)

export { blogPosts }
