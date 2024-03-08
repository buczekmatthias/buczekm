import "./index.css";

import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(ToastPlugin).mount("#app");
