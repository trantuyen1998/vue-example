<template>
  <p>Counter result: {{ counter }}</p>
</template>
<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>