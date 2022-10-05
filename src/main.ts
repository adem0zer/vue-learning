import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp(App).use(router, VueAxios, axios, ElementPlus).mount("#app");
