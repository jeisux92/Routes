import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import { ROUTES } from "./routes";

Vue.use(VueRouter);
Vue.use(VueResource);

const ROUTER = new VueRouter({
  routes: ROUTES,
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({
  router: ROUTER,
  render: h => h(App)
}).$mount("#app");
