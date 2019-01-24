<template>
  <div id="app">
    <Navbar />
    <Weather />
    <Login />
    <Register />
  </div> 
</template>

<script>
import Navbar from "@/components/Navbar";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Weather from "@/components/Weather";

export default {
  name: "Home",
  components: {
    Navbar,
    Login,
    Register,
    Weather
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
