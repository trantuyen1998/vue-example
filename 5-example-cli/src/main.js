import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./route";
import { store } from "./store/store";

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    //  save position of scroll to
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

//set up protect route
router.beforeEach((to, from, next) => {
  next();
});
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
