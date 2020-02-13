<template>
  <div class="accordion box" role="presentation">
    <base-accordion-item
      v-for="item in content"
      :multiple="multiple"
      :item="item"
      :groupId="groupId"
      :key="item.id"
    ></base-accordion-item>
  </div>
</template>

<script>
import BaseAccordionItem from "./BaseAccordionItem";
export default {
  name: "BaseAccordion",
  components: {
    BaseAccordionItem
  },
  data() {
    return {
      groupId: null
    };
  },
  props: {
    content: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.groupId = this.$el.id;
  }
};
</script>

<style lang="scss" scoped>
$browser-context: 16;
$blue: #1779ba;
$gray: #cacaca;
$red: #cc4b37;
$white: #ffffff;

@function em($pixels, $context: $browser-context) {
  @return #{$pixels/$context}em;
}

.accordion {
  padding: 0;
  background: #fff;
  border-radius: 8px;
  /* box-shadow: 0 5px 20px 10px rgba(187, 204, 236, 0.35); */

  div:not(:last-child) {
    border-bottom: 1px solid rgba(10, 10, 10, 0.1);
  }

  div:last-child .accordion-item-details {
    border-radius: 5px;
  }

  dd {
    margin-left: 0;
  }
}
</style>