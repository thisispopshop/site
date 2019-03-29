import Vue from "vue";
import Router from "vue-router";

import SubDomainNav from "./views/Subdomains/Navigation.vue";

Vue.use(Router);

/*
To get the subdomain...
path: 'subdomain.thisispopshop.com/'
props: (route) => ({ id: route.query.id})
*/

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [

    //customer route
    {
      path: "/",
      name: "LandingPage",
      component:() =>
        import("./views/Landing/LandingPage.vue")
    },
    {
      path: "/thanks",
      name: "ThanksLandingPage",
      props: (route) => ({ id: 'thanks'}),
      component:() =>
        import("./views/Landing/LandingPage.vue")
    },
    {
      path: "/home",
      name: "sub_nav",
      component: SubDomainNav,
      children : [
        {
          path: "/home",
          name: "sub_home",
          component:() =>
            import("./views/Subdomains/Home.vue")
        },
        {
          path: "/shop",
          name: "shop",
          component:() =>
            import("./views/Subdomains/Shop.vue")
        }
      ]
    },

  ]
});
