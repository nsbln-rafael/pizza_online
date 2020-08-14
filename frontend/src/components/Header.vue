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
                        <button type="button" @click="cartOpened = !cartOpened" title="My cart" class="btn btn-light">
                            <b-icon-cart></b-icon-cart>
                            <b-badge variant="dark">{{ cartQuantity }}</b-badge> |
                            <b-badge variant="dark">{{ cartSum.toFixed(2) }}$</b-badge>
                        </button>
                    </b-navbar-nav>
                </b-collapse>

            </div>
        </b-navbar>
        <div class="modal" tabindex="-1" :style="cartOpened ? 'display: block' : 'display: none'" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title">Cart <b-icon-cart></b-icon-cart></h5>
                    </div>

                    <div class="modal-body" v-if="cartItems.length > 0">
                        <div class="row mb-1" v-for="(item) in cartItems" :key="item.pizza.id">

                            <div class="offset-1">
                            </div>

                            <div class="col-md-3">
                                <b style="color: red">{{ item.pizza.name }}:</b>
                            </div>

                            <div class="offset-2">
                            </div>

                            <div class="col-md-3">
                                <p>{{ item.quantity }} x {{ item.pizza.price }}</p>
                            </div>

                            <div class="col-md-3">
                                <button type="button" @click="removeItemFromCart(item.pizza.id)" class="btn btn-outline-danger"><b-icon-trash></b-icon-trash></button>
                            </div>

                        </div>

                        <div class="row mt-10">

                            <div class="offset-1">
                            </div>

                            <div class="col-md-2">
                                <b>Delivery:</b>
                            </div>

                            <div class="offset-4">
                            </div>

                            <div class="col-md-3">
                                <p>{{cartDelivery}}</p>
                            </div>
                        </div>

                        <div class="row mt-10">

                            <div class="offset-1">
                            </div>

                            <div class="col-md-2">
                                <b>Total:</b>
                            </div>

                            <div class="offset-3">
                            </div>

                            <div class="col-md-4">
                                <p>{{cartQuantity}} / {{ cartSum.toFixed(2) }} $</p>
                            </div>
                        </div>
                    </div>

                    <div class="modal-body" v-else>
                        <h6>Empty</h6>
                    </div>

                    <div class="modal-footer">
                        <button type="button" v-if="cartItems.length > 0" class="btn btn-primary">Confirm <b-icon-cart-check></b-icon-cart-check></button>
                        <button type="button" @click="clearCart()" v-if="cartItems.length > 0" class="btn btn-warning">Clear <b-icon-cart-dash></b-icon-cart-dash></button>
                        <button type="button" @click="cartOpened=false" class="btn btn-secondary" data-="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
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
        }
    },

    mounted() {
        let cart = this.$store.state.cart;

        this.loadCart(cart);

        this.unwatch = this.$store.watch(
            (state) => {return state.cart;},
            (cart) => {this.loadCart(cart);},
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

        removeItemFromCart (pizzaId) {
            this.$store.dispatch('cart/removeItem', pizzaId);
        },

        clearCart () {
            this.$store.dispatch('cart/removeAll');
        }
    },
    beforeDestroy() {
        this.unwatch();
    }
}
</script>

<style>
    .bi-cart {
        margin-right: 7px;
    }
</style>
