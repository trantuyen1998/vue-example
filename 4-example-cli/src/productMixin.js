export const productMixin = {
  data() {
    return {
      products: ["Iphone", "Samsung", "HTC", "nokia", "Noway"],
      filterProducts: ""
    };
  },

  computed: {
    filteredProducts() {
      return this.products.filter(el => {
        return el.match(this.filterProducts);
      });
    }
  }
};
