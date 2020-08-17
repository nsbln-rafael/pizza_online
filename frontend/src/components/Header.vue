<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">

                <router-link :to="{name: 'main'}" title="Menu">
                    <b-navbar-brand>PIZZA ONLINE</b-navbar-brand>
                </router-link>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <b-navbar-nav class="ml-auto">
                        <router-link v-if="!loggedIn" :to="{name: 'login'}" class="btn" style="color: white">
                            Login
                        </router-link>
                        <router-link v-if="!loggedIn" :to="{name: 'register'}" class="btn" style="color: white">
                            Register
                        </router-link>
                        <router-link v-if="loggedIn" :to="{name: 'logout'}" class="btn" style="color: white">
                            Logout
                        </router-link>
                        <router-link v-if="loggedIn" :to="{name: 'orders'}" title="My orders" class="btn btn-light">
                          <b-icon-list-check></b-icon-list-check>
                        </router-link>
                        <button type="button" @click="redirectToCart()" title="My cart" class="btn btn-light">
                            <b-icon-cart></b-icon-cart>
                            <b-badge variant="dark">{{ cartQuantity }}</b-badge> |
                            <b-badge variant="dark">{{ (cartSum * currency.rate).toFixed(2) }} {{ currency.sign }}</b-badge>
                        </button>
                    </b-navbar-nav>
                </div>

            </div>
        </nav>
    </div>
</template>

<script>

export default {
    name: 'Header',
    data() {
        return {
            cartItems: [],
            cartSum: 0,
            cartDelivery: 0,
            cartQuantity: 0,
            cartOpened: false,
            currency: {},
            loggedIn: false,
        }
    },

    mounted() {
        let cart = this.$store.state.cart;
        this.currency = this.$store.state.currencies.current;
        this.loggedIn = (this.$store.state.user.token !== null);

        this.loadCart(cart);

        this.unwatch = this.$store.watch(
            (state) => {return state.cart;},
            (cart) => {this.loadCart(cart);},
            {deep:true}
        );

        this.unwatchCurrency = this.$store.watch(
            (state) => {return state.currencies.current},
            (current) => {this.currency = current},
            {deep:true}
        );

        this.unwatchUser = this.$store.watch(
            (state) => {return state.user.token},
            (token) => {this.loggedIn = (token !== null)},
            {deep:true}
        );
    },
    methods: {
        loadCart (cart) {
            this.cartItems = cart.all;
            this.cartQuantity = cart.quantity;
            this.cartSum = cart.sum;
            this.cartDelivery = cart.delivery;
        },

        redirectToCart () {
            this.$router.push({name: 'cart'}, () => {});
        }
    },
    beforeDestroy() {
        this.unwatch();
        this.unwatchCurrency();
        this.unwatchUser();
    }
}
</script>

<style>
    .bi-cart {
        margin-right: 7px;
    }
</style>
