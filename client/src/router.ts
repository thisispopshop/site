import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    //customer route
    {
      path: "/",
      name: "LandingPage",
      component:() =>
        import("./views/LandingPage.vue")
    },
    /*
    {
      path: "/",
      name: "Home",
      component:() =>
        import("./views/Home.vue")
    }*/
  ]
});
