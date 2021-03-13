<template>
  <div class="col-md-6 col-sm-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <div class="panel-title">
          {{ stock.name }} <small>{Price: {{ stock.price }}}</small>
        </div>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            v-model="quantity"
            placeholder="Quantity"
            :class="{ danger: insufficentFunds }"
          />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="quantity <= 0 || insufficentFunds"
          >
            {{ insufficentFunds ? "InsufficentFunds" : "Buy" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.danger {
  border: 1px solid red;
}
</style>
<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    buyStock() {
      const orders = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch("buyStock", orders);
      this.quantity = 0;
    },
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficentFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
  },
};
</script>