<template>
  <div>
    <h1>Trader or View your portifolio</h1>
    <h6>You may save & load your data</h6>
    <h6>Click on "End Day" to begin a new Day</h6>
    <hr />
    <p>Your funds: {{ funds }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>