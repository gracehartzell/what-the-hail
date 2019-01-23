<template>
    <div>
        <h4>Register</h4>
        <form>
            <label for="username" >Username</label>
            <div>
                <input id="username" type="username" v-model="username" required>
            </div>

            <label for="password">Password</label>
            <div>
                <input id="password" type="password" v-model="password" required>
            </div>
            <div>
                <button type="submit" @click="handleSubmit">
                    Register
                </button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        props : ["nextUrl"],
        data(){
            return {
                username : "",
                password : "",
            }
        },
        methods : {
            handleSubmit(e) {
                e.preventDefault()

                if (this.password === this.password_confirmation && this.password.length > 0)
                {
                    let url = "http://localhost:3000/register"
                    if(this.is_admin != null || this.is_admin == 1) url = "http://localhost:3000/singup"
                    this.$http.post(url, {
                        username: this.username,
                        password: this.password
                    })
                    .then(response => {
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)

                        if (localStorage.getItem('jwt') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else{
                                this.$router.push('/')
                            }
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
                } else {
                    this.password = ""
                    return alert("Passwords do not match")
                }
            }
        }
    }
</script>
