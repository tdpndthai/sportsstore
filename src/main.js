import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;
Vue.filter("currency", (value) => new Intl.NumberFormat("vi-VN",
    { style: "currency", currency: "VND" }).format(value));


new Vue({
  render: h => h(App),
  store:store,
  router:router,
}).$mount('#app')
