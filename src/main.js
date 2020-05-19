import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"
import store from "./store";

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store:store,
}).$mount('#app')
