<template>
  <div
    id="tool-tip"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    ?
    <transition name="fade" mode="out-in">
      <span v-if="hover" class="on-popup" :style="{ color: color + '!important' }" v-html="info"></span>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ToolTip",
  data() {
    return {
      hover: false
    };
  },
  props: {
    info: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "white"
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 0.2s
}
.fade-leave-active {
  transition: opacity 0.2s
}
.fade-enter, .fade-leave-to  {
  opacity: 0
}
#tool-tip {
  background: rgba(112,134,151, .5);
  border-radius:50%;
  height: 15px;
  width: 15px;
  line-height: 15px;
  display: inline-block;
  text-align: center;
  color: white !important;
  position: relative;
  margin-left: 3px;
  font-size: 12px;

  .on-popup {
    min-width: 170px;
    background-color: rgba(0,170,174);
    text-align: center;
    border-radius: 10px;
    padding: 5px;
    position: absolute;
    font-size: 11px;

    z-index: 1;
    top: -5px;
    left: 125%;
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
    }
  }
}
</style>