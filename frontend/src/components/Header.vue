<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <div class="container">

                <router-link :to="{name: 'main'}" title="Menu">
                    <b-navbar-brand>PIZZA ONLINE</b-navbar-brand>
                </router-link>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <router-link :to="{name: 'orders'}" title="My orders" class="btn btn-light">
                          <b-icon-list-check></b-icon-list-check>
                        </router-link> |
                        <button type="button" @click="redirectToCart()" title="My cart" class="btn btn-light">
                            <b-icon-cart></b-icon-cart>
                            <b-badge variant="dark">{{ cartQuantity }}</b-badge> |
                            <b-badge variant="dark">{{ (cartSum * currency.rate).toFixed(2) }} {{ currency.sign }}</b-badge>
                        </button>
                    </b-navbar-nav>
                </b-collapse>

            </div>
        </b-navbar>
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
        }
    },

    mounted() {
        let cart = this.$store.state.cart;
        this.currency = this.$store.state.currencies.current;

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
    }
}
</script>

<style>
    .bi-cart {
        margin-right: 7px;
    }
</style>
