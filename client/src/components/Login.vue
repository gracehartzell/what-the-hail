<template>
    <div>
        <h4>Login</h4>
        <form>
            <label for="username" >UserName</label>
            <div>
                <input id="username" type="username" v-model="username" required autofocus>
            </div>
            <div>
                <label for="password" >Password</label>
                <div>
                    <input id="password" type="password" v-model="password" required>
                </div>
            </div>
            <div>
                <button type="submit" @click="handleSubmit">
                    Login
                </button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                username : "",
                password : ""
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                if (this.password.length > 0) {
                    this.$http.post('http://localhost:3000/signin', {
                        username: this.username,
                        password: this.password
                    })
                    .then(response => {
                        let is_admin = response.data.user.is_admin
                        localStorage.setItem('username',JSON.stringify(response.data.user))
                        localStorage.setItem('password_digest',response.data.token)

                        if (localStorage.getItem('password_digest') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else {
                                if(is_admin== 1){
                                    this.$router.push('admin')
                                }
                                else {
                                    this.$router.push('dashboard')
                                }
                            }
                        }
                    })
                    .catch(function (error) {
                        console.error(error.response);
                    });
                }
            }
        }
    }
</script>