<template>
  <base-card :header-style="cardStyles.header">
    <div class="card-header-wrapper" slot="card-header">
      <h3>{{ title }}</h3>
      <h5
        class="card-header-wrapper__see-products"
        @click="onShowProductDetail"
      >
        Lihat Produk
      </h5>
    </div>
    <div slot="card-body">
      <InvoiceBody
        :details="detailPayment"
        @handleInvoiceDetail="onShowInvoiceDetail"
      >
        <baseChip slot="payment-status" :type="detailPayment.status">
          <span class="text">{{ detailPayment.status_message }}</span>
        </baseChip>
        <baseButton
          slot="payment-button"
          :btn-text="actionText"
          @onClick="handleClickCTA"
          :isDisabled="btnDisable"
        />
      </InvoiceBody>
    </div>
  </base-card>
</template>

<script>
import BaseCard from "../../atoms/BaseCard";
import BaseButton from "../../atoms/BaseButton.vue";
import BaseChip from "../../atoms/BaseChip.vue";
import InvoiceBody from "../../molecules/invoice/InvoiceBody.vue";

export default {
  name: "CardInvoice",
  props: {
    detailPayment: {
      type: Object,
      required: true
    },
    payNowAction: {
      type: Function
    },
    title: {
      type: String,
      default: ""
    },
    actionText: {
      type: String,
      default: "BAYAR SEKARANG"
    },
    btnDisable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BaseCard,
    BaseButton,
    BaseChip,
    InvoiceBody
  },
  computed: {
    cardStyles() {
      return {
        header: {
          backgroundColor: "#00aaae",
          color: "#fff"
        }
      };
    },
    isActionDisabled() {
      if (this.detailPayment) {
        return this.detailPayment.status === "waiting" ? false : true;
      }
      return true;
    }
  },
  methods: {
    handleClickCTA() {
      this.payNowAction();
    },
    onShowInvoiceDetail() {
      // delete unnecessary payment_history data
      this.$emit(
        "on-show-payment-history",
        this.detailPayment.policy_group_number
      );
    },
    onShowProductDetail() {
      this.$emit(
        "on-show-invoice-product",
        this.detailPayment.invoices,
        this.detailPayment.fee
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.card-header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;

  h3,
  h5 {
    @media screen and (max-width: 500px) {
      font-size: 14px;
    }
  }
  h5 {
    font-weight: normal;
  }

  &__see-products {
    cursor: pointer;
  }
}
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
