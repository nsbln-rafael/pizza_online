<template>
    <div>
        <img :src="'http://127.0.0.1:8000/' + pizza.image" class="card-img-top" :alt="pizza.name">
        <div class="card-body">
            <h5 class="card-title text-center">{{ pizza.name}}</h5>
            <p class="card-description text-center">{{ pizza.description.substr(0, 70) + '...'}}</p>
        </div>
        <div class="card-bottom">
            <div class="row">
                <div class="col-md-4">
                    <p class="card-price">{{ pizza.price }} $</p>
                </div>
                <div class="col-md-4">
                    <input type="number" v-model="quantity" min="0" class="form-control" style="border: none" placeholder="0">
                </div>
                <div class="col-md-4">
                    <a class="btn btn-outline-dark" @submit.prevent="addToCart()">Add</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pizza",
        props: {
            pizza: null
        },
        data() {
            return {
                quantity: 0,
            }
        },
        methods: {
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
