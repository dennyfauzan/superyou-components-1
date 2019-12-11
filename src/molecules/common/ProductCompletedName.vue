<template>
  <div class="product-completed-name">
    <h2 class="basic-product">{{ details.name }} - {{ details.plan }}</h2>
    <template v-if="details.riders">
      <div
        class="rider-wrapper"
        v-for="(rider, i) in details.riders"
        :key="`rider${i}`"
      >
        <h2>{{ rider.name }}</h2>
        <BaseChip :inlineStyles="chipCustomStyle" type="outline"
          >Add On</BaseChip
        >
      </div>
    </template>
    <p class="policy-number">{{ details.policyNumber }}</p>
  </div>
</template>

<script>
import BaseChip from "../../atoms/BaseChip.vue";

export default {
  name: "ProductCompletedName",
  components: {
    BaseChip
  },
  props: {
    details: {
      type: Object,
      default: () => ({
        name: "Super Safe Protection",
        plan: "Gold",
        riders: ["Super Motor", "Super Holiday"],
        policyNumber: 12341234
      })
    }
  },
  computed: {
    chipCustomStyle() {
      return "width: 62px;align-self: center;margin-left: 7px;height: 18px;padding: 2px 4px;";
    }
  }
};
</script>

<style lang="scss" scoped>
.product-completed-name {
  h2,
  .basic-product {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #0d294a;

    @media screen and (max-width: 600px) {
      font-size: 14px;
    }

    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
  }

  .rider-wrapper {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-top: 8px;

    @media screen and (max-width: 600px) {
      margin-top: 10px;
    }
  }

  .policy-number {
    color: #708697;
    font-weight: 600;
    font-size: 14px;

    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
}
</style>
