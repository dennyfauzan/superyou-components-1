<script>
export default {
  name: "TransitionExpand",
  functional: true,
  render(createElement, context) {
    const data = {
      props: {
        name: "expand"
      },
      on: {
        afterEnter(element) {
          element.style.height = "auto";
        },
        enter(element) {
          const width = getComputedStyle(element).width;

          element.style.width = width;
          element.style.position = "absolute";
          element.style.visibility = "hidden";
          element.style.height = "auto";

          const height = getComputedStyle(element).height;

          element.style.width = null;
          element.style.position = null;
          element.style.visibility = null;
          element.style.height = 0;

          // Force repaint to make sure the
          // animation is triggered correctly.
          getComputedStyle(element).height;

          setTimeout(() => {
            element.style.height = height;
          });
        },
        leave(element) {
          const height = getComputedStyle(element).height;
          element.style.height = height;

          // Force repaint to make sure the
          // animation is triggered correctly.
          getComputedStyle(element).height;

          setTimeout(() => {
            element.style.height = 0;
          });
        }
      }
    };

    return createElement("transition", data, context.children);
  }
};
</script>

<style lang="scss">
/* * {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
} */
.expand-enter-active,
.expand-leave-active {
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  transition-property: opacity, height;
}

.expand-enter,
.expand-leave-to {
  opacity: 0;
}
</style>