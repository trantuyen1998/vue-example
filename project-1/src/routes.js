import Home from "./components/Home.vue";
import Portifolio from "./components/portifolio/Portifolio";
import Stocks from "./components/stocks/Stocks";

export const routes = [
  { path: "/", component: Home },
  { path: "/portifolio", component: Portifolio },
  { path: "/stocks", component: Stocks }
];
