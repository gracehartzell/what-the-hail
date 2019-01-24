<template>
	<div id="register">
		<h4>Register</h4>
			<form>
				<label for="username" >Username</label>
					<input id="username" type="username" v-model="username" required>
				<label for="password">Password</label>
					<input id="password" type="password" v-model="password" required>
				<button type="submit" @click="handleSubmit">Register</button>
		</form>
	</div>
</template>

<script>
export default {
  props: ["nextUrl"],
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

      const request = new Request("http://localhost:3000/signup", options);

      fetch(request);
      alert("You are done");
    }
  }
};
</script>

<style>
#register {
  border: 1px solid salmon;
  margin: auto;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#register label,
#register input {
  display: flex;
}

#register label {
  margin-top: 17px;
}

#register input {
  line-height: 1.2rem;
}

button {
margin: 15px 0;
float: right;
}
</style>
