<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb" style="background-color: white">
            <li class="breadcrumb-item"
                v-for="currency in currencies"
                :key="currency.id"
            >
                <a
                    class="breadcrumb-item"
                    aria-current="page"
                    :class = "current.id === currency.id ? 'active':''"
                    @click="changeCurrent(currency.id)"
                >
                    {{ currency.sign }}({{currency.name}})
                </a>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    name: "Currencies",
    data() {
        return {
            currencies: [],
            current: {}
        }
    },
    methods: {
        changeCurrent(currencyId) {
            this.$store.dispatch('currencies/changeCurrent', currencyId);

            this.current = this.$store.state.currencies.current;
        },
    },
    mounted() {
        setTimeout(() => {
            this.currencies = this.$store.state.currencies.all;
            this.current = this.$store.state.currencies.current;
        }, 700);
    }
}
</script>

<style scoped>

</style>
