import Vue from 'vue'
import App from './App.vue'

// FONTAWESOME IMPORT 

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faMagnifyingGlass, faChevronDown, faLayerGroup, faMaximize, faChevronRight, faArrowRight, faArrowUp, faGear} from '@fortawesome/free-solid-svg-icons'

import { faGithub, faStackOverflow, faChromecast, faFacebookF, faInstagram, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

import { faUser, faSquarePlus, faCircleCheck, faEnvelope } from '@fortawesome/free-regular-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faGithub, faStackOverflow, faUser, faMagnifyingGlass, faChevronDown, faLayerGroup, faChromecast, faMaximize, faSquarePlus, faChevronRight, faCircleCheck, faArrowRight,  faFacebookF, faInstagram, faTwitter, faLinkedinIn, faEnvelope, faArrowUp, faGear)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
