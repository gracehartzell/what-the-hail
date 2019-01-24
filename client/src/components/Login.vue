<template>
  <div>
    <h4>Login</h4>
    <form>
      <label for="username" >Username</label>
        <input id="username" type="username" v-model="username" required autofocus>
      <label for="password" >Password</label>
        <input id="password" type="password" v-model="password" required>
      <button type="submit" @click="handleSubmit">Login</button>
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
        username: this.username,
        password: this.password
      };

      const options = {
        method: "post",
        headers: {
          Accept: "applications/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      };

      const request = new Request("http://localhost:3000/signin", options);

      fetch(request);
      alert("You are signin");
    }
  }
};
</script>
