import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import  vueheadful  from "vue-headful";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUpload, faCoffee} from "@fortawesome/free-solid-svg-icons";
import { faHeart , faUser} from "@fortawesome/free-regular-svg-icons";
import {  faInstagram, faTwitter, faFacebook,} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//import emailvalidator from "email-validator";

//import our custom css
//require('~/assets/css/popshopUIhomepage.css');

library.add(faUpload, faCoffee);
library.add(faHeart, faUser);
library.add( faInstagram, faTwitter, faFacebook);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("vue-headful", vueheadful);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
