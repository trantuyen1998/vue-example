const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  BUY_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(el => {
      return el.id == stockId;
    });
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }
    state.funds -= stockPrice * quantity;
  },
  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(el => {
      return el.id == stockId;
    });
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  },
  SET_PORTIFOLIO(state, portifolio) {
    state.funds = portifolio.funds;
    state.stocks = portifolio.stockPortifolio ? portifolio.stockPortifolio : [];
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit("SELL_STOCK", order);
  }
};

const getters = {
  stockPortifolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(el => (el.id = stock.id));
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds: state => {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
