import App from "./App";
import Vue from 'vue/dist/vue.esm';
import VueRouter from "vue-router";
import Vuex from "vuex";
import {routes} from "./routes";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresItems)) {
        if ((store.state.cart.all.length === 0) && store.getters['cart/isEmpty']) {
            next({name: 'main'});
            store.dispatch('cart/emptyError');
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresAnonymous)) {
        if (store.getters['user/loggedIn']) {
            next({name: 'main'});
        } else {
            next()
        }
    }else if (to.matched.some(record => record.meta.requiresLoggedIn)) {
        if (!store.getters['user/loggedIn']) {
            next({name: 'main'});
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
}).$mount('#app');
