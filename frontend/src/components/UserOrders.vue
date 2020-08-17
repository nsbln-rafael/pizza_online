<template>
    <div class="mt-4">
        <div class="row">
            <currencies></currencies>
        </div>
        <div class="row mb-3">
            <div class="col-md-2">
                <h5>My orders</h5>
            </div>
        </div>
        <table class="table table-sm" v-if="loaded">
            <thead class="">
                <tr class="text-center">
                    <th scope="col">Order ID</th>
                    <th scope="col">Items(name / quantity / price)</th>
                    <th scope="col">Total price</th>
                </tr>
            </thead>
            <tbody >
                <tr v-for="order in orders" :key="order.id" class="text-center">
                    <th scope="row">{{ order.id }}</th>
                    <td>
                        <p v-for="item in order.items" :key="item.id">
                            <b style="color: red">{{item.pizza.name}}</b> / {{item.quantity}} / {{ (currency.rate * item.pizza.price).toFixed(2) }} {{ currency.sign }}
                        </p>
                    </td>
                    <td>{{ (currency.rate * order.total_price).toFixed(2) }} {{ currency.sign }}</td>
                </tr>
            </tbody>
        </table>
        <div class="row mb-3">
            <div class="col-md-2">
                <button type="button" @click="goBack" class="btn btn-primary">
                    Back
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Currencies from "./Currencies";
export default {
    name: "UserOrders",
    components: {Currencies},
    data() {
        return {
            orders: [],
            loaded: false,
            currency: {},
        }
    },
    mounted() {
        this.currency = this.$store.state.currencies.current;

        setTimeout(() => {
            this.orders = this.$store.state.user.orders;
            this.loaded = true;
        }, 800);

        this.unwatchCurrency = this.$store.watch(
            (state) => {return state.currencies.current},
            (current) => {this.currency = current},
            {deep:true}
        );
    },

    methods: {
        goBack () {
            this.$router.push({name: 'main'});
       },
    },

    beforeDestroy() {
        this.unwatchCurrency();
    }
}
</script>

<style scoped>

</style>
