import Vue from 'vue';
import App from './App.vue';
import router from "./router/router.js";
import Toasted from "vue-toasted";

require("./assets/sass/app.scss");

Vue.config.productionTip = false

Vue.use(Toasted);

new Vue({
	render: (h) => h(App),
	router,
}).$mount("#app");
