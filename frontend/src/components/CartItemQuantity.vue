<template>
    <td><input type="number" min="1" v-model="quantity" @change="changeItemQuantity"></td>
</template>

<script>

export default {
    name: 'CartItemQuantity',
    props: {
        item: null,
    },
    data () {
        return {
            quantity: 1,
        }
    },

    mounted() {
        this.quantity = this.item.quantity;
    },

    methods: {
        changeItemQuantity () {
            let params = {
                pizzaId: this.item.pizza.id,
                quantity: parseInt(this.quantity),
            };

            this.$store.dispatch('cart/changeItemQuantity', params);
        },
    }
}
</script>

<style scoped>

</style>>
