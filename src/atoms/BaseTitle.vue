<template>
  <h2 :style="inlineStyles" :class="className">
    <slot>Title</slot>
  </h2>
</template>

<script>
export default {
  name: "BaseTitle",
  props: {
    inlineStyles: {
      type: [Object, String]
    },
    className: {
      type: String,
      default: "su-title"
    }
  }
};
</script>

<style lang="scss">
h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #0d294a;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
}
</style>