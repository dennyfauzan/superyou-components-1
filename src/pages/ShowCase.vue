<template>
  <div id="show-case">
    <div class="card_container">
      <CardInvoice
        :detailPayment="paymentDetail"
        :payNowAction="payButton"
        title="Invoice xxx xxx xxx"
      />

      <br />
      <br />

      <div style="display:flex;justify-content:space-around;">
        <BaseIconProductAndPlan product="life" plan="bronze" />
        <BaseIconProductAndPlan product="safe" plan="gold" size="medium" />
        <BaseIconProductAndPlan product="strong" plan="silver" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseIconProductAndPlan from "@/atoms/BaseIconProductAndPlan.vue";
import CardInvoice from "@/components/card-invoice/CardInvoice.vue";

const paymentDetail = {
  lastPayment: "3 January 2018",
  nextPayment: "3 Agustus 2018",
  status: "Menunggu Pembayaran",
  total: "Rp 57.500",
  mode: "Bulanan",
  method: "Debit Card",
  invoices: [
    {
      product: "Super Safe Protection",
      productId: "1",
      plan: "Gold",
      policyNumber: 1919000112,
      price: "1.280.900",
      fee: "5.000",
      riders: [
        {
          name: "Super Motor",
          price: "9.000"
        },
        {
          name: "Super Holiday",
          price: "12.000"
        }
      ]
    },
    {
      product: "Super Life Protection",
      productId: "2",
      plan: "Silver",
      policyNumber: 1919000113,
      price: "22.100",
      riders: null
    },
    {
      product: "Super Strong Protection",
      productId: "3",
      plan: "Bronze",
      policyNumber: 1919000114,
      price: "22.100",
      riders: null
    }
  ]
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
    CardInvoice
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
