<template>
  <div>
    <h4>Login</h4>
    <form>
      <label for="username">UserName</label>
      <div>
        <input id="username" type="username" v-model="username" required autofocus>
      </div>
      <div>
        <label for="password">Password</label>
        <div>
          <input id="password" type="password" v-model="password" required>
        </div>
      </div>
      <div>
        <button type="submit" @click="handleSubmit">Login</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
       const user = {
       'username': this.username,
       'password': this.password
      }

      const options ={
          'method' : 'post',
          'headers' : {
              "Accept" : "applications/json",
              "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
      }

      const request = new Request('http://localhost:3000/signin', options);
     
     fetch(request);
     alert('You are signin')
    }
  }
};
</script>