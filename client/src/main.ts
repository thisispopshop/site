/* eslint-disable */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import auth from "./auth";

import  vueheadful  from "vue-headful";
import vueScrollto from 'vue-scrollto';

import PrettyInput from 'pretty-checkbox-vue/input';
import PrettyCheck from 'pretty-checkbox-vue/check';
import PrettyRadio from 'pretty-checkbox-vue/radio';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUpload, faCoffee, faPlus, faAngleDown, faSearch, faEye, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { faHeart , faUser, faCheckCircle, faCircle, faEdit} from "@fortawesome/free-regular-svg-icons";
import {  faInstagram, faTwitter, faFacebook,} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//import VueRouter from 'vue-router';
//import emailvalidator from "email-validator";

//import our custom css
//require('~/assets/css/popshopUIhomepage.css');

library.add(faUpload, faCoffee, faPlus, faAngleDown, faSearch, faEye, faArrowLeft);
library.add(faHeart, faUser, faCheckCircle,  faCircle, faEdit);
library.add( faInstagram, faTwitter, faFacebook);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("vue-headful", vueheadful);
//Vue.component('VueScrollTo', vueScrollto);
Vue.use(vueScrollto);

Vue.component('p-input', PrettyInput);
Vue.component('p-check', PrettyCheck);
Vue.component('p-radio', PrettyRadio);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

const host = window.location.hostname;
const path = window.location.pathname;
const url = host.split('.');
const subdomain = url[0];

/*
//DEVELOPMENT
const domain = "localhost:8080";
// redirect to home page or not
if (subdomain === "admin"){
    if (path === "/"){
      router.push({path:"dashboard"})
    } else {
      router.push({path:path})
    }
}
else if (subdomain === domain){  //normal page
    const ending = url[1];
    const firstPage = ending.slice(4);
    //console.log(firstPage);
    router.push({path:"ThanksLandingPage",params:{id:"thanks"}});
    //if (firstPage === "/thanks")
    //    router.push({name:"ThanksLandingPage", params:{id:"thanks"}});
  }
else {
  if (path === "/"){
    router.push({path:"home"});
  } else {
    router.push({path:path})
  }
}
*/


//production
const domain = "thisispopshop";
if (subdomain === "www" ){
  const ending = url[2];
  const firstPage = ending.slice(4);
  //console.log(firstPage);
  //router.push(firstPage);
  if (firstPage === "/thanks")
        router.push({path:"ThanksLandingPage", params:{id:"thanks"}});
  }
  else if (subdomain === "admin"){
    if (path === "/"){
      router.push({path:"dashboard"})
    } else {
      router.push({path:path})
    }
  }
  else if (subdomain === domain){  //normal page
    const ending = url[1];
    const firstPage = ending.slice(4);
    //console.log(firstPage);
    //router.push(firstPage);
    if (firstPage === "/thanks")
        router.push({path:"ThanksLandingPage", params:{id:"thanks"}});
}
 else {
  if (path === "/"){
    router.push({path:"home"});
  } else {
    router.push({path:path})
  }
}