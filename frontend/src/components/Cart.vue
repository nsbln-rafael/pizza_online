<template>
    <div class="order mt-4">
        <div class="row mb-3">
            <div class="col-md-2">
                <h5>Order info:</h5>
            </div>
            <div class="offset-8">
            </div>

            <div class="col-md-2">
                <button type="button" @click="clearCart()" v-if="items.length > 0" class="btn btn-outline-danger">
                    Clear <b-icon-cart-dash></b-icon-cart-dash>
                </button>
            </div>
        </div>
        <table class="table table-sm">
            <thead class="">
                <tr class="text-center">
                    <th scope="col">Item</th>
                    <th scope="col">Quantity</th>
                    <th scope="col"></th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody >
                <tr v-for="item in items" :key="item.pizza.id" class="text-center">
                    <th scope="row">{{ item.pizza.name }}</th>
                    <cart-item-quantity :item="item"></cart-item-quantity>
                    <td>х</td>
                    <td>{{ item.pizza.price }} $</td>
                    <td>
                        <button type="button" @click="removeItem(item.pizza.id)" class="btn btn-outline-danger">
                            <b-icon-trash></b-icon-trash>
                        </button>
                    </td>
                </tr>
                <tr class="text-center">
                    <th>Delivery:</th>
                    <td colspan="2"></td>
                    <td>{{ delivery }} $</td>
                    <td></td>
                </tr>
                <tr class="text-center bg-primary">
                    <th>Total:</th>
                    <td colspan="2"></td>
                    <td>{{ sum.toFixed(2) }} $</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <h5>Client info:</h5>
        <div>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter name">
            </div>
            <div class="form-group">
                <label for="surname">Surname</label>
                <input type="text" class="form-control" id="surname" placeholder="Enter surname">
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" placeholder="Enter address">
            </div>
            <div class="form-group">
                <label for="phone number">Phone number</label>
                <input type="text" class="form-control" id="phone number" placeholder="Enter phone number">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
</template>

<script>

    import CartItemQuantity from "./CartItemQuantity";
    export default {
        name: 'Cart',
        components: {CartItemQuantity},
        data() {
            return {
                items: [],
                delivery: 0,
                quantity: 0,
                sum: 0,
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
                this.items = cart.all;
                this.quantity = cart.quantity;
                this.sum = cart.sum;
                this.delivery = cart.delivery;
            },

            removeItem (pizzaId) {
                this.$store.dispatch('cart/removeItem', pizzaId);

                if (this.items.length === 0) {
                    this.$router.push({name: 'main'});
                }
            },

            clearCart () {
                this.$store.dispatch('cart/removeAll');

                this.$router.push({name: 'main'});
            },
        },
        beforeDestroy() {
            this.unwatch();
        }
    }
</script>

<style scoped>

</style>>
