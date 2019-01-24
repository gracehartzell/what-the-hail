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
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>

