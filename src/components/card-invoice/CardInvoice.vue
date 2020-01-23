<template>
  <base-card :header-style="cardStyles.header">
    <div class="card-header-wrapper" slot="card-header">
      <h3>{{ title }}</h3>
      <h5 class="card-header-wrapper__see-products" @click="onShowProductDetail">Lihat Produk</h5>
    </div>
    <div slot="card-body">
      <InvoiceBody
        :details="detailPayment"
        @handleModalDetail="contentToShow"
        :showModal="isModalShow"
      >
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
          <BaseAccordion
            v-if="showHistoryPayment"
            id="base-accordion"
            class="history-payment-detail"
            :content="accordionContent"
            multiple
          />
          <div class="invoice-detail" v-else>
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
import BaseAccordion from "../../atoms/BaseAccordion/BaseAccordion";

// inject data
const exampleData1 = [
  {
    id: 1,
    active: true,
    title: "Pembayaran ke 3",
    details: `
      <p>Pembayaran Terakhir</p>
    `
  },
  {
    id: 2,
    active: false,
    title: "Pembayaran ke 2",
    details: `
      <p>Pembayaran Ke Dua</p>
    `
  },
  {
    id: 3,
    active: false,
    title: `Pembayaran ke 1`,
    details: `
      <p>Pembayaran Ke Pertama</p>
    `
  }
];

export default {
  name: "CardInvoice",
  data() {
    return {
      accordionContent: null,
      showHistoryPayment: false,
      isModalShow: false
    };
  },
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
    InvoiceDetail,
    BaseAccordion
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
    contentToShow(val) {
      if (val === "history_payment") {
        // open showHistoryPayment modal from children
        this.showHistoryPayment = true;
        this.isModalShow = true;
      } else {
        // close modal from children
        this.showHistoryPayment = false;
        this.isModalShow = false;
      }
    },
    onShowProductDetail() {
      this.isModalShow = true;
    }
  },
  mounted() {
    this.accordionContent = exampleData1;
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
      font-size: 12px;
    }
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
