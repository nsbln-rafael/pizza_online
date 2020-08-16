<template>
    <div id="app">
        <Header></Header>
        <b-container>
            <currencies></currencies>
            <router-view></router-view>
        </b-container>
    </div>
</template>

<script>

import Header from "./components/Header";
import Currencies from "./components/Currencies";

export default {
    name: 'App',
    components: {Currencies, Header},
    methods: {
        loadCurrencies() {
            this.$store.dispatch('currencies/setAll');
        },
        loadPizzas() {
            this.$store.dispatch('pizzas/setAll');
        },
        loadCart() {
            this.$store.dispatch('cart/setAll');
        },
        loadUserOrders() {
            this.$store.dispatch('user/setOrders');
        }
    },
    created() {
        this.loadPizzas();
        this.loadCart();
        this.loadUserOrders();
        this.loadCurrencies();
    }
}
</script>

<style>
</style>
