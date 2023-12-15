import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAddressCard, faChevronLeft, faChevronRight, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faVk, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import router from '@/router'
import App from '@/App.vue'
import './assets/styles/index.scss'

library.add(faRightToBracket, faAddressCard, faUser, faChevronRight, faChevronLeft, faXTwitter, faInstagram, faFacebook);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
