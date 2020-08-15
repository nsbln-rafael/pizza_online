<template>
    <div id="app">

        <Header></Header>

        <b-container>
            <router-view></router-view>
        </b-container>

    </div>
</template>

<script>

import Header from "./components/Header";

export default {
    name: 'App',
    components: {Header},
    methods: {
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
    }
}
</script>

<style>
</style>
