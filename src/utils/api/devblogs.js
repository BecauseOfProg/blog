import Vue from 'vue'
import { settings } from '@/utils/data'

let devblogs = Vue.resource(`${settings.api}/posts{/url}`)

export { devblogs }
