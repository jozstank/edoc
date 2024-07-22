import "./assets/main.css";
import router from "./router.js";
import pinia from "./store.js";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(pinia).use(router).mount("#app");
