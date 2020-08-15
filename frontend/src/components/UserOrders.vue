<template>
    <div class="mt-4">
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
                            <b style="color: red">{{item.pizza.name}}</b> / {{item.quantity}} / {{item.pizza.price}} $
                        </p>
                    </td>
                    <td>{{ order.total_price }} $</td>
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
export default {
    name: "UserOrders",
    data() {
        return {
            orders: [],
            loaded: false,
        }
    },
    mounted() {
        setTimeout(() => {
            this.orders = this.$store.state.user.orders;
            this.loaded = true;
        }, 800);
    },

    methods: {
        goBack () {
            this.$router.push({name: 'main'});
       },
    }
}
</script>

<style scoped>

</style>
