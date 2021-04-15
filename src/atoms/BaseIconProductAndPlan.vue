<template>
  <div class="icon-container" :class="[product, ...iconSizeClasses]">
    <img :src="icon" class="icon-product" />
  </div>
</template>

<script>
export default {
  name: "BaseIconProductAndPlan",
  props: {
    icon: {
      type: String,
      default: "https://staging.superyou.co.id/products/plans/super-life-protection-silver-plan.svg"
    },
    product: {
      type: String,
      default: "safe"
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  computed: {
    iconSizeClasses() {
      return {
        small: this.size === "small",
        medium: this.size === "medium",
        large: this.size === "large"
      };
    }
  }
};
</script>

<style lang="scss">
.icon-container {
  width: 70px;
  height: 70px;
  position: relative;
  display: flex;
  align-items: center;

  &.small {
    transform: scale(0.7);
  }

  &.large {
    transform: scale(1.2);
  }

  .icon-product {
    max-width: 100%;
  }
  .icon-plan {
    position: absolute;
    bottom: -9px;
    right: -3px;
    max-width: 34px;
  }

  &.strong {
    .icon-product {
      width: 78px;
    }
    .icon-plan {
      right: -7px;
    }
  }
}
</style>