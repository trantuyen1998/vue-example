import Vue from "vue";
import App from "./App.vue";

Vue.directive("bgcolor", {
  bind(el, binding, vnode) {
    el.style.backgroundColor = binding.value;
  }
});
Vue.directive("custom", {
  bind(el, binding, vnode) {
    var delay = 0;
    if (binding.modifiers["delayed"]) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg === "background") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

// filters

Vue.filter("to-uppercase", function(text) {
  return text.toUpperCase();
});

Vue.mixin({
  created() {
    console.log("Global mixins - create hook");
  }
});
new Vue({
  el: "#app",
  render: h => h(App)
});
