import Vue from 'vue'
import { VuePlausible } from 'vue-plausible'

Vue.use(VuePlausible, {
    apiHost: 'https://plausible.becauseofprog.fr'
})

Vue.$plausible.enableAutoPageviews() // optional
