<template>
  <div class="su_table">
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-4" v-for="title in thead" :key="title.field">{{ title.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(field, index) in tdata" :key="`${index}${field.due_date}`">
          <td class="border px-4 py-4" v-for="key in tdataKey" :key="key">{{ field[key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "BaseTable",
  props: {
    thead: {
      type: Array,
      default: function() {
        return [
          {
            label: "Pembayaran",
            field: "payment_term"
          },
          {
            label: "Jatuh Tempo",
            field: "due_date"
          },
          {
            label: "Tanggal Bayar",
            field: "paid_date"
          },
          {
            label: "Metode Bayar",
            field: "payment_method"
          },
          {
            label: "Total",
            field: "total"
          },
          {
            label: "Status",
            field: "status"
          }
        ];
      }
    },
    tdata: {
      type: Array,
      default: function() {
        return [
          {
            payment_term: 1,
            due_date: "dd/mm/yy",
            paid_date: "dd/mm/yy",
            payment_method: "Visa Card",
            total: "Rp 115.000",
            status: "Berhasil"
          },
          {
            payment_term: 2,
            due_date: "dd/mm/yy",
            paid_date: "dd/mm/yy",
            payment_method: "Visa Card",
            total: "Rp 80.000",
            status: "Menunggu Pembayaran"
          }
        ];
      }
    }
  },
  computed: {
    tdataKey() {
      if (this.tdata) {
        return Object.keys(this.tdata[0]);
      }
      return [];
    }
  }
};
</script>

<style lang="scss">
.px-4 {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}
.py-4 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
.su_table {
  overflow-x: auto;
  box-shadow: 0 5px 10px 5px rgba(187, 204, 236, 0.3);
}
.table-auto {
  table-layout: auto !important;
  min-width: 780px;
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 10px 5px rgba(187, 204, 236, 0.3);

  thead {
    background-color: #00aaae;
    text-align: center;
    tr {
      th {
        color: #fff;
        font-weight: bold;
        position: relative;
        white-space: nowrap;
        &:not(:first-child)::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          height: 60%;
          width: 1px;
          background-color: #f7f7f7;
          clear: both;
        }
      }
    }
  }

  tr {
    text-align: center;
    color: #0d294a;
    font-size: 14px;
  }
}

.border {
  border-width: 1px !important;
  border-bottom: 1px solid #e2e8f0;
}
</style>