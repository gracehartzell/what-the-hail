<template>
  <div id="auth-page">
    <Login />
    <Register />
  </div>
</template>

<script>
import Login from "@/components/Login";
import Register from "@/components/Register";

export default {
  name: "Navbar",
  components: {
    Login, 
    Register
  }
};
</script>

<style>
#auth-page {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  max-width: 70%;
  margin-left: 5px;
  border-radius: 10px;
}
input {
  background-color: rgba(255, 255, 255, 0.438)
}
</style>

