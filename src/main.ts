import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router/Router";
import VueCarousel from "vue-carousel";

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
