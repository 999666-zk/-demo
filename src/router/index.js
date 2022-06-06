import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/layout/home",
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/loginMobile",
    component: () => import("@/views/LoginMobile.vue"),
  },
  {
    path: "/layout",
    component: () => import("@/views/Layout.vue"),
    children: [
      {
        path: "home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "mine",
        component: () => import("@/views/Mine.vue"),
      },
      {
        path: "text",
        name: "text",
        component: () => import("@/views/Text.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
