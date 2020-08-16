// initial state

import axios from "axios";
import {BACKEND_URL, ENDPOINT_API, ENDPOINT_ORDERS} from "../../config/config";

const state = () => ({
    orders: [],
});

// getters
const getters = {
};

// actions
const actions = {
    async setOrders ({ commit }) {
        try {
            const response = await axios.get(BACKEND_URL + ENDPOINT_API + ENDPOINT_ORDERS);
            commit("setOrders", response.data);
        } catch(error) {
            console.error("error", error);
        }
    }
};

// mutations
const mutations = {
    setOrders (state, data) {
        state.orders = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
