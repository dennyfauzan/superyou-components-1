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
          <td class="border px-4 py-4">{{ field.payment_term }}</td>
          <td class="border px-4 py-4">{{ field.due_date }}</td>
          <td class="border px-4 py-4">{{ field.paid_date }}</td>
          <td class="border px-4 py-4">{{ field.payment_method }}</td>
          <td class="border px-4 py-4" style="white-space: nowrap;">{{ field.total }}</td>
          <td class="border px-4 py-4">{{ field.status }}</td>
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
            field: "pembayaran"
          },
          {
            label: "Jatuh Tempo",
            field: "jatuh_tempo"
          },
          {
            label: "Tanggal Bayar",
            field: "tanggal_bayar"
          },
          {
            label: "Metode Bayar",
            field: "Metode Bayar"
          },
          {
            label: "Total",
            field: "total_amount"
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