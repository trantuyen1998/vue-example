<template>
  <div>
    <h1>User page</h1>
    <hr />
    <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>