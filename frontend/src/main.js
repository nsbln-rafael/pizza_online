import App from "./App";
import Vue from 'vue/dist/vue'
import VueRouter from "vue-router";
import Vuex from "vuex";
import {routes} from "./routes";
import {store} from "./store/store";

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
}).$mount('#app');
