<template>
    <div class="row mt-5">
        <div class="col-md-6 offset-3">
            <h3>Login</h3>
            <div>
                <div class="form-group">
                    <input type="text" v-model="username" class="form-control" placeholder="Your Email/Username *"/>
                </div>
                <div class="form-group">
                    <input type="password" v-model="password" class="form-control" placeholder="Your Password *"/>
                </div>
                <div class="form-group">
                    <input type="submit" @click.prevent="login" class="btnSubmit" value="Login" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            login() {
                this.$store.dispatch('user/login', {
                    username: this.username,
                    password: this.password,
                })
                .then(() => {
                    this.$store.dispatch('user/setOrders');
                    this.$router.push({name: 'main'});
                });
            }
        }
    }
</script>

<style scoped>

</style>
