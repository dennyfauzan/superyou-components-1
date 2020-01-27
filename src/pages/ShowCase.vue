<template>
  <div id="show-case">
    <div class="card_container">
      <CardInvoice :detailPayment="paymentDetail" :payNowAction="payButton" title="XXXX XXXX" />

      <br />
      <br />

      <div style="display:flex;justify-content:space-around;">
        <BaseIconProductAndPlan product="life" plan="bronze" />
        <BaseIconProductAndPlan product="safe" plan="gold" size="medium" />
        <BaseIconProductAndPlan product="strong" plan="silver" />
      </div>

      <br />
      <br />

      <BaseRuler :range="12" />
      <br />
      <br />
      <BaseTable />
    </div>
  </div>
</template>

<script>
import BaseIconProductAndPlan from "@/atoms/BaseIconProductAndPlan.vue";
import CardInvoice from "@/components/card-invoice/CardInvoice.vue";
import BaseTable from "@/atoms/BaseTable.vue";
import BaseRuler from "@/atoms/BaseRuler.vue";

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
      payButton: null
    };
  },
  components: {
    BaseIconProductAndPlan,
    CardInvoice,
    BaseTable,
    BaseRuler
  },
  methods: {
    handleModal() {
      this.showModal = !this.showModal;
    },
    abcdtest() {
      console.log("asdasd");
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
  }
};
</script>

<style lang="scss">
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
