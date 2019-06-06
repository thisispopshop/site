/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import auth from "@/Auth";

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
      path: "/dashboard",
      name: 'admin_navigation',
      component: AdminNav,
      children : [
        {
          path: "/dashboard",
          name: "dashboard",
          beforeEnter: requireAuth,
          component:() =>
            import("./views/Admin/Dashboard.vue")
        },{
          path: "/login",
          name: "oktalogin",
          component: () => 
            import("./views/Admin/OktaLogin.vue")
        },{
          path: "/logout",
          name: "oktalogout",
          beforeEnter (to, from, next) {
            const answer = window.confirm('Ready to log out?')
            if (answer) {
              auth.logout()
              next('/login')
            } else {
              next(false)
            }
          }
        },
        {
          path: "/organizations",
          name: "organizations",
          beforeEnter: requireAuth,
          component:() =>
            import("./views/Admin/Organizations.vue")
        },
        {
          path: "/curate",
          name: "curate",
          beforeEnter: requireAuth,
          component:() =>
            import("./views/Admin/Curate.vue")
        },
        {
          path: "/curate1",
          name: "curate1",
          beforeEnter: requireAuth,
          component:() =>
            import("./views/Admin/Curate.1.vue")
        },
        {
          path: "/collections",
          name: "collections",
          beforeEnter: requireAuth,
          component:() =>
            import("./views/Admin/Collections.vue")
        },
        {
          path: "/product/:id",
          name: "product_details",
          beforeEnter: requireAuth,
          component: () =>
            import("./views/Admin/ProductDetails.vue")
        }
      ]
    }

  ]
});


function requireAuth (to,from,next){
  if (!auth.loggedIn()) {
    console.log('not logged in')
    /*next({
      path: '/login',
      query: {redirect: to.fullPath}
    })*/
    next("/login")
  } else {
    console.log('is logged in')
    next()
  }
}

//export default router;

/**
 * 
 * 
 *       beforeEnter (to,from,next) {
        if (!auth.loggedIn()) {
          console.log("not logged in")
          next({
            path: 'login',
            //query: {redirect: to.fullPath}
          })
        } else {
          console.log('is logged in')
          next()
        }
      },
 */
