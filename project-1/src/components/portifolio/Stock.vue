<template>
  <div class="col-md-6 col-sm-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <div class="panel-title">
          {{ stock.name }}
          <small
            >{Price: {{ stock.price }} | Quantity: {{ stock.quantity }}}</small
          >
        </div>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            v-model="quantity"
            placeholder="Quantity"
            :class="{ danger: inSufficentQuantity }"
          />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="quantity <= 0 || inSufficentQuantity"
          >
            {{ inSufficentQuantity ? "Not enough" : "SELL" }}
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
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock",
    }),
    sellStock() {
      const orders = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.placeSellOrder(orders);
      this.quantity = 0;
    },
  },
  computed: {
    inSufficentQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
};
</script>