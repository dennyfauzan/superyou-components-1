<template>
  <div class="su_ruler">
    <div
      class="su_ruler__item"
      v-for="(n,index) in range"
      :key="`ruler-item${n}`"
      :class="{'active': activeRange > index}"
    >{{ n }}</div>
  </div>
</template>

<script>
export default {
  name: "BaseRuler",
  props: {
    range: {
      type: Number,
      default: 12
    },
    activeRange: {
      type: Number,
      default: 3
    }
  }
};
</script>

<style lang="scss">
.su_ruler {
  width: auto;
  background-color: #e9ebed;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  max-width: 590px;

  &__item {
    color: #9ca6b3;
    font-size: 12px;
    padding: 9px 20px;
    text-align: center;

    &:first-child {
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }

    &.active {
      background-color: #00aaae;
      color: #f7f7f7;
      font-weight: bold;
      border-radius: 12px;
      position: relative;
      &:not(:first-child)::before {
        content: "";
        clear: both;
        position: absolute;
        top: 0px;
        bottom: 0;
        left: -10px;
        width: 21px;
        background-color: #00aaae;
      }
    }
  }
}
</style>