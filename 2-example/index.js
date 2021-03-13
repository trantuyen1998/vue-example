var app = new Vue({
  el: "#app",
  data: {
    message: "hello world",
    firstName: "nguyen",
    textClass: "active",
    isActive: true,
    isError: true,
  },
  methods: {
    handleKeyUp(e) {
      // two way binding the same react
      this.firstName = e.target.value;
      console.log(e.target.value);
    },
  },

  // tinh toan k can goi ham
  // method phai goi ham ()

  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split("").reverse().join("");
    },

    objClass: function () {
      return {
        active: this.isActive,
        error: this.isError,
      };
    },
  },
});
