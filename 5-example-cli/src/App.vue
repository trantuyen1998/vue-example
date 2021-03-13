<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result></app-result>
        <app-another-counter></app-another-counter>
        <hr />
        <app-counter @updated="counter += $event"></app-counter>
        <app-counter-2></app-counter-2>

        <input type="text" v-model="value" />
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Result from "./component/counter/Result";
import Counter from "./component/counter/Counter";
import Counter2 from "./component/counter/Counter2";
import AnotherCounter from "./component/counter/AnotherCounter";

export default {
  components: {
    appResult: Result,
    appCounter: Counter,
    appAnotherCounter: AnotherCounter,
    appCounter2: Counter2,
  },
  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch("updatedValue", value);
      },
    },
  },
  methods: {
    updatedValue(event) {
      this.$store.dispatch("updatedValue", event.target.value);
    },
  },
  name: "app",
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style>
</style>
