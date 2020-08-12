<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <router-link :to="{name: 'main'}">
            <b-navbar-brand>PIZZA ONLINE</b-navbar-brand>
        </router-link>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <router-link :to="{name: 'cart'}">
                    <b-navbar-nav>
                        <b-button variant="dark">
                            <b-icon-cart></b-icon-cart>
                            <b-badge variant="dark">{{ cart.length }}</b-badge>
                        </b-button>
                    </b-navbar-nav>
                </router-link>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: 'Header',
    data() {
        return {
            cart: [],
        }
    },
    methods: {

    }
}
</script>

<style>
    .bi-cart {
        margin-right: 7px;
    }
</style>
