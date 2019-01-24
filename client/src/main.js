// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";
import App from "./App";
import router from "./router";

import Navbar from "@/components/Navbar";
import Login from "@/components/Login";

Vue.component("Navbar", Navbar);
Vue.component("Login", Login);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
