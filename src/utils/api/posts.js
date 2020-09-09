import Vue from 'vue'
import { settings } from '@/utils/data'

let posts = Vue.resource(`${settings.api}/posts{/url}`)

export { posts }
