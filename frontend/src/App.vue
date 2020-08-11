<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
    name: 'App',
    components: {},
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
