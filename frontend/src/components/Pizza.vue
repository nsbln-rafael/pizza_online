<template>
    <div>
        <img :src="url + '/' + pizza.image" class="card-img-top" :alt="pizza.name">
        <div class="card-body">
            <h5 class="card-title text-center">{{ pizza.name}}</h5>
            <p class="card-description text-center" :title="pizza.description">{{ pizza.description.substr(0, 70) + '...'}}</p>
        </div>
        <div class="card-bottom">
            <div class="row">
                <div class="col-md-4">
                    <p class="card-price">{{ (pizza.price * this.currency.rate).toFixed(2)}} {{this.currency.sign}}</p>
                </div>
                <div class="col-md-4">
                    <input type="number" v-model="quantity" min="1" class="form-control" style="border: none">
                </div>
                <div class="col-md-4">
                    <a class="btn btn-outline-dark" @click="addToCart()">Add</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {BACKEND_URL} from "../config/config";

export default {
    name: "Pizza",
    props: {
        pizza: null,
    },
    data() {
        return {
            quantity: 1,
            currency: {},
            url: BACKEND_URL
        }
    },
    methods: {
        addToCart() {
            let item = {
                pizza: this.pizza,
                quantity: parseInt(this.quantity)
            };

            this.$store.dispatch('cart/addItem', item);
        }
    },
    mounted() {
        this.currency = this.$store.state.currencies.current;

        this.unwatch = this.$store.watch(
            (state) => {return state.currencies.current},
            (current) => {this.currency = current},
            {deep:true}
        );
    },
    beforeDestroy() {
        this.unwatch();
    }
}
</script>

<style scoped>
    .card-description {
        font-size: 14px;
        color: grey;
    }
    .card-price {
        font-size: 16px;
        color: #08a8a0;
        margin-top: 7px;
    }
    .card-body {
        padding-top: 0;
        padding-bottom: 0;
    }
</style>
