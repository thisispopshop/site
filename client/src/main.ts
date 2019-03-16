import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUpload, faUser, faCoffee} from "@fortawesome/free-solid-svg-icons";
import {  faInstagram, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import  vueheadful  from "vue-headful";
//import emailvalidator from "email-validator";

library.add(faUpload, faUser, faCoffee, faInstagram, faTwitter, faFacebook);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("vue-headful", vueheadful);
//Vue.component("EmailValidator", emailvalidator);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
