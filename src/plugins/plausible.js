import Vue from 'vue'
import { VuePlausible } from 'vue-plausible'

Vue.use(VuePlausible, {
    apiHost: 'https://plausible.noewen.com'
})

Vue.$plausible.enableAutoPageviews() // optional
