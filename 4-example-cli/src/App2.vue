<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8">
        <h1>Custom Directive</h1>
        <p v-bgcolor="'red'">Color style by directive</p>
        <p v-custom:background="'red'">Color style by directive</p>
        <p v-custom="'red'">Color style by directive</p>

        <!-- modifier -->
        <p v-custom:background.delayed="'red'">Color style by directive</p>

        <!-- local directive -->
        <p v-local-custom:background.delayed.blink="'yellow'">
          Color style by directive
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-custom": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value;
          let secondColor = "blue";
          let currentColor = mainColor;

          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg === "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg === "background") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      },
    },
  },
};
</script>

<style lang="scss">
</style>
