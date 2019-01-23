<template>
 <div>
   <form class="login" @submit.prevent="login">
     <h2>Sign in</h2>
      <label>Email</label>
        <input required v-model="username" type="text" placeholder="Username"/>
      <label>Password</label>
        <input required v-model="password" type="password" placeholder="Password"/>
      <hr/>
    <button type="submit">Login</button>
   </form>
 </div>
</template>

<script>
export default {
  methods: {
    login: function () {
      let username = this.username
      let password = this.password
      this.$store.dispatch('login', { username, password })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
form {
  border: 1px solid purple;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 55vw;
  margin: auto;
  position: relative;
}

.login input {
  width: 70%;
  display: flex;
  color: red;
}

button {
  width: 60px;
  text-transform: uppercase;
  background: rgb(150, 149, 149);
}

</style>
