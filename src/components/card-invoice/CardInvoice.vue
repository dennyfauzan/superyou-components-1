<template>
  <base-card :header-style="cardStyles.header">
    <h3 slot="card-header">Card Header</h3>
    <div slot="card-body">
      <InvoiceBody :details="detailPayment">
        <baseChip slot="payment-status">
          <span class="text">{{ detailPayment.status }}</span>
        </baseChip>
        <baseButton
          slot="payment-button"
          btn-text="BAYAR SEKARANG"
          @onClick="handleClickCTA"
        />
        <div class="payment-list" slot="payment-detail">
          <InvoiceDetail
            v-for="invoice in detailPayment.invoices"
            :key="invoice.id"
            :datas="invoice"
          />
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
    }
  },
  methods: {
    handleClickCTA() {
      this.payNowAction();
    }
  }
};
</script>

<style></style>
