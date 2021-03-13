var app = new Vue({
  el: "#app",
  data: {
    title: "data binding to title",
    url: "https://vuejs.org/v2/guide/join.html",
    target: "_blank",
    price: 12000,
    check: false,
    counter: 0,
  },
  methods: {
    formatPrice() {
      var number = this.price;
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(number);
    },
    //handle event in vue
    handleClick(e, number) {
      console.log("clicke" + e.target);
      this.counter += number;
    },
    handleMouseMove(e) {
      console.log(e);
    },
    handleMouseMoveChild(e) {
      console.log(e);
      e.stopPropagation(); //prevent event child to parent
    },
    handleSubmitForm(e) {
      console.log(e);
      // e.preventDefault();
    },
  },
});
