<template>
  <div>
    <h1>User page</h1>
    <h2>User loaded has: {{ $route.params.id }}</h2>
    <router-link tag="button" v-bind:to="link" class="btn btn-primary"
      >Edit user</router-link
    >
    <!-- v-bind:to="'/user/' + $route.params.id + '/edit'" -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 },
        hash: "#data", //jump navigation anchor in page
      },
    };
  },
  // protect route
  beforeRouteEnter(to, from, next) {
    if (true) {
      next(); //check if oki -> pass route
    } else {
      next(false);
    }
  },
};
</script>