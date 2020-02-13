import Vue from "vue";
import Router from "vue-router";

import ShowCase from "@/pages/ShowCase.vue";
import Form from "@/pages/Form.vue";
import PaymentHistory from "@/components/PaymentHistory/PaymentHistory.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/components",
      name: "components",
      component: ShowCase
    },
    {
      path: "/form-components",
      name: "formComponents",
      component: Form
    },
    {
      path: "/payment-history",
      name: "PaymentHistoryContainer",
      component: PaymentHistory
    }
  ]
});

export default router;
