<template>
  <div>
    <p>Counter result: {{ doubleCounter }}</p>
    <p>String result: {{ stringCounter }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"]),
  },
};
</script>