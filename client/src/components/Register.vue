<template>
	<div class="register">
		<h6>Register</h6>
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
.register {
  text-align: left;
  font-size: 14px;
}
.register label:nth-child(3) {
  padding-right: 5px;
}
.register h6 {
  font-weight: bold;
}
</style>
