import axios from "axios";

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
            const response = await axios.get("http://localhost:8000/api/pizzas");
            commit("setAll", response.data);
        } catch(error) {
            console.log("error", error);
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
