import { createApp } from 'vue';
import App from './App.vue';
// style
import './assets/scss/general.scss';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faLinkSlash, faBicycle, faCloud, faHeartPulse, faFacebookF, faTwitter, faInstagram)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
