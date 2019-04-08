/* eslint-disable */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import  vueheadful  from "vue-headful";

import PrettyInput from 'pretty-checkbox-vue/input';
import PrettyCheck from 'pretty-checkbox-vue/check';
import PrettyRadio from 'pretty-checkbox-vue/radio';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUpload, faCoffee, faPlus, faAngleDown, faSearch, faEye} from "@fortawesome/free-solid-svg-icons";
import { faHeart , faUser, faCheckCircle, faCircle} from "@fortawesome/free-regular-svg-icons";
import {  faInstagram, faTwitter, faFacebook,} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueRouter from 'vue-router';
//import emailvalidator from "email-validator";

//import our custom css
//require('~/assets/css/popshopUIhomepage.css');

library.add(faUpload, faCoffee, faPlus, faAngleDown, faSearch, faEye);
library.add(faHeart, faUser, faCheckCircle,  faCircle);
library.add( faInstagram, faTwitter, faFacebook);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("vue-headful", vueheadful);

Vue.component('p-input', PrettyInput);
Vue.component('p-check', PrettyCheck);
Vue.component('p-radio', PrettyRadio);

Vue.config.productionTip = false;

//handle subdomains?
router.beforeEach((to,from,next) => {
  const host = window.location.host;
  const url = host.split('.');
  const subdomain = url[0];
  const domain = "localhost:8080";
  //const domain = "thisispopshop"
  //const domain = url[1];
  //const com = url[2];
  //const firstpage = url[3];
  const firstPage = url[2];

  console.log("directing to : " + subdomain);

  if (subdomain === "www" || subdomain === domain){  //normal page
    if (firstPage === "/thanks")
      next({name:"ThanksLandingPage", params:{id:"thanks"}});
    else
      next();
  } else if (subdomain === "cpaoii"){ //subdomain page
    //console.log(subdomain);
    let org_name  = subdomain;
    to: {path: "sub_nav"};
    next({replace:true, params:{org_name}});
  } else if (subdomain === "taylorvo"){
    //next({path:"/home"}); 
    to: "/home";
    next({replace:true, path:"/home", name:"sub_nav"});
  }
  else {
    //route to error page
    next();
  }

});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
