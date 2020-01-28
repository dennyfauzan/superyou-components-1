<template>
  <div>
    <base-card v-for="perPlan in perBasicProductId" :key="perPlan.id">
      <TopPortion
        slot="top-portion"
        :basic="perPlan.basic"
        :top="perPlan.topPortion"
        :total="totalAddOn"
      />
      <MiddlePortion slot="middle-portion" :middle="perPlan.middlePortion" />
      <BottomPortion
        slot="bottom-portion"
        :rider="perPlan.bottomPortion.rider"
        :basic="perPlan.basic"
        @calculateTotalPremi="handleTotalAddOn"
      />
    </base-card>
  </div>
</template>

<script>
import BaseCard from "@/atoms/BaseProductCard/BaseCard";
import TopPortion from "@/atoms/BaseProductCard/TopPortion";
import MiddlePortion from "@/atoms/BaseProductCard/MiddlePortion";
import BottomPortion from "@/atoms/BaseProductCard/BottomPortion";
export default {
  name: "Result",
  props: ["basicProducts"],
  data() {
    return {
      age: 25,
      totalAddOn: 0
    };
  },
  components: {
    BaseCard,
    TopPortion,
    MiddlePortion,
    BottomPortion
  },
  methods: {
    handleTotalAddOn(totalAddonPremi) {
      this.totalAddOn = totalAddonPremi;
      // this.totalAddOn = totalAddonPremi;
      // totalAddonPremi !== 0
      //   ? (this.calculatedPremi = this.perBasicProductId.productPerplan.topPortion.startForm + totalAddonPremi)
      //   : (this.calculatedPremi = this.perBasicProductId.productPerplan.topPortion.startForm);
    }
  },
  computed: {
    selectedProductById() {
      let filteredProduct = this.basicProducts.filter(basicProducts => {
        return basicProducts.id === 1;
      });

      return filteredProduct[0];
    },
    perProductPlan() {
      // ONE BASIC PRODUCT ONE PLAN
      let filteredPlan = this.selectedProductById.plans.filter(plan => {
        return plan.id === 2;
      });

      return filteredPlan[0];
    },
    perBasicProductId() {
      let perBasicProductId = [];

      // ONE PRODUCT PLAN
      let productPerplan = {
        basic: {
          id: this.selectedProductById.id,
          name: this.selectedProductById.name,
          icon: this.selectedProductById.details.product_icon
        },
        topPortion: {
          name: this.perProductPlan.name,
          badge: this.perProductPlan.icon,
          planId: this.perProductPlan.id,
          startForm: this.perProductPlan.start_from,
          yearlyPremi: this.perProductPlan.yearly_premi
        },
        middlePortion: {
          sum_assured: this.perProductPlan.sum_assured,
          benefits: this.perProductPlan.benefits
        },
        bottomPortion: {
          rider:
            this.selectedProductById.id == 3 ? this.perProductPlan.riders : []
        }
      };

      perBasicProductId.push(productPerplan);

      // MULTIPLE PRODUCT PLAN
      //   perBasicProductId.push(productPerplan);
      // this.selectedProductById.plans.forEach((plan) => {
      //   let productPerplan = {
      //     basic: {
      //       name: this.selectedProductById.name,
      //       icon: this.selectedProductById.details.product_icon,
      //     },
      //     topPortion: {
      //       name: plan.name,
      //       badge: plan.icon,
      //       planId: plan.id,
      //       startForm: plan.start_from,
      //       yearlyPremi: plan.yearly_premi,
      //     },
      //     middlePortion: {
      //       sum_assured: plan.sum_assured,
      //       benefits: plan.benefits
      //     },
      //     bottomPortion: {
      //       rider: plan.riders
      //     }
      //   }

      //   perBasicProductId.push(productPerplan);
      // });
      return perBasicProductId;
    }
  }
};
</script>

<style lang="scss">
html {
  font-size: 10px;
}
</style>
