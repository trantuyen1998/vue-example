<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8">
        <h1>Filter & Mixin</h1>
        <p>{{ text | toLowerCase }}</p>
      </div>
    </div>
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
    <list></list>
  </div>
</template>

<script>
import List from "./List.vue";
import { productMixin } from "./productMixin";
export default {
  // data() {
  //   return {
  //     text: "hello everyone, Vue js",
  //     products: ["Iphone", "Samsung", "HTC", "nokia", "Noway"],
  //     filterProducts: "",
  //   };
  // },
  // filters: {
  //   toLowerCase(text) {
  //     return text.toLowerCase();
  //   },
  // },
  // computed: {
  //   filteredProducts() {
  //     return this.products.filter((el) => {
  //       return el.match(this.filterProducts);
  //     });
  //   },
  // },
  mixins: [productMixin],
  components: {
    List,
  },
};
</script>

<style lang="scss">
</style>
