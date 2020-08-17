<template>
    <div class="row mt-5">
        <div class="col-md-6 offset-3">
            <h3>Register</h3>
            <div>
                <div class="form-group">
                    <input type="text" v-model="name" class="form-control" placeholder="Your Name *"/>
                </div>
                <div class="form-group">
                    <input type="email" v-model="email" class="form-control" placeholder="Your Email *"/>
                </div>
                <div class="form-group">
                    <input type="password" v-model="password" class="form-control" placeholder="Your Password *"/>
                </div>
                <div class="form-group">
                    <input type="submit" @click.prevent="register" class="btnSubmit" value="Register" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                name: '',
                email: '',
                password: '',
            }
        },
        methods: {
            register() {
                this.$store.dispatch('user/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                })
                .then(() => {
                    alert('Successfully registered!');
                    this.$router.push({name: 'login'});
                });
            }
        }
    }
</script>

<style scoped>

</style>
