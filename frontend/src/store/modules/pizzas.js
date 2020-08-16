import axios from "axios";
import {BACKEND_URL, ENDPOINT_API, ENDPOINT_PIZZAS} from "../../config/config";

// initial state
const state = () => ({
    all: []
});

// getters
const getters = {};

// actions
const actions = {
    async setAll ({ commit }) {
        try {
            const response = await axios.get(BACKEND_URL + ENDPOINT_API + ENDPOINT_PIZZAS);
            commit("setAll", response.data);
        } catch(error) {
            console.error("error", error);
        }
    }
};

// mutations
const mutations = {
    setAll (state, data) {
        state.all = data;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
