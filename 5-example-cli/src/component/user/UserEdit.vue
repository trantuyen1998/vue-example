<template>
  <div>
    <h1>User page</h1>
    <hr />
    <button class="btn btn-primary" @click="confirmed= true;">Confirmd</button>
    <div style="height: 700px"></div>
    <div id="data">Jumpt to</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      confirmed: false,
    };
  },
  // set view can navigate
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm("are you ready?")) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>