import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import './assets/style/global.scss';
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Vuelidate from 'vuelidate'


library.add(faUserSecret, faTrash, faPen)
library.add(faFacebook, faLinkedin, faGithub, faWhatsapp)
library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueMaterial)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
