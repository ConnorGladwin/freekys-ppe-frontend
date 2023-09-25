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
    path: "/products/brandCategory",
    name: "brand-category",
    component: () => import("../views/ProductsByBrand.vue"),
  },
  {
    path: "/products/freekys-picks/:category",
    name: "freekysPicks",
    component: () => import("../views/FreekysPicks.vue"),
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
  {
    path: "/quote",
    name: "quote",
    component: () => import("../utils/quote.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
