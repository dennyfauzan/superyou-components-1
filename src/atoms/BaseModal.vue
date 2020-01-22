<template>
  <transition name="fade-slowly">
    <div class="su_modal" v-if="modalShow">
      <span href="#" class="close" @click="onCloseModal"></span>
      <div class="su_modal__overlay" @click="onCloseModal"></div>
      <div class="su_modal__container-content" :style="modalStyle">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BaseModal",
  props: {
    modalShow: {
      type: Boolean,
      default: false
    },
    width: {
      type: [String]
    },
    height: {
      type: [String]
    }
  },
  methods: {
    onCloseModal() {
      this.$emit("modalClose");
    }
  },
  computed: {
    modalStyle() {
      return {
        width: this.width ? this.width : "100%",
        height: this.height ? this.height : "100%"
      };
    }
  }
};
</script>

<style lang="scss">
.su_modal {
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 40;
  height: 100%;
  width: 100%;

  &__overlay {
    background-color: hsla(0, 0%, 4%, 0.86);
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  &__container-content {
    background-color: #fff;
    border-radius: 12px;
    min-width: 400px;
    max-width: 960px;
    min-height: 300px;
    max-height: 680px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  // close icon
  .close {
    position: absolute;
    right: 20px;
    top: 16px;
    width: 28px;
    height: 28px;
    opacity: 1;
    z-index: 1;
  }
  .close:hover {
    opacity: 1;
  }
  .close:before,
  .close:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 20px;
    width: 2px;
    background-color: #fff;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }
}

.fade-slowly-enter-active {
  transition: all 0.2s ease;
}
.fade-slowly-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-slowly-enter,
.fade-slowly-leave-to {
  opacity: 0;
  visibility: hidden;
}
</style>