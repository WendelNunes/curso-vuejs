import "font-awesome/css/font-awesome.css";
import Vue from "vue";

import App from "@/App";

import "@/config/bootstrap";
import "@/config/msg";
import store from "@/config/store";
import router from "@/config/router";

Vue.config.productionTip = false;

// TEMPORARIO
require("axios").defaults.headers.common["Authorization"] = "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IldlbmRlbCBOdW5lcyBEb25pemV0ZSIsImVtYWlsIjoid2VuZGVsLm51bmVzZG9uaXpldGVAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYxNzY0MDYxMywiZXhwIjoxNjE3ODk5ODEzfQ.7GbGF42aUCko-uMzX41nfHq8Wd3iobaiiSpc_K7ZnXg";

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");