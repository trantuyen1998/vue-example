<template>
  <div class="container">
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "counter",
  data() {
    return {};
  },
  methods: {
    // ...mapMutations(["increment", "decrement"]),
    ...mapActions(["increment", "decrement"]),
  },
};
</script>

<style>
</style>