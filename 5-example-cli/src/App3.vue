<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing with vue-router</h1>
        <hr />
        <!-- animation transition -->
        <transition name="slide" mode="out-in">
          <router-view name="header-top"></router-view>
        </transition>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import BaseContainer from "./component/BaseContainer.vue";
import Header from "./component/Header.vue";

export default {
  components: { BaseContainer, appHeader: Header },
  name: "app",
  data() {
    return {};
  },
};
</script>

<style>
.slide-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}

@keyframes slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}

@keyframes slide-in {
  0% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
