<template>
  <div class="demo-ref">
    <h2>demo ref</h2>
    <button v-on:click="handleClickInputFile" class="avatar">
      Thay doi data
    </button>
    <input ref="fileInputAvatar" type="file" style="display: none" />
  </div>
</template>
<script>
export default {
  name: "demo-ref",

  data() {
    return {};
  },
  methods: {
    handleClickInputFile(e) {
      //   console.log(this.$ref.fileInputAvatar);
      this.$refs.fileInputAvatar.click();
      //   console.log(this.$ref.fileInputAvatar);
    },
  },
};
</script>

<style lang="scss">
.demo-ref {
  margin-top: 100px;
  padding: 100px 30px;
  border: 1px solid #000;
}
.avatar {
  padding: 12px 15px;
  background-color: #333;
  border: 2px solid #333;
  color: #fff;
  transition: all 0.2s ease;
}
</style>