// initial state

import axios from "axios";
import {
    BACKEND_URL,
    ENDPOINT_API,
    ENDPOINT_LOGIN,
    ENDPOINT_LOGOUT,
    ENDPOINT_ORDERS,
    ENDPOINT_REGISTER
} from "../../config/config";

const state = () => ({
    orders: [],
    token: localStorage.getItem('access_token') || null,
});

// getters
const getters = {
    loggedIn(state) {
        return state.token !== null;
    },
};

// actions
const actions = {
    async setOrders ({ commit, state }) {
        if (state.token) {
            try {
                const response = await axios.get(BACKEND_URL + ENDPOINT_API + ENDPOINT_ORDERS, {
                    headers: {Authorization: 'Bearer ' + state.token}
                });
                commit("setOrders", response.data);
            } catch(error) {
                console.error("error", error);
            }
        }
    },
    login ({ commit }, credentials) {
        return new Promise((resolve, reject) => {
            axios.post(BACKEND_URL + ENDPOINT_API + ENDPOINT_LOGIN, credentials)
            .then((response) => {
                commit("setTokenGlobal", JSON.parse(response.data).access_token);
                resolve();
            }).catch((error) => {
                alert(error.response.data);
                reject();
            });
         });
    },
    register ({ commit }, credentials) {
        return new Promise((resolve, reject) => {
            axios.post(BACKEND_URL + ENDPOINT_API + ENDPOINT_REGISTER, credentials)
            .then(() => {
                commit('plug');
                resolve();
            }).catch((error) => {
                let errorMessage = '';
                let data = error.response ? JSON.parse(error.response.data) : [];

                Object.values(data).forEach(value => {
                    errorMessage += value[0] + '\n';
                });
                alert(errorMessage);
                reject();
            });
        });
    },
    logout ({ commit, state, getters }) {
        if (getters.loggedIn) {
            return new Promise((resolve, reject) => {
                axios.post(BACKEND_URL + ENDPOINT_API + ENDPOINT_LOGOUT, {}, {headers: {Authorization: 'Bearer ' + state.token}})
                .then(() => {
                    commit("removeTokenGlobal");
                    resolve();
                }).catch((error) => {
                    alert(error.response.data);
                    reject();
                });
            });
        }
    },
};

// mutations
const mutations = {
    setOrders (state, data) {
        state.orders = data;
    },

    setTokenGlobal (state, token) {
        localStorage.setItem('access_token', token);
        state.token = token;
    },

    removeTokenGlobal (state) {
        localStorage.removeItem('access_token');
        state.token = null;
        state.orders = [];
    },

    plug (){}
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
