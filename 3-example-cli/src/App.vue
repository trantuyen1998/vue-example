<template>
  <div id="app">
    <div class="container">
      <button v-on:click="title = 'Hoc lap trinh don gian'">
        Thay doi title tu component
      </button>
      <component-header
        v-bind:listUser="listUser"
        v-bind:titleHeader="title"
        v-on:changeTitleEvent="handleChangeTitle"
      />
      <list-user
        v-on:deleteUserEvent="handleDeleteUser"
        v-bind:listUser="listUser"
      ></list-user>
      <demo-ref></demo-ref>
      <component-footer />
    </div>
  </div>
</template>

<script>
import ComponentFooter from "./component/ComponentFooter.vue";
import ComponentHeader from "./component/ComponentHeader.vue";
import DemoRef from "./component/DemoRef.vue";
import ListUser from "./component/ListUser.vue";
export default {
  name: "app",
  data() {
    return {
      title: "Hello vuejs- header",
      listUser: [
        { id: 100, email: "test1@gmail.com", active: true },
        { id: 101, email: "test1@gmail.com", active: true },
        { id: 102, email: "test1@gmail.com", active: false },
        { id: 103, email: "test1@gmail.com", active: false },
        { id: 104, email: "test1@gmail.com", active: true },
      ],
    };
  },
  components: {
    ComponentHeader,
    ComponentFooter,
    ListUser,
    DemoRef,
  },
  methods: {
    handleChangeTitle(data) {
      this.title = data.title;
      console.log("handleChangeTitleVue duoc goi khi kich hoat thanh cong");
    },
    handleDeleteUser(data) {
      var indexDelete = -1;
      this.listUser.forEach((u, idx) => {
        if (u.id === data.id) {
          indexDelete = idx;
        }
      });
      if (indexDelete != -1) {
        console.log(indexDelete);
        this.listUser.splice(indexDelete, 1);
      }
      console.log("handleDeleteUser app.vue" + data.id);
    },
  },
};
</script>

<style lang="scss">
</style>
