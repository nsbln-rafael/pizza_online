import Vue from 'vue';
import Vuex from 'vuex';
import pizzas from "./modules/pizzas";
import cart from "./modules/cart";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        pizzas,
        cart,
        user
    }
});
