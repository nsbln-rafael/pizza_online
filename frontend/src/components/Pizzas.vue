<template>
    <b-row mt="2" v-if="loaded">
        <div class="row">
            <currencies></currencies>
        </div>
        <div class="col-md-3 mt-4" v-for="pizza in pizzas" :key="pizza.id">
            <pizza :pizza="pizza">
            </pizza>
        </div>
    </b-row>
</template>

<script>
import Pizza from "./Pizza";
import Currencies from "./Currencies";
export default {
  name: 'Pizzas',
    components: {Pizza,Currencies},
    data() {
        return {
            pizzas: [],
            loaded: false,
        }
    },
    mounted() {
        setTimeout(() => {
           this.pizzas = this.$store.state.pizzas.all;
           this.loaded = true;
        }, 800);
    },
}
</script>

<style scoped>

</style>
