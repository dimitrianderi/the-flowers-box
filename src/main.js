import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router';
import App from '@/App.vue';
import FontAwesomeIcon from '@/libraries/fontawesome.js';
import '@@/styles/common/normalize.scss';
import '@@/styles/index.scss';

createApp(App)
  .use(createPinia())
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app');
