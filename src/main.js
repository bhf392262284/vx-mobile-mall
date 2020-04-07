import Vue from "vue";
import App from "./App";
import { request } from "@/utils/index";
import "@/style/globalStyle.css";

Vue.config.productionTip = false;
Vue.prototype.$http = request;
App.mpType = "app";

const app = new Vue(App);
app.$mount();
