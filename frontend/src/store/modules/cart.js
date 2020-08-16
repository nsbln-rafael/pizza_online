// initial state

import axios from "axios";
import {BACKEND_URL, ENDPOINT_API, ENDPOINT_ORDERS} from "../../config/config";

const state = () => ({
    all: [],
    sum: 0,
    quantity: 0,
    delivery: 2,
});

// getters
const getters = {
    isEmpty: () => {
        let cartInfo = JSON.parse(localStorage.getItem('cartInfo'));

        if (cartInfo !== null) {
            return (cartInfo.all.length === 0);
        }

        return true;
    },
};

// actions
const actions = {
    setAll ({ commit }) {
        commit("setAll");
        commit("calculateTotalSum");
        commit("calculateTotalQuantity");
    },

    addItem ({commit}, item) {
        if (item.quantity > 0) {
            commit("addItem", item);
            commit("calculateTotalSum");
            commit("calculateTotalQuantity");
        }
    },

    changeItemQuantity ({commit}, params) {
        commit("changeItemQuantity", params);
        commit("calculateTotalSum");
        commit("calculateTotalQuantity");
    },

    removeItem ({commit}, pizzaId) {
        commit("removeItem", pizzaId);
        commit("calculateTotalSum");
        commit("calculateTotalQuantity");
    },

    removeAll ({commit}) {
        commit("removeAll");
        commit("calculateTotalSum");
        commit("calculateTotalQuantity");
    },

    emptyError () {
        alert('Cart is empty!');
    },

    createOrder ({commit}, params) {
        return new Promise(((resolve, reject) => {
            axios.post(BACKEND_URL + ENDPOINT_API + ENDPOINT_ORDERS, params)
                .then(() => {
                    let successMessage = 'Order successfully created!';

                    commit("removeAll");
                    commit("calculateTotalSum");
                    commit("calculateTotalQuantity");

                    resolve(successMessage);
                }).catch((error) => {
                    let errorMessage = '';
                    let data = error.response.data ? JSON.parse(error.response.data) : [];

                    Object.values(data).forEach(value => {
                        errorMessage += value[0] + '\n';
                    });

                    reject(errorMessage);
            });
        }));

    }
};

// mutations
const mutations = {
    setAll (state) {
        let cartInfo = JSON.parse(localStorage.getItem('cartInfo'));

        if (cartInfo !== null) {
            state.all = cartInfo.all;
            state.sum = cartInfo.sum;
            state.quantity = cartInfo.quantity;
        }
    },

    addItem (state, item) {
        let pizzaId = item.pizza.id;
        let itemInArray = state.all.find(value => value.pizza.id === pizzaId);

        if (undefined !== itemInArray) {
            itemInArray.quantity += Number(item.quantity);
        } else {
            state.all.push(item);
        }

        localStorage.setItem('cartInfo', JSON.stringify(state));
    },

    changeItemQuantity (state, params) {
        if (params.quantity <= 0) {
            return;
        }

        for (let key in state.all) {
            if (state.all[key].pizza.id === params.pizzaId) {
                state.all[key].quantity = params.quantity;
            }
        }

        localStorage.setItem('cartInfo', JSON.stringify(state));
    },

    removeItem (state, pizzaId) {
        for (let key in state.all) {
            if (state.all[key].pizza.id === pizzaId) {
                state.all.splice(key, 1);
            }
        }

        if (state.all.length === 0) {
            localStorage.removeItem('cartInfo');
        } else {
            localStorage.setItem('cartInfo', JSON.stringify(state));
        }
    },

    removeAll (state) {
        state.all = [];

        localStorage.removeItem('cartInfo');
    },

    calculateTotalSum: (state) => {
        let total = 0;

        state.all.forEach((item) => {
            total += item.pizza.price * item.quantity;
        });

        if (total > 0) {
            total += state.delivery;
        }

        state.sum = total;
    },

    calculateTotalQuantity: (state) => {
        let total = 0;

        state.all.forEach((item) => {
            total += item.quantity;
        });

        state.quantity = total;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
