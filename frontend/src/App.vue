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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
