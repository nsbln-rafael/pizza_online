import Vue from 'vue';
import Vuex from 'vuex';
import pizzas from "./modules/pizzas";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        pizzas
    }
});
