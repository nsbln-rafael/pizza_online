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
            this.$store.dispatch('pizzas/getAllItems');
        }
    },
    created() {
        this.loadPizzas();
    }
}
</script>

<style>
</style>
