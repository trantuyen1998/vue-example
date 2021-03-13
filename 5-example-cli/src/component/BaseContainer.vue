<template>
  <div class="container">
    <h2>{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "base-component",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "base project",
    },
  },
};
</script>

<style lang="">
.container {
  padding: 20px;
  border: 1px solid #333;
}
</style>