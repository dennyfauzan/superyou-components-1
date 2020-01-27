<template>
  <div class="invoice-detail-wrapper">
    <InvoiceDetail v-for="policy in productsDetails" :key="policy.id" :datas="policy" />
    <div class="invoice-summary">
      <div class="invoice-summary__wrapper">
        <h2>Payment Fee</h2>
        <span>{{ amountFee }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import InvoiceDetail from "../invoice/InvoiceDetail";
export default {
  name: "InvoiceDetails",
  components: {
    InvoiceDetail
  },
  props: {
    productsDetails: {
      type: Array,
      required: true
    },
    paymentFee: {
      type: String
    }
  },
  computed: {
    amountFee() {
      if (this.paymentFee && this.paymentFee === "Rp 0") {
        return "-";
      } else {
        return this.paymentFee;
      }
    }
  }
};
</script>

<style lang="scss">
.invoice-summary {
  width: 100%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;

  &__wrapper {
    margin-left: auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    @media screen and (min-width: 601px) {
      max-width: 81%;
      padding-right: 20px;
    }
  }

  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #0d294a;
  }

  span {
    margin-right: 4px;
    color: #313131;
  }

  h2,
  span {
    @media screen and (max-width: 600px) {
      font-size: 14px;
    }

    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
  }
}
</style>