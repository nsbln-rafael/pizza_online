import Vue from 'vue/dist/vue'
import VueRouter from "vue-router";
import {routes} from "./routes";
import App from "./App";

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app');
