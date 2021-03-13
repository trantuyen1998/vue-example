const state = {
  counter: 0
};

const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter + " click";
  }
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: state => {
    state.counter -= payload;
  }
};

const actions = {
  increment: ({ commit }, payload) => {
    commit("increment", payload);
  },
  decrement: ({ commit }, payload) => {
    commit("decrement", payload);
  },
  asyncIncrement: ({ commit }) => {
    setTimeout(() => {
      commit("increment");
    }, 1000);
  },
  asyncDecrement: ({ commit }) => {
    setTimeout(() => {
      commit("increment");
    }, 1000);
  }
};

export default { state, getters, mutations, actions };
