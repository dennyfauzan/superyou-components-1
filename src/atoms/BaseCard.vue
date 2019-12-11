<template>
  <div class="su_card">
    <div class="su_card-header" v-bind:style="[headerStyle]">
      <slot name="card-header">
        <h3>Card Header</h3>
      </slot>
    </div>
    <div class="su_card-body" v-bind:style="[bodyStyle]">
      <slot name="card-body">card body</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    headerStyle: {
      type: Object,
      default: () => ({
        backgroundColor: "#00aaae"
      })
    },
    bodyStyle: {
      type: Object,
      default: () => ({
        backgroundColor: "#fff"
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.su_card {
  border-radius: 12px;
  box-shadow: 0 5px 10px 5px rgba(187, 204, 236, 0.3);

  .su_card-header {
    padding: 10px 20px;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    & > * {
      margin: 0;
    }
  }

  .su_card-body {
    padding: 20px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;

    @media screen and (max-width: 600px) {
      padding: 15px;
    }
  }
}
</style>
