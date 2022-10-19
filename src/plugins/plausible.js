import Plausible from 'plausible-tracker'
import Vue from 'vue';

Vue.use(Plausible);

const plausible = new Plausible({
    apiHost: 'https://plausible.noewen.com',
    trackLocalhost: true
})

plausible.enableAutoPageviews();

export default plausible;