<template>
  <div class="user">
    <p>{{ user.email }}</p>
    <button v-on:click="handleDelete" class="delete">Delete</button>
  </div>
</template>
<script>
export default {
  name: "user",
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleDelete() {
      let data = {
        id: this.user.id,
      };
      this.$emit("deleteUser", data);
      console.log("handleDelete in user.vue ");
    },
  },
};
</script>

<style lang="scss">
.user {
  position: relative;
}
.user .delete {
  position: absolute;
  right: 0;
  top: 0;
}
</style>