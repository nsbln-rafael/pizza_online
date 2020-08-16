import axios from "axios";

// initial state
const state = () => ({
    all: [],
    current: {}
});

// getters
const getters = {};

// actions
const actions = {
    async setAll ({ commit }) {
        try {
            const response = await axios.get("http://localhost:8000/api/currencies");
            commit("setAll", response.data);
            commit("setCurrent");
        } catch(error) {
            console.error("error", error);
        }
    },

    changeCurrent ({commit}, id) {
        commit("changeCurrent", id);
    }
};

// mutations
const mutations = {
    setAll (state, data) {
        state.all = data;
    },

    setCurrent (state) {
        let current = state.all.find(object => object.name === 'euro');

        state.current = current;
    },

    changeCurrent (state, id) {
        let newCurrent = state.all.find(object => object.id === id);

        state.current = newCurrent;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
