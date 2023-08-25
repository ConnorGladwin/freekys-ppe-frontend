import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../views/Product.vue"),
  },
  {
    path: "/products/:category",
    props: true,
    name: "products",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/product/:id",
    props: true,
    name: "product",
    component: () => import("../views/Product.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/Checkout.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
