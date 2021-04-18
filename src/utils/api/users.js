import Vue from 'vue'
import { settings } from '@/utils/data'

let users = Vue.resource(`${settings.api}/users{/username}`)

export { users }
