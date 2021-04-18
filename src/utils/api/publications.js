import Vue from 'vue'
import { settings } from '@/utils/data'

let publications = Vue.resource(`${settings.api}/publications{/slug}`)

export { publications }
