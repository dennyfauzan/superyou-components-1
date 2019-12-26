<template>
  <base-card :header-style="cardStyles.header">
    <h3 slot="card-header">{{ title }}</h3>
    <div slot="card-body">
      <InvoiceBody :details="detailPayment">
        <baseChip slot="payment-status" :type="detailPayment.status">
          <span class="text">{{ detailPayment.status_message }}</span>
        </baseChip>
        <baseButton
          slot="payment-button"
          btn-text="BAYAR SEKARANG"
          @onClick="handleClickCTA"
          :isDisabled="isActionDisabled"
        />
        <div class="payment-list" slot="payment-detail">
          <InvoiceDetail
            v-for="invoice in detailPayment.invoices"
            :key="invoice.id"
            :datas="invoice"
          />
          <div class="invoice-summary">
            <div class="invoice-summary__wrapper">
              <h2>Payment Fee</h2>
              <span>{{ detailPayment.fee }}</span>
            </div>
          </div>
        </div>
      </InvoiceBody>
    </div>
  </base-card>
</template>

<script>
import BaseCard from "../../atoms/BaseCard";
import BaseButton from "../../atoms/BaseButton.vue";
import BaseChip from "../../atoms/BaseChip.vue";
import InvoiceBody from "../../molecules/invoice/InvoiceBody.vue";
import InvoiceDetail from "../../molecules/invoice/InvoiceDetail.vue";

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
    }
  },
  components: {
    BaseCard,
    BaseButton,
    BaseChip,
    InvoiceBody,
    InvoiceDetail
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
    }
  }
};
</script>

<style lang="scss" scoped>
.invoice-summary {
  width: 100%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: solid 0.5px #708697;

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
