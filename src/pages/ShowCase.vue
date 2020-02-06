<template>
  <div id="show-case">
    <div class="card_container">
      <CardInvoice
        v-for="invoice in allInvoices"
        :key="invoice.policy_group_number"
        :detailPayment="invoice"
        :payNowAction="payButton"
        :title="`No Transaksi ${invoice.policy_group_number}`"
        @on-show-invoice-product="showDetailSelectedProduct"
        @on-show-payment-history="showPaymentHistory"
      />

      <BaseModal
        :modalShow="showModal"
        @modalClose="hideModal"
        :max-width="'900px'"
      >
        <template
          v-if="showModalType === `DETAIL_PRODUCT` && productsDetails.list"
        >
          <InvoiceDetails
            :productsDetails="productsDetails.list"
            :paymentFee="productsDetails.paymentFee"
          />
        </template>
        <template v-else>
          <PaymentHistory :historyData="payment_history" />
        </template>
      </BaseModal>

      <br />
      <br />

      <div style="display:flex;justify-content:space-around;">
        <BaseIconProductAndPlan product="life" plan="bronze" />
        <BaseIconProductAndPlan product="safe" plan="gold" size="medium" />
        <BaseIconProductAndPlan product="strong" plan="silver" />
      </div>

      <br />
      <br />
    </div>
  </div>
</template>

<script>
import BaseIconProductAndPlan from "@/atoms/BaseIconProductAndPlan.vue";
import CardInvoice from "@/components/card-invoice/CardInvoice.vue";
import PaymentHistory from "@/components/PaymentHistory/PaymentHistory.vue";
import BaseModal from "@/atoms/BaseModal.vue";
import InvoiceDetails from "@/molecules/invoice/InvoiceDetails.vue";
import invoicesData from "@/data/payment-invoices.json";

const payNowAction = () => alert("from paynow");

export default {
  name: "ShowCase",
  data() {
    return {
      paymentDetail: null,
      payButton: null,
      showModal: false,
      showModalType: "",
      allInvoices: null,
      selectedInvoiceProduct: null,
      productsDetails: {
        list: null,
        paymentFee: null
      },
      payment_history: null
    };
  },
  components: {
    BaseIconProductAndPlan,
    CardInvoice,
    PaymentHistory,
    BaseModal,
    InvoiceDetails
  },
  methods: {
    handleModal() {
      this.showModal = !this.showModal;
    },
    showDetailSelectedProduct(invoiceProductsDetail, paymentFee) {
      this.productsDetails.list = invoiceProductsDetail;
      this.productsDetails.paymentFee = paymentFee;
      this.showModalType = "DETAIL_PRODUCT";
      this.showModal = true;
    },
    showPaymentHistory(historyData) {
      console.log("HISTORY_DATA", historyData);
      if (historyData) {
        this.showModalType = "PAYMENT_HISTORY";
        this.showModal = true;
        this.payment_history = historyData;
      }
    },
    hideModal() {
      this.showModal = false;
    }
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
  created() {
    this.payButton = payNowAction;
    this.allInvoices = invoicesData;
  }
};
</script>

<style lang="scss">
.su_card {
  margin-bottom: 30px;
}
#show-case {
  max-width: 1280px;
  margin: 30px auto 0;
  padding: 0 10px;

  .card_container {
    max-width: 900px;
    margin: 0 auto;
  }
}
</style>
