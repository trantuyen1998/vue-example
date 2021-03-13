import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter";
import * as actions from "./actions";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 2
  },
  getters: {
    value: state => {
      return state.value;
    }
  },
  mutations: {
    updatedValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions,
  modules: {
    counter
  }
});
