<template>
    <div></div>
</template>

<script>
    export default {
        name: "Logout",
        created() {
            this.$store.dispatch('user/logout')
                .then(()=>{
                    alert('Successfully logged out!');
                    this.$router.push({name: 'main'});
                });
        }
    }
</script>

<style scoped>

</style>
