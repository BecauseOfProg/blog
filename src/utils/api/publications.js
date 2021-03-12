import Vue from 'vue'
import { settings } from '@/utils/data'

let publications = Vue.resource(`${settings.api}/blog-posts{/url}`)

export { publications }
