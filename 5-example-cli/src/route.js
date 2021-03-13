import Home from "./component/Home.vue";
// import User from "./component/user/User.vue";
// import UserStart from "./component/user/UserStart.vue";
// import UserEdit from "./component/user/UserEdit.vue";
// import UserDetail from "./component/user/UserDetail.vue";
import Header from "./component/Header.vue";
// handle lazy loading
const User = resolve => {
  require.ensure(["./component/user/User.vue"], () => {
    resolve(require("./component/user/User.vue"));
  });
};
const UserStart = resolve => {
  require.ensure(["./component/user/UserStart.vue"], () => {
    resolve(require("./component/user/UserStart.vue"));
  });
};
const UserEdit = resolve => {
  require.ensure(["./component/user/UserEdit.vue"], () => {
    resolve(require("./component/user/UserEdit.vue"));
  });
};
const UserDetail = resolve => {
  require.ensure(["./component/user/UserDetail.vue"], () => {
    resolve(require("./component/user/UserDetail.vue"));
  });
};

export const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
    components: {
      default: Home,
      "header-top": Header
    }
  },
  {
    path: "/user",
    component: User,
    children: [
      { path: "", component: UserStart },
      {
        path: ":id",
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          //   handle protected routes
          console.log("inside routes");
          next();
        }
      },
      //  c1: { path: ":id/edit", component: UserEdit }
      { path: ":id/edit", component: UserEdit, name: "userEdit" }
    ]
  },
  {
    path: "*",
    redirect: "/"
  }
];
