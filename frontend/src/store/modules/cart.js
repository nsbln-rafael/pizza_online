// initial state

const state = () => ({
    all: [],
    sum: 0,
    quantity: 0,
    delivery: 2,
});

// getters
const getters = {
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

    removeItem ({commit}, pizzaId) {
        commit("removeItem", pizzaId);
        commit("calculateTotalSum");
        commit("calculateTotalQuantity");
    },

    removeAll ({commit}) {
        commit("removeAll");
        commit("calculateTotalSum");
        commit("calculateTotalQuantity");
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

    removeItem (state, pizzaId) {
        for (let key in state.all) {
            if (state.all[key].pizza.id === pizzaId) {
                state.all.splice(key, 1);
            }
        }

        localStorage.setItem('cartInfo', JSON.stringify(state));
    },

    removeAll (state) {
        state.all = [];

        localStorage.setItem('cartInfo', JSON.stringify(state));
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
