<template>
  <div class="su_invoice-body">
    <div class="payment-last">
      <p class="title">Tanggal Pembayaran Terakhir</p>
      <p class="body">{{ details.lastPayment }}</p>
    </div>
    <div class="payment-next">
      <p class="title">Tanggal Pembayaran Berikutnya</p>
      <p class="body">{{ details.nextPayment }}</p>
    </div>
    <div class="payment-status">
      <slot name="payment-status">
        <div>{{ details.status }}</div>
      </slot>
    </div>
    <div class="payment-total">
      <p class="title">Jumlah Pembayaran</p>
      <p class="body">{{ details.total }}</p>
    </div>
    <div class="payment-method">
      <p class="title">Metode Pembayaran</p>
      <p class="body">{{ details.method }}</p>
    </div>
    <div class="payment-term">
      <p class="title">Mode Pembayaran</p>
      <p class="body">{{ details.mode }}</p>
    </div>
    <div class="payment-detail">
      <p class="body dropdown-detail" @click="onClickInvoiceDetail">
        History Pembayaran
        <img
          class="dropdown-detail-arrow"
          :class="{ active: showInvoiceDetail }"
          src="https://superyou.co.id/img/icons/caret-down-darkblue.svg"
        />
      </p>
    </div>
    <div class="payment-button">
      <slot name="payment-button">
        <button>Bayar Sekarang</button>
      </slot>
    </div>
    <!-- <div class="payment-detail-invoice">
      <BaseModal
        @modalClose="onCloseModalDetail"
        :modalShow="showModal"
        width="70%"
        max-height="80%"
        :padding="paddingModal"
      >
        <slot name="payment-detail"></slot>
      </BaseModal>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "invoiceBody",
  props: {
    details: {
      type: Object,
      required: true
    },
    showModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showInvoiceDetail: false
    };
  },
  methods: {
    onClickInvoiceDetail() {
      this.showInvoiceDetail = true;
      this.$emit("handleInvoiceDetail", "history_payment");
    }
  },
  computed: {
    paddingModal() {
      const paddingModal = this.showInvoiceDetail ? "5px 10px" : "15px";
      return paddingModal;
    }
  }
};
</script>

<style lang="scss" scoped>
.su_invoice-body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px 20px;

  & > div {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 12px;
      color: #708697;
      margin: 0 0 10px 0;
      line-height: 1.4;
    }
    .body {
      font-size: 14px;
      color: #0d294a;
      margin: 0 0 10px 0;
    }

    &.payment-total {
      .title {
        color: #0d294a;
      }
      .body {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }

  .payment-detail-invoice {
    grid-column-start: span 4;
  }

  .dropdown-detail {
    cursor: pointer;
    margin-top: auto !important;
    @media screen and (max-width: 768px) and (min-width: 601px) {
      margin-top: 24px !important;
    }
    & > .dropdown-detail-arrow {
      margin-left: 5px;
      width: 12px;
      transition: 0.4s transform ease-in-out;
      &.active {
        transform: rotate(180deg);
      }
    }
  }

  @media screen and (max-width: 768px) {
    & > div {
      .title {
        font-size: 10px;
      }
      .body {
        font-size: 12px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;

    & > div {
      height: 50px;
      &:not(:last-child) {
        min-height: 30px;
        margin-bottom: 10px;
      }
    }

    & {
      .payment-last,
      .payment-status {
        order: 0;
        flex-basis: 50%;
      }

      .payment-next {
        order: 1;
        flex-basis: 100%;
      }

      .payment-method,
      .payment-term {
        order: 2;
        flex-basis: 50%;
      }

      .payment-detail,
      .payment-total {
        order: 3;
        flex-basis: 50%;
      }

      .payment-total {
        order: 4;
      }

      .payment-button {
        order: 6;
        flex-basis: 100%;
        margin-bottom: 0 !important;
      }

      .payment-detail-invoice {
        order: 5;
        flex-basis: 100%;
        margin-bottom: 20px;
        height: auto;
      }

      .payment-last,
      .payment-next,
      .payment-method,
      .payment-detail {
        flex-basis: 63%;
      }

      .payment-status,
      .payment-term,
      .payment-total {
        flex-basis: 37%;
      }
    }
  }
}

@media screen and (max-width: 320px) {
  .su_invoice-body {
    & > div {
      .title {
        font-size: 10px;
      }
      .body {
        font-size: 12px;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
