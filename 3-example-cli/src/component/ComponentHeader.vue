<template>
  <header>
    <ul>
      <li v-for="user in listUser" v-bind:key="user.id">{{ user.email }}</li>
    </ul>
    <h1>
      {{ titleHeader }}<br />
      <button v-on:click="changeTitleHeader">Thay doi title tu header</button>
    </h1>
  </header>
</template>
<script>
export default {
  name: "component-header",
  props: {
    titleHeader: {
      type: String,
      default: "gia tri mac dinh",
    },
    listUser: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      text: "Header",
    };
  },
  methods: {
    changeTitleHeader(e) {
      console.log(e);
      // kich hoat su kien trong component con
      // function ngoai App.vue se chay
      // thay doi duoc du lieu
      let data = {
        title: "emit from header to app",
      };
      this.$emit("changeTitleEvent", data);
    },
  },
};
</script>

<style lang="scss">
</style>