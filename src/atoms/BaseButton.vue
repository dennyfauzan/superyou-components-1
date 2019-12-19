<template>
  <button
    id="su_btn"
    class="outline arrow"
    :class="{ size: size, 'disabled': isDisabled }"
    @click="handleClick"
    :disabled="isDisabled"
  >{{ btnText }}</button>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      default: "BUTTON"
    },
    size: {
      type: String
    },
    onClick: {
      type: Function
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      this.$emit("onClick");
    }
  }
};
</script>

<style lang="scss">
#su_btn {
  position: relative;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 40px 14px 14px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &.small {
    font-size: 12px;
  }

  &.large {
    font-size: 16px;
  }

  &:focus {
    outline: 0;
  }

  &.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:hover {
    &.arrow {
      &::after {
        transform: translateX(8px);
      }
    }
  }

  &.outline {
    border: solid 1px #0d294a;
    color: #0d294a;
    background: transparent;
  }

  &.arrow {
    &::after {
      content: url("https://superyou.co.id/img/icons/right-arrow-darkblue.svg");
      transition: transform 0.5s ease-in-out;
      position: absolute;
      right: 18px;
    }
  }
}
</style>
