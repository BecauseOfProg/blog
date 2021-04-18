import Vue from 'vue'
import { settings } from '@/utils/data'

let comments = Vue.resource(`${settings.api}/comments{/post_type}{/post_slug}{/comment_slug}`)

export { comments }
