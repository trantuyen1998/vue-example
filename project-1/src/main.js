import Vue from "vue";
import App from "./App.vue";
import vueRouter from "vue-router";
import vueResource from "vue-resource";

import { routes } from "./routes";
import store from "./store/store";

Vue.use(vueRouter);
Vue.use(vueResource);

Vue.http.options.root =
  "https://vue-stock-project-9b90a-default-rtdb.firebaseio.com/";
Vue.filter("currency", value => {
  return "$" + value;
});
const router = new vueRouter({
  routes,
  mode: "history"
});
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
