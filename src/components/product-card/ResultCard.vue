<template>
  <base-card>
    <Top slot="top" />
    <MiddlePortion slot="middle-portion" />
    <BottomPortion slot="bottom-portion" />
  </base-card>
</template>

<script>
import BaseCard from "@/atoms/BaseProductCard/BaseCard";
import Top from "@/atoms/BaseProductCard/Top";
import MiddlePortion from "@/atoms/BaseProductCard/MiddlePortion";
import BottomPortion from "@/atoms/BaseProductCard/BottomPortion";
export default {
  name: "Result",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  components: {
    BaseCard,
    Top,
    MiddlePortion,
    BottomPortion
  }
};
</script>

<style lang="scss">
html {
  font-size: 10px;
}
</style>
