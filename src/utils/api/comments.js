import Vue from 'vue'
import { settings } from '@/utils/data'

let comments = Vue.resource(`${settings.api}/comments{/post}{/slug}`)

export { comments }
