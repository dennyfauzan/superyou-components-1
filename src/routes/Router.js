import Vue from "vue";
import Router from "vue-router";

import ShowCase from "@/pages/ShowCase.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/components",
      name: "components",
      component: ShowCase
    }
  ]
});

export default router;
