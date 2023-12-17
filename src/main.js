import { createApp } from 'vue'
import router from '@/router'
import App from '@/App.vue'
import FontAwesomeIcon from '@/libraries/fontawesome.js'
import './assets/styles/index.scss'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
