import { storiesOf } from "@storybook/vue";
import { withKnobs, object, button } from "@storybook/addon-knobs";

import CardInvoice from "./CardInvoice.vue";

const paymentDetail = {
  lastPayment: "3 January 2018",
  nextPayment: "3 Agustus 2018",
  status: "success",
  status_message: "Menunggu Pembayaran",
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

const payNowAction = () => alert("from paynows");

storiesOf("CardInvoice", module)
  .addDecorator(withKnobs)
  .add(
    "default",
    () => {
      return {
        components: {
          CardInvoice
        },
        props: {
          detailPayment: {
            default: object("paymentDetail", paymentDetail)
          },
          payNowAction: {
            default: button("BAYAR SEKARANG", payNowAction)
          }
        },
        template: `
          <div style="padding:3rem 8rem;">
            <CardInvoice :detailPayment="detailPayment" :payNowAction="payNowAction" title="Invoice xxx xxx xxx"/>
          </div>
        `
      };
    },
    {
      notes: `Simple Card Invoice`
    }
  );
