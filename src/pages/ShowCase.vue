<template>
  <div id="show-case">
    <div class="card_container">
      <CardInvoice
        v-for="invoice in allInvoices"
        :key="invoice.policy_group_number"
        :detailPayment="invoice"
        :payNowAction="payButton"
        title="XXXX XXXX"
        @onShowInvoiceProduct="showDetailSelectedProduct"
        @onShowPaymentHistory="showPaymentHistory"
      />

      <BaseModal :modalShow="showModal" @modalClose="hideModal">
        <template v-if="showModalType === `DETAIL_PRODUCT` && productsDetails.list">
          <InvoiceDetails
            :productsDetails="productsDetails.list"
            :paymentFee="productsDetails.paymentFee"
          />
        </template>
        <template v-else>
          <BaseRuler :range="12" />
          <br />
          <br />
          <BaseTable />
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
import BaseTable from "@/atoms/BaseTable.vue";
import BaseRuler from "@/atoms/BaseRuler.vue";
import BaseModal from "@/atoms/BaseModal.vue";
import InvoiceDetails from "@/molecules/invoice/InvoiceDetails.vue";
import invoicesData from "@/data/payment-invoices.json";

const paymentDetail = {
  lastPayment: "3 January 2018",
  nextPayment: "3 Agustus 2018",
  status: "waiting",
  status_message: "Pembayaran Berhasil",
  total: "Rp 57.500",
  fee: "Rp 5.000",
  mode: "Bulanan",
  method: "Debit Card",
  invoices: [
    {
      product: "Super Safe Protection",
      productId: "1",
      plan: "Gold",
      policyNumber: 1919000112,
      price: "Rp 1.280.900",
      fee: "5.000",
      riders: [
        {
          name: "Super Motor",
          price: "Rp 9.000"
        },
        {
          name: "Super Holiday",
          price: "Rp 12.000"
        }
      ]
    },
    {
      product: "Super Life Protection",
      productId: "2",
      plan: "Silver",
      policyNumber: null,
      price: "Rp 22.100",
      riders: null
    },
    {
      product: "Super Strong Protection",
      productId: "3",
      plan: "Bronze",
      policyNumber: 1919000114,
      price: "Rp 22.100",
      riders: null
    }
  ],
  policy_group_number: "3191783",
  summary_token: "b6b7a3b0768ed2d2601ac37fcbfbf4560f4b2bcc",
  payment_method_id: 22
};

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
      }
    };
  },
  components: {
    BaseIconProductAndPlan,
    CardInvoice,
    BaseTable,
    BaseRuler,
    BaseModal,
    InvoiceDetails
  },
  methods: {
    handleModal() {
      this.showModal = !this.showModal;
    },
    abcdtest() {
      console.log("asdasd");
    },
    showDetailSelectedProduct(invoiceProductsDetail, paymentFee) {
      this.productsDetails.list = invoiceProductsDetail;
      this.productsDetails.paymentFee = paymentFee;
      this.showModalType = "DETAIL_PRODUCT";
      this.showModal = true;
    },
    showPaymentHistory(historyData) {
      if (historyData) {
        this.showModalType = "PAYMENT_HISTORY";
        this.showModal = true;
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
    this.paymentDetail = paymentDetail;
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
