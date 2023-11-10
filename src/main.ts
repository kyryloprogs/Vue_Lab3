import Vue from "vue";
import App from "./App.vue";
import router from "./router"; // Імпортуємо створений router

Vue.config.productionTip = false;

new Vue({
  router, // Додаємо router до додатку
  render: (h) => h(App),
}).$mount("#app");