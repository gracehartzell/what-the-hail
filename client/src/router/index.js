import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";

import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      name: "Home",
      component: Home
    }
  ]
});
