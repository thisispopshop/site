/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";

import SubDomainNav from "./views/Subdomains/Navigation.vue";
import AdminNav from "./views/Admin/Navigation.vue";

Vue.use(Router);

export default new Router({
//const router = new Router({
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
      //props:true,
      props: (route) => ({org_name: route.params.org_name}),
      component: SubDomainNav,
      children : [
        {
          path: "/home",
          name: "sub_home",
          //props: true,
          props: (route) => ({org_name: route.params.org_name}),
          meta: true,
          component:() =>
            import("./views/Subdomains/Home.vue")
        },
        {
          path: "/shop/:oid",
          name: "shop",
          props: true,
          meta: true,
          component:() =>
            import("./views/Subdomains/Shop.vue")
        },
        {
          path: "/info",
          name: "info",
          props: true,
          meta: true,
          component:() =>
            import("./views/Subdomains/Info.vue")
        },
        {
          path: "/submit",
          name: "submit",
          meta: true,
          component:() =>
            import("./views/Subdomains/Submit.vue")
        },
        {
          path: "/error",
          name: "error",
          meta: true,
          component:() =>
            import("./views/Subdomains/Error.vue")
        }
      ]
    }, {
      path: "/admin",
      name: 'admin_navigation',
      component: AdminNav,
      children : [
        {
          path: "/admin",
          name: "organizations",
          component:() =>
            import("./views/Admin/Organizations.vue")
        },
        {
          path: "/admin/curate",
          name: "curate",
          component:() =>
            import("./views/Admin/Curate.vue")
        },
        {
          path: "/admin/collections",
          name: "collections",
          component:() =>
            import("./views/Admin/Collections.vue")
        },
      ]
    }

  ]
});

//export default router;
