<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8">
      <h3>Filter products</h3>
      <input
        type="text"
        class="form-control"
        name=""
        id=""
        v-model="filterProducts"
      />
      <div class="card">
        <div class="card-body">
          <ul>
            <li v-for="product in filteredProducts" v-bind:key="product">
              {{ product }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productMixin } from "./productMixin";

export default {
  name: "list",
  mixins: [productMixin]
  // data() {
  //   return {
  //     products: ["Iphone", "Samsung", "HTC", "nokia", "Noway"],
  //     filterProducts: "",
  //   };
  // },

  // computed: {
  //   filteredProducts() {
  //     return this.products.filter((el) => {
  //       return el.match(this.filterProducts);
  //     });
  //   },
  // },
};
</script>

<style lang="scss">
</style>
