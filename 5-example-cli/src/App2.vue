<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="username">username</label>
          <input
            type="text"
            class="form-control"
            name=""
            id=""
            v-model="user.username"
          />
        </div>
        <div class="form-group">
          <label for="username">email</label>
          <input
            type="email"
            class="form-control"
            name=""
            id=""
            v-model="user.email"
          />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
        <button class="btn btn-primary" @click="fetchData">get Data</button>
        <br />
        <br />
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(u, index) in users"
            v-bind:key="index"
          >
            {{ u.username }} - {{ u.email }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BaseContainer from "./component/BaseContainer.vue";
export default {
  components: { BaseContainer },
  name: "app",
  data() {
    return {
      user: {
        username: "",
        email: "",
      },
      users: [],
      resource: {},
    };
  },
  methods: {
    submit() {
      // this.$http
      //   .post("", this.user)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });

      // this.resource.save({}, this.user);
      this.resource.actionAlt(this.user);
    },
    fetchData() {
      this.$http
        .get("app.json")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let result = [];
          for (let indx in data) {
            result.push(data[indx]);
          }
          this.users = result;
        });
    },
  },
  created() {
    // custom
    const customActions = {
      actionAlt: { method: "POST", url: "alternative.json" },
    };

    this.resource = this.$resource("app.json", {}, customActions);
  },
};
</script>

<style>
</style>
