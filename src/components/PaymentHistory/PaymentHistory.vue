<template>
  <div class="su-payment_history">
    <div class="mobile-only">
      <base-accordion :content="accordionData" :groupId="1" />
    </div>
    <div class="desktop-only">
      <BaseTable :thead="tableHeader" :tdata="historyData" />
    </div>
  </div>
</template>

<script>
import BaseAccordion from "../../atoms/BaseAccordion/BaseAccordion.vue";
import BaseTable from "../../atoms/BaseTable";
export default {
  name: "PaymentHistory",
  data() {
    return {
      accordionData: null
    };
  },
  components: {
    BaseAccordion,
    BaseTable
  },
  props: {
    historyData: {
      type: Array,
      default: function() {
        return [
          {
            invoice_number: "1234-06",
            next_payment_at: "dd/mm/yy",
            paid_at: "dd/mm/yy",
            payment_method_name: "Visa Card",
            total: "Rp 115.000",
            status_desc: "Berhasil"
          },
          {
            invoice_number: "1234-07",
            next_payment_at: "dd/mm/yy",
            paid_at: "dd/mm/yy",
            payment_method_name: "Visa Card",
            total_payment: "Rp 120.000",
            status_desc: "Berhasil"
          }
        ];
      }
    }
  },
  methods: {
    historyAccordionData() {
      if (this.historyData) {
        return this.historyData.map((item, index) => {
          return {
            id: item.invoice_number,
            active: index === 0 ? true : false,
            title: `Pembayaran ke ${this.historyData.length - index}`,
            details: `
            <div class="details_accordion">
              <div class="detail">
                <p>No. Invoice</p>
                <p>${item.invoice_number}</p>
              </div>
              <div class="detail">
                <p>Jatuh Tempo</p>
                <p>${item.next_payment_at}</p>
              </div>
              <div class="detail">
                <p>Tanggal Bayar</p>
                <p>${item.paid_at}</p>
              </div>
              <div class="detail">
                <p>Metode Bayar</p>
                <p>${item.payment_method_name}</p>
              </div>
              <div class="detail">
                <p>Total</p>
                <p>${item.total_payment}</p>
              </div>
              <div class="detail">
                <p>Status</p>
                <p>${item.status_desc}</p>
              </div>
            </div>`
          };
        });
      }
      return null;
    }
  },
  computed: {
    tableHeader() {
      const labelList = {
        invoice_number: "No. Invoice",
        next_payment_at: "Jatuh Tempo",
        paid_at: "Tanggal Bayar",
        payment_method_name: "Metode Bayar",
        total_payment: "Total",
        status_desc: "Status"
      };
      // get first item history data
      let tHead = Object.keys(this.historyData[0]).map(key => {
        return {
          label: labelList[key],
          field: key
        };
      });
      return tHead;
    }
  },
  created() {
    this.accordionData = this.historyAccordionData();
  }
};
</script>

<style lang="scss">
.su-payment_history {
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 5px 10px 5px rgba(187, 204, 236, 0.3);
  border-radius: 8px;

  .details_accordion {
    display: flex;
    flex-direction: column;
    padding: 10px 1.25rem 10px 1.25rem;
    background-color: rgba(11, 225, 230, 0.12);

    .detail {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 12px;
        color: #333;
      }
    }
  }
  .mobile-only {
    display: none;
  }
  .desktop-only {
    display: block;
  }
  @media screen and (max-width: 768px) {
    .mobile-only {
      display: block;
    }
    .desktop-only {
      display: none;
    }
  }
}
</style>
