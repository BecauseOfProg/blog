import Vue from 'vue'
import { settings } from '@/utils/data'

let devblogs = Vue.resource(`${settings.api}/devblogs{/slug}`)

export { devblogs }
