// initial state

import axios from "axios";

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
            const response = await axios.get("http://localhost:8000/api/orders");
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
